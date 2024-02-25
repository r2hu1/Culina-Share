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
import { getCurrentUserData } from "@/clerk/getCurrentUserData";
import { getByCategory } from "@/server_actions/getByCategory";
import { getByName } from "@/server_actions/getByName";

export default function HomeFeed() {
    const [category, setCategory] = useState('');
    const [activeCategory, setActiveCategory] = useState("Pasta");
    const [filteredMeals, setFilteredMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchInput, setSearchInput] = useState('');
    const [userData, setUserData] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setActiveCategory("none");

        if (category !== "") {
            await getByCategory(category).then((data) => {
                setFilteredMeals([data]);
                setLoading(false);
                setActiveCategory(category);
            });
        } else if (searchInput !== "") {
            await getByName(searchInput).then((data) => {
                setFilteredMeals([data]);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }

    };

    const handleTrending = async (e) => {
        e.preventDefault();
        setLoading(true);
        setActiveCategory(e.target.innerText);
        await getByCategory(e.target.innerText).then((data) => {
            setFilteredMeals([data]);
            setLoading(false);
        });
    };

    const getPastaCategory = async () => {
        await getByCategory("pasta").then((data) => {
            setFilteredMeals([data]);
            setLoading(false);
        });
    };

    const getAndSetUserData = async () => {
        await getCurrentUserData().then((data) => {
            setUserData(data);
        });
    };

    useEffect(() => {
        getPastaCategory();
        getAndSetUserData();
    }, []);

    return (
        <section className="mb-10 px-6 md:px-20 lg:px-32 grid gap-3">
            {userData && (
                <div className="grid gap-2 mb-5 mt-2">
                    <div className="flex flex-wrap gap-2 items-center justify-between">
                        <div>
                            <h1 className="text-xl font-bold">Welcome <span className="text-primary">{userData.firstName} {userData.lastName}</span>!</h1>
                            <p className="text-sm">Explore and share your favorite recipes.</p>
                        </div>
                        <div className="hidden sm:block">
                            <img className="rounded-full h-16 w-16" src={userData.imageUrl} alt="user-image" width={50} height={50} />
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
                <Select onValueChange={setCategory} value={category}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        {["beef", "chicken", "dessert", "lamb", "miscellaneous", "pasta", "pork", "seafood", "side", "starter", "vegetarian", "vegan", "breakfast", "goat"].map((cat) => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {category && <Button size="icon" type="submit" variant="secondary"><SearchIcon className="h-4 w-4" /></Button>}
                <Input type="text" placeholder="Search by name.." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                <Button size="icon" type="submit" variant="secondary"><SearchIcon className="h-4 w-4" /></Button>
            </form>
            <div>
                <span className="text-xs opacity-70">Popular<span className="text-primary">*</span></span>
                <div className="flex gap-2 items-center mt-1 flex-wrap">
                    {["Pasta", "Seafood", "Dessert", "Starter", "Breakfast"].map((cat) => (
                        <Button key={cat} size="sm" onClick={handleTrending} className="text-xs rounded-full h-8" variant={activeCategory === cat ? "default" : "secondary"}>{cat}</Button>
                    ))}
                </div>
            </div>
            <div className="mt-10">
                {loading && (
                    <div className="h-[300px] flex items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin" />
                    </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-fit mx-auto">
                    {!loading && filteredMeals[0]?.meals?.map((meal) => (
                        <Card {...meal} category={activeCategory} key={meal.idMeal} showBookmark={userData && true}/>
                    ))}
                    {!filteredMeals[0]?.meals && !loading && (
                        <div className="text-center h-[200px] items-center justify-center flex">
                            <h1 className="text-base">No results found</h1>
                        </div>
                    )}
                </div>
            </div>
            {!loading && filteredMeals[0]?.meals && (
                <Button variant="secondary" className="mx-auto sm:w-fit mt-7" disabled>No more results..</Button>
            )}
        </section>
    );
}
