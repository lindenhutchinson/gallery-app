"use client";

import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthis"

export default function TopNav() {
  const router = useRouter();

    return (
      <nav className="flex items-center justify-between p-4 text-xl font-semibold border-b">
        <div>Gallery</div>
        <div className="flex flex-row">
            <UploadButton endpoint="imageUploader"
             onClientUploadComplete={() => {
              router.refresh();
             }}
            />
        </div>
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }