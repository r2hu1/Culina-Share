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
    const [cate, setCate] = useState('');
    const [active, setActive] = useState("Pasta");

    const handleSearch = (e) => {
        e.preventDefault();
        alert(cate);
    };
    const handleTrending = async (e) => {
        e.preventDefault();
        setActive(e.target.innerText);
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
                        <SelectItem value="beef">Beef</SelectItem>
                        <SelectItem value="chicken">Chicken</SelectItem>
                        <SelectItem value="dessert">Dessert</SelectItem>
                        <SelectItem value="lamb">Lamb</SelectItem>
                        <SelectItem value="miscellaneous">Miscellaneous</SelectItem>
                        <SelectItem value="pasta">Pasta</SelectItem>
                        <SelectItem value="pork">Pork</SelectItem>
                        <SelectItem value="seafood">Seafood</SelectItem>
                        <SelectItem value="side">Side</SelectItem>
                        <SelectItem value="starter">Starter</SelectItem>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                        <SelectItem value="breakfast">Breakfast</SelectItem>
                        <SelectItem value="goat">Goat</SelectItem>
                    </SelectContent>
                </Select>
                {cate && <Button size="icon" type="submit" variant="secondary"><SearchIcon className="h-4 w-4" /></Button>}
                <Input type="text" placeholder="Search recipes.." />
                <Button size="icon" type="submit" variant="secondary"><SearchIcon className="h-4 w-4" /></Button>
            </form>
            <div>
                <span className="text-xs opacity-70">Popular<span className="text-primary">*</span></span>
                <div className="flex gap-2 items-center mt-1 flex-wrap">
                    <Button size="sm" onClick={handleTrending} className="text-xs rounded-full h-8" variant={active == "Pasta" ? "default" : "secondary"}>Pasta</Button>
                    <Button size="sm" onClick={handleTrending} className="text-xs rounded-full h-8" variant={active == "Seafood" ? "default" : "secondary"}>Seafood</Button>
                    <Button size="sm" onClick={handleTrending} className="text-xs rounded-full h-8" variant={active == "Dessert" ? "default" : "secondary"}>Dessert</Button>
                    <Button size="sm" onClick={handleTrending} className="text-xs rounded-full h-8" variant={active == "Starter" ? "default" : "secondary"}>Starter</Button>
                    <Button size="sm" onClick={handleTrending} className="text-xs rounded-full h-8" variant={active == "Breakfast" ? "default" : "secondary"}>Breakfast</Button>
                </div>
            </div>
        </>
    )
}