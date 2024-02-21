"use client";
import Card from "./Card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bookmark, Loader2, Plus, SearchIcon } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getByCategory } from "@/server_actions/getByCategory";
import { getByName } from "@/server_actions/getByName";
import Image from "next/image";
import { getCurrentUserData } from "@/clerk/getCurrentUserData";

export default function HomeFeed() {

    const [cate, setCate] = useState('');
    const [active, setActive] = useState("Pasta");
    const [filtered, setFiltered] = useState([]);
    const [loding, setLoding] = useState(true);
    const [inpVal, setInpVal] = useState('');
    const [userData, setUserData] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoding(true);
        setActive("none");
        if (cate !== "") {
            await getByCategory(cate).then((data) => {
                setFiltered([data]);
                setLoding(false);
            });
        }
        else if (inpVal != "") {
            await getByName(inpVal).then((data) => {
                setFiltered([data]);
                setLoding(false);
            });
        }
        else {
            setLoding(false);
        }
        setCate('');
    };

    const handleTrending = async (e) => {
        e.preventDefault();
        setLoding(true);
        setActive(e.target.innerText);
        await getByCategory(e.target.innerText).then((data) => {
            setFiltered([data]);
            setLoding(false);
        });
    };

    const getPastaCate = async () => {
        await getByCategory("pasta").then((data) => {
            setFiltered([data]);
            setLoding(false);
        });
    };

    const getAndSet = async () => {
        await getCurrentUserData().then((data) => {
            setUserData(data);
        });
    };


    useEffect(() => {
        getPastaCate();
        getAndSet();
    }, []);

    return (
        <section className="mb-10 px-6 md:px-20 lg:px-32 grid gap-3">
            {userData?.firstName && (
                <div className="grid gap-2 mb-5 mt-2">
                    <div className="flex flex-wrap gap-2 items-center justify-between">
                        <div>
                            <h1 className="text-xl font-bold">Welcome <span className="text-primary">{userData?.firstName} {userData?.lastName}</span>!</h1>
                            <p className="text-sm">Explore and share your favorite recipes.</p>
                        </div>
                        <div className="hidden sm:block">
                            <Image className="rounded-full h-16 w-16" src={userData.imageUrl} alt="user-image" width={50} height={50} />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <Button asChild><Link href="/new" className="flex gap-1 items-center">New <Plus className="h-4 w-4" /></Link></Button>
                        <Button variant="secondary" size="icon" asChild><Link href="/saved"><Bookmark className="h-4 w-4" /></Link></Button>
                    </div>
                </div>
            )}
            <div id="explore">
                <span className="text-xs opacity-70">Search by category or name<span className="text-primary">*</span></span>
            </div>
            <form onSubmit={handleSearch} className="-mt-2 flex items-center gap-2">
                <Select onValueChange={setCate} value={cate}>
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
                <Input type="text" placeholder="Search by name.." value={inpVal} onChange={(e) => setInpVal(e.target.value)} />
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
            <div className="mt-10">
                {loding && (
                    <div className="h-[300px] flex items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin" />
                    </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-fit mx-auto">
                    {!loding && filtered[0]?.meals?.map((item) => (
                        <Card {...item} category={active} key={item.idMeal} />
                    ))}
                    {!filtered[0]?.meals && !loding && (
                        <div className="text-center h-[200px] items-center justify-center flex">
                            <h1 className="text-base">No results found</h1>
                        </div>
                    )}
                </div>
            </div>
            {!loding && filtered[0]?.meals && (
                <Button variant="secondary" className="mx-auto sm:w-fit mt-7" disabled>No more results..</Button>
            )}
        </section>
    )
}