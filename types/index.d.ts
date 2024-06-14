declare type HeaderProps = {
  name: string;
  email: string;
  profileImage: string;
};

declare type Email = {
  id: string;
  subject: string;
  sender: string;
  date: string;
  content: string;
};

declare type SelectedEmailProps = {
  selectedEmail: Email;
  setSelectedEmail: (value: SetStateAction<Email | null>) => void;
};

declare type EmailProps = {
  email: Email;
  category: string | undefined;
  handleEmailSelect: (email: Email) => void;
};

declare type EmailListProps = {
  profileImage: string;
  accessToken: string;
};
