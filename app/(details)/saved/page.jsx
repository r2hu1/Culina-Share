"use client";
import Card from "@/app/_components/Card";
import Header from "@/app/_components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { deleteBookmark } from "@/server_actions/deleteBookmark";
import { findUserSaved } from "@/server_actions/findUserSaved";
import { BookmarkMinus, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Saved() {
    const [userSaved, setUserSaved] = useState([]);
    const [loding, setLoding] = useState(false);
    const [dlLoading, setDlLoading] = useState(false);

    const getA = async () => {
        setLoding(true);
        try {
            const data = await findUserSaved().then((data) => {
                setUserSaved(JSON.parse(data));
            });
            for (let i = 0; i < userSaved.length; i++) {
                userSaved.push(userSaved[i]);
            };
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoding(false);
        }
    };

    const handleDelete = async (id) => {
        setDlLoading(true);
        try {
            await deleteBookmark({ recipeid: id }).then((data) => {
                toast.success("Recipe removed successfully");
            });
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setDlLoading(false);
        }
    }
    useEffect(() => {
        getA();
    }, [dlLoading]);
    return (
        <section>
            <Header title="Saved" />
            <div className="mt-12 px-6 md:px-20 lg:px-32">
                {loding && (
                    <div className="h-[300px] mx-auto flex items-center justify-center">
                        <Loader2 className="h-6 w-6 animate-spin" />
                    </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-fit mx-auto">
                    {!loding && userSaved.map((recipe) => (
                        <div key={recipe.recipeId} className="relative border rounded-md overflow-hidden md:h-[300px]">
                            <div className="relative">
                                <Image height={500} width={500} src={recipe.image} alt="thumbnail" className="w-full h-full aspect-square transition bg-secondary/50 hover:opacity-80 cursor-pointer" />
                                <div className="absolute top-0 left-0 right-0 w-full p-2 flex items-center justify-end">
                                    <Button size="icon" variant="secondary" onClick={(e) => { handleDelete(recipe.recipeId) }}>{!dlLoading ? <BookmarkMinus className="h-4 w-4" /> : <Loader2 className="h-4 w-4 animate-spin" />}</Button>
                                </div>
                            </div>
                            <div className="py-3 px-4 grid gap-1 absolute z-10 bottom-0 left-0 right-0 w-full bg-background sm:bg-background/70 backdrop-blur-3xl">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-base hidden sm:flex">{recipe.title.slice(0, 15)}...</h1>
                                    <h1 className="text-base sm:hidden">{recipe.title}</h1>
                                    <Badge variant="secondary" className="w-fit">{recipe.category}</Badge>
                                </div>
                                <Button className="mt-2" size="sm" asChild><Link href={`/recipe/${recipe.recipeId}`}>View</Link></Button>
                            </div>
                        </div>
                    ))}
                </div>
                {!loding && userSaved.length === 0 && (
                    <div className="text-center h-[300px] flex items-center justify-center">
                        <h1 className="text-base font-muted opacity-70">No saved recipes!</h1>
                    </div>
                )}
            </div>
        </section>
    )
}