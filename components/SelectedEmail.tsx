import { Button } from "@/components/ui/button";

export default function SelectedEmail({
  selectedEmail,
  setSelectedEmail,
}: SelectedEmailProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="flex min-h-[58%] w-full max-w-3xl flex-col justify-between rounded-md bg-white p-6 shadow-lg dark:bg-gray-800">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                {selectedEmail.subject}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>{selectedEmail.sender}</span>
              <span>-</span>
              <span>{selectedEmail.date}</span>
            </div>
          </div>
          <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">
            {selectedEmail.content}
          </div>
        </div>
        <div>
          <div className="mt-3 flex justify-end">
            <Button variant="default" onClick={() => setSelectedEmail(null)}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

//
