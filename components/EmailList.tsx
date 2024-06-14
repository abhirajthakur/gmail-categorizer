"use client";

import { classifyEmails } from "@/actions/classify";
import { fetchEmails } from "@/actions/emails";
import Email from "@/components/Email";
import EmailLoadingSkeleton from "@/components/EmailLoadingSkeleton";
import SelectedEmail from "@/components/SelectedEmail";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function EmailList({ accessToken }: { accessToken: string }) {
  const [emailMessages, setEmailMessages] = useState<Email[] | undefined>([]);
  const [emailsCount, setEmailsCount] = useState<string>("15");
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [emailCategories, setEmailCategories] = useState<{
    [key: string]: string;
  }>();

  const { mutate: server_getEmails, isPending: isFetchingEmails } = useMutation(
    {
      mutationFn: fetchEmails,
      onSuccess: (data) => {
        setEmailMessages(data);
      },
    },
  );

  const { mutate: server_classifyEmails, isPending: isClassifyingEmails } =
    useMutation({
      mutationFn: classifyEmails,
      onSuccess: (data) => {
        setEmailCategories(data);
      },
    });

  const handleClassifyEmails = () => {
    server_classifyEmails({
      emails: emailMessages!,
      apiKey: localStorage.getItem("api_key")!,
    });
  };

  const handleEmailCountChange = (e: string) => {
    setEmailMessages([]);
    setEmailCategories({});
    setEmailsCount(e);
  };

  const handleEmailSelect = (email: Email) => {
    setSelectedEmail(email);
  };

  useEffect(() => {
    server_getEmails({
      accessToken: accessToken,
      maxResults: Number(emailsCount),
    });
  }, [emailsCount]);

  if (isFetchingEmails || isClassifyingEmails) {
    return (
      <div className="space-y-4 p-4">
        <EmailLoadingSkeleton />
        <EmailLoadingSkeleton />
        <EmailLoadingSkeleton />
        <EmailLoadingSkeleton />
        <EmailLoadingSkeleton />
      </div>
    );
  }

  return (
    <div className="no-scrollbar flex h-screen w-full overflow-y-scroll">
      <div className="flex-1">
        <div className="fixed top-[4.5rem] flex w-full items-center justify-between border border-b-gray-300 bg-white p-4 px-7">
          <div>
            <Select
              value={emailsCount.toString()}
              onValueChange={handleEmailCountChange}
            >
              <SelectTrigger className="bg-white text-gray-900">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Button
              variant="outline"
              className="gap-1 rounded-full"
              onClick={handleClassifyEmails}
            >
              <Image src="/icons/tags.svg" alt="tags" width={20} height={20} />
              <span className="text-xs">Classify</span>
            </Button>
          </div>
        </div>

        <div className="space-y-4 p-4 pt-20">
          {emailMessages?.map((email) => (
            <Email
              key={email.id}
              email={email}
              category={emailCategories?.[email.id]}
              handleEmailSelect={handleEmailSelect}
            />
          ))}
        </div>
      </div>

      {selectedEmail && (
        <SelectedEmail
          selectedEmail={selectedEmail}
          setSelectedEmail={setSelectedEmail}
        />
      )}
    </div>
  );
}
