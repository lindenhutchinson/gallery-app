import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs"

export default function TopNav() {
    return (
      <nav className="flex items-center justify-between p-4 text-xl font-semibold border-b">
        <div>Gallery</div>
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