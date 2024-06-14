import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
