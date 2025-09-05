"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import GoogleLoginButton from "@/components/GoogleLoginButton/GoogleLoginButton";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <Card className="w-[465px] border-0 shadow-none">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-4xl font-medium mb-[15px]">
            Log in or sign up
          </CardTitle>
          <CardDescription className="text-gray-600 max-w-[425px] mx-auto">
            You’ll get smarter responses and can upload files, images, and more.
          </CardDescription>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-[65px] rounded-full px-[25px] placeholder:text-[#b4b4b4] placeholder:font-semibold"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-black/90 h-[65px] rounded-full"
            >
              Continue
            </Button>
          </form>
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">or</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-2">
            <GoogleLoginButton />
            <Button variant="outline" className="w-full h-[65px] rounded-full">
              <Image
                width={18}
                height={18}
                quality={100}
                src="/icons/microsoft-logo-BUXxQnXH.svg"
                alt="microsoft-logo"
              />
              Continue with Microsoft Account
            </Button>
            <Button variant="outline" className="w-full h-[65px] rounded-full">
              <Image
                width={18}
                height={18}
                quality={100}
                src="/icons/apple-logo-vertically-balanced-rwLdlt8P.svg"
                alt="apple-logo"
              />
              Continue with Apple
            </Button>
            <Button variant="outline" className="w-full h-[65px] rounded-full">
              <Phone />
              Continue with phone
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-2 text-sm text-center">
          <div className="flex items-center justify-center gap-5">
            <p className="underline">Terms of Use</p>
            <Separator orientation="vertical" className="!h-[20px]" />
            <p className="underline">Privacy Policy</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
