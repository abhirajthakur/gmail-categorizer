"use client";

import { logout } from "@/actions/logout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getInitials } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <header className="sticky top-0 z-20 flex items-center gap-4 bg-gray-100 px-4 py-3 dark:bg-gray-800">
      <Avatar className="h-10 w-10 rounded-full">
        <AvatarImage src={user?.image!} />
        <AvatarFallback>{getInitials(user?.name!)}</AvatarFallback>
      </Avatar>
      <div className="grid flex-1 gap-1">
        <div className="font-medium">{user?.name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {user?.email}
        </div>
      </div>
      <Button variant="ghost" size="sm" onClick={() => logout()}>
        <Image src="/icons/logout.svg" alt="mail icon" width={20} height={20} />
        <span className="sr-only">Logout</span>
      </Button>
    </header>
  );
}
