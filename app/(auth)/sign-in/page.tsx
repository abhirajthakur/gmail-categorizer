"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
  const [openAIApi, setOpenAIApi] = useState<string>();
  const onclick = () => {
    localStorage.setItem("openai_api_key", openAIApi!);
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="flex w-full justify-between bg-white">
      <div className="flex h-screen w-full items-center justify-center max-md:hidden">
        <Image
          src="/icons/cover.png"
          alt="cover-image"
          width={526}
          height={526}
          className="rounded-lg"
        />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-12">
        <div>
          <h1 className="mb-1.5 text-center text-5xl font-bold">
            Gmail Categorizer
          </h1>
          <p className="text-center text-lg font-medium">
            Email Categorization
          </p>
        </div>

        <div className="w-full max-w-sm">
          <Input
            className="border-black"
            type="password"
            onChange={(e) => setOpenAIApi(e.target.value)}
            placeholder="Enter your OpenAI api key"
          />
        </div>

        <Button
          type="submit"
          className="rounded-full px-2 py-5"
          variant="outline"
          onClick={() => onclick()}
        >
          <div className="flex items-center gap-2">
            <FcGoogle className="text-3xl" />
            <span className="text-lg">Sign in with Google</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
