import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const categories = [
	{ name: "important", color: "#4CAF50" },
	{ name: "promotions", color: "#2196F3" },
	{ name: "social", color: "#FF9800" },
	{ name: "marketing", color: "#673AB7" },
	{ name: "spam", color: "#9E9E9E" },
	{ name: "general", color: "#FF2450" },
];

export function getInitials(fullName: string) {
	const names = fullName.split(" ");
	let initials = names[0].substring(0, 1).toUpperCase();

	if (names.length > 1) {
		initials += names[names.length - 1].substring(0, 1).toUpperCase();
	}
	return initials;
}

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
