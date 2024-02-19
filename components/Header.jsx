import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
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

export default function Header() {
    return (
        <header className="py-4 px-6 md:px-20 lg:px-32 flex items-center justify-between">
            <Logo/>
            <div className="flex items-center justify-center gap-2 md:gap-5">
                <ul className="md:flex hidden items-center gap-5">
                    <li><Link href="/" className="cursor-pointer hover:text-primary text-sm">Home</Link></li>
                    <li><Link href="/" className="cursor-pointer hover:text-primary text-sm">About Us</Link></li>
                </ul>
                <div className="flex items-center gap-2">
                    <Button asChild size="icon" variant="secondary" className="md:flex hidden"><Link href="/saved" className="cursor-pointer hover:text-primary text-sm"><Bookmark className="h-4 w-4" /></Link></Button>
                    <Button asChild size="icon" variant="secondary" className="md:flex hidden"><Link href="/new" className="cursor-pointer hover:text-primary text-sm"><Plus className="h-4 w-4" /></Link></Button>
                    <Button asChild><Link href="/sign-in">SignIn</Link></Button>
                </div>
                <div className="md:hidden block">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon"><Menu className="h-5 w-5" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-6 mt-2">
                            <DropdownMenuItem asChild className="mb-[3px]"><Link href="/" className="cursor-pointer flex gap-1 items-center justify-between w-full">Home <Home className="h-4 w-4" /></Link></DropdownMenuItem>
                            <DropdownMenuItem asChild><Link href="/" className="cursor-pointer flex gap-1 items-center justify-between w-full">About Us <Info className="h-4 w-4" /></Link></DropdownMenuItem>
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
            </div>
        </header>
    )
}