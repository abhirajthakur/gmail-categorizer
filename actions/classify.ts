"use server";

import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";

export const classifyEmails = async ({
  emails,
  apiKey,
}: {
  emails: Email[];
  apiKey: string;
}) => {
  const categories: { [key: string]: string } = {};

  for (const email of emails ?? []) {
    const emailCategory = await getEmailCategory({
      email: email.content,
      apiKey: apiKey,
    });
    categories[email.id] = emailCategory;
  }

  console.log(categories);

  return categories;
};

const getEmailCategory = async ({
  email,
  apiKey,
}: {
  email: string;
  apiKey: string;
}): Promise<string> => {
  // const categories = [
  //   "important",
  //   "promotions",
  //   "social",
  //   "marketing",
  //   "spam",
  //   "general",
  // ];
  //
  // const randomIndex = Math.floor(Math.random() * categories.length);
  // return categories[randomIndex];

  const taggingPrompt = ChatPromptTemplate.fromTemplate(
    "Extract the desired information from the following passage.\nOnly extract the properties mentioned in the 'Classification' function.\nPassage:\n{input}",
  );

  const classificationSchema = z.object({
    category: z.enum([
      "important",
      "promotions",
      "social",
      "marketing",
      "spam",
      "general",
    ]),
  });

  const llm = new ChatOpenAI({
    apiKey,
    temperature: 0,
    model: "gpt-3.5-turbo",
  });

  // Name is optional, but gives the models more clues as to what your schema represents
  const llmWihStructuredOutput = llm.withStructuredOutput(
    classificationSchema,
    {
      name: "category extractor",
    },
  );

  const taggingChain = taggingPrompt.pipe(llmWihStructuredOutput);

  const res = await taggingChain.invoke({ input: email });
  return res.category;
};
