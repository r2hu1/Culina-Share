import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Header({ title }) {
    return (
        <header className="print:hidden py-4 px-6 md:px-20 lg:px-32 flex items-center justify-between">
            <div>
                <Button size="icon" asChild><Link href="/"><ArrowLeft className="h-5 w-5" /></Link></Button>
            </div>
            <h1 className="text-lg font-semibold">Recipe Details</h1>
            <div className="flex items-center gap-2">
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
                <ClerkLoading>
                    <Skeleton className="h-10 w-10 rounded-full" />
                </ClerkLoading>
            </div>
        </header>
    )
}