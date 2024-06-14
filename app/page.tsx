"use client";

import EmailList from "@/components/EmailList";
import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function Home() {
  const queryClient = new QueryClient();
  const session = useSession();
  const accessToken = session.data?.accessToken ?? "";

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen flex-col">
        <Header />
        <EmailList accessToken={accessToken} />
      </div>
    </QueryClientProvider>
  );
}
