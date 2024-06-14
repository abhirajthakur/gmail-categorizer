"use server";

type headerType = {
  name: string;
  value: string;
};

const getEmail = async ({
  accessToken,
  messageId,
}: {
  accessToken: string;
  messageId: string;
}): Promise<Email | undefined> => {
  try {
    const res = await fetch(
      `https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const data = await res.json();

    const id = data.id;
    const subject = data.payload.headers.find(
      (header: headerType) => header.name === "Subject",
    ).value;

    const sender = data.payload.headers
      .find((header: headerType) => header.name === "From")
      .value.split("<")[0]
      .trim();

    const dateString = data.payload.headers.find(
      (header: headerType) => header.name === "Date",
    ).value;

    const dateObject = new Date(dateString);

    // Format the date to "MMM DD, YYYY" using toLocaleDateString()
    const date = dateObject.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const content = data.snippet
      .replaceAll("&#39;", "'")
      .replaceAll("&quot;", '"')
      .replaceAll("&amp;", "&")
      .replaceAll("&lt;", "<")
      .replaceAll("&gt;", ">")
      .replaceAll("&#x2F;", "\\");

    const email = {
      id,
      subject,
      sender,
      date,
      content,
    };

    return email;
  } catch (e) {
    console.error("Error occured while fetching the message", e);
  }
};

export const fetchEmails = async ({
  accessToken,
  maxResults,
}: {
  accessToken: string;
  maxResults: number;
}): Promise<Email[]> => {
  try {
    const response = await fetch(
      `https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=${maxResults}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const data = await response.json();

    const messages: Email[] = await Promise.all(
      data.messages.map(async (email: any) => {
        const message = await getEmail({
          messageId: email.id,
          accessToken: accessToken,
        });
        return message;
      }),
    );

    return messages;
  } catch (e) {
    console.error("Error occured while fetching messages", e);
    return [];
  }
};
