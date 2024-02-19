"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";

export default function Search() {
    const [cate,setCate] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        alert(cate);
    };

    return (
        <>
            <div>
                <span className="text-xs opacity-70">Search by category or name<span className="text-primary">*</span></span>
            </div>
            <form onSubmit={handleSearch} className="-mt-2 flex items-center gap-2">
                <Select onValueChange={setCate}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
                <Input type="text" placeholder="Search recipes.." />
                <Button size="icon" type="submit" variant="secondary"><SearchIcon className="h-4 w-4" /></Button>
            </form>
            <div>
                <span className="text-xs opacity-70">Popular<span className="text-primary">*</span></span>
                <div className="flex gap-2 items-center mt-1 flex-wrap">
                    <Button asChild size="sm" className="text-xs rounded-full h-8"><Link href="/category/pasta">Pasta</Link></Button>
                    <Button asChild size="sm" className="text-xs rounded-full h-8" variant="secondary"><Link href="/category/seafood">Seafood</Link></Button>
                    <Button asChild size="sm" className="text-xs rounded-full h-8" variant="secondary"><Link href="/category/dessert">Dessert</Link></Button>
                    <Button asChild size="sm" className="text-xs rounded-full h-8" variant="secondary"><Link href="/category/starter">Starter</Link></Button>
                    <Button asChild size="sm" className="text-xs rounded-full h-8" variant="secondary"><Link href="/category/breakfast">Breakfast</Link></Button>
                </div>
            </div>
        </>
    )
}