import { Skeleton } from "@/components/ui/skeleton";
import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="absolute top-0 left-0 right-0 px-6 -z-10 h-full w-full flex items-center justify-center">
            <ClerkLoaded>
                <SignIn />
            </ClerkLoaded>
            <ClerkLoading>
                <Skeleton className="h-[500px] w-screen max-w-sm" />
            </ClerkLoading>
        </div>
    );
}