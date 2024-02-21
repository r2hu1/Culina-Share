import Link from "next/link";
import { Button } from "./ui/button";
import { Bookmark, Home, Info, Menu, Plus } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "./Logo";
import { ClerkLoading, UserButton, currentUser } from "@clerk/nextjs";
import { Skeleton } from "./ui/skeleton";

export default async function Header() {
    const user = await currentUser();
    return (
        <header className="py-4 print:hidden px-6 md:px-20 lg:px-32 flex items-center justify-between">
            <Logo />
            <div className="flex items-center justify-center gap-2 md:gap-5">
                <div className="flex items-center gap-2">
                    {!user ? (
                        <Button asChild><Link href="/sign-in">SignIn</Link></Button>
                    ) : (
                        <>
                            <UserButton afterSignOutUrl="/" />
                            <ClerkLoading>
                                <Skeleton className="h-10 w-10 rounded-full" />
                            </ClerkLoading>
                        </>
                    )}
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon"><Menu className="h-5 w-5" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-6 mt-2 md:mr-24">
                        <DropdownMenuItem asChild className="mb-[3px]"><Link href="/" className="cursor-pointer flex gap-1 items-center justify-between w-full">Home <Home className="h-4 w-4" /></Link></DropdownMenuItem>
                        <DropdownMenuItem asChild><Link href="/about-us" className="cursor-pointer flex gap-1 items-center justify-between w-full">About Us <Info className="h-4 w-4" /></Link></DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href="/saved" className="flex gap-1 items-center justify-between w-full">Saved<Bookmark className="h-4 w-4" /></Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href="/new" className="flex gap-1 items-center justify-between w-full">Create<Plus className="h-4 w-4" /></Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}