import { Badge } from "@/components/ui/badge";
import { categories } from "@/lib/utils";

export default function Email({
  email,
  category,
  handleEmailSelect,
}: EmailProps) {
  const emailContent = email.content.split(" ");

  return (
    <div
      key={email.id}
      className="cursor-pointer rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
      onClick={() => handleEmailSelect(email)}
    >
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
          {email.subject}
        </h3>
        <div className="flex items-center gap-2">
          {category && (
            <Badge
              className="text-xs"
              style={{
                backgroundColor: categories.find((c) => c.name === category)
                  ?.color,
              }}
            >
              {category.slice(0, 1).toUpperCase() + category.slice(1)}
            </Badge>
          )}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {email.sender}
          </span>
        </div>
      </div>
      <p className="line-clamp-2 text-gray-600 dark:text-gray-400">
        {emailContent.slice(0, 12).join(" ") +
          (emailContent.length > 12 ? "..." : "")}
      </p>
    </div>
  );
}
