export default function EmailLoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-4 divide-y divide-gray-200 rounded border border-gray-200 p-4 pt-20 shadow-md dark:divide-gray-700 dark:border-gray-700 md:p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="mb-2.5 h-2.5 w-2/6 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-2 w-3/5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 w-14 rounded-full bg-gray-300 dark:bg-gray-700" />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
