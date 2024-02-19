import { Skeleton } from "@/components/ui/skeleton";
import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="absolute px-6 top-0 left-0 right-0 -z-10 h-full w-full flex items-center justify-center">
      <ClerkLoaded>
        <SignUp />
      </ClerkLoaded>
      <ClerkLoading>
        <Skeleton className="h-[500px] w-screen max-w-sm" />
      </ClerkLoading>
    </div>
  );
}