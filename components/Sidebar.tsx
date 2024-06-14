import { categories } from "@/lib/utils";

export default function Sidebar() {
  return (
    <div className="sticky left-0 top-0 h-full w-64 border-r border-gray-200 bg-gray-100 p-4 dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-4 text-lg font-bold">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category.name}
            className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <div
              className="h-4 w-4 rounded-full"
              style={{ backgroundColor: category.color }}
            />
            <span className="text-gray-700 dark:text-gray-300">
              {category.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
