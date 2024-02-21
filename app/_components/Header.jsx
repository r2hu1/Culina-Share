"use client"
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bookmark, Home, Info, Menu, Plus } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header({ title }) {
    const router = useRouter();

    return (
        <header className="print:hidden py-4 px-6 md:px-20 lg:px-32 flex items-center justify-between">
            <div>
                <Button size="icon" onClick={() => router.back()} asChild><Link href="#back"><ArrowLeft className="h-5 w-5" /></Link></Button>
            </div>
            <h1 className="text-lg font-semibold">{title}</h1>
            <div>
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