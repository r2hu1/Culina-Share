"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { deleteBookmark } from "@/server_actions/deleteBookmark";
import { findUserSaved } from "@/server_actions/findUserSaved";
import { BookmarkMinus, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/_components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Saved() {
    const [userSaved, setUserSaved] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const getSavedRecipes = async () => {
        try {
            const data = await findUserSaved();
            setUserSaved(JSON.parse(data));
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        setDeleteLoading(true);
        try {
            await deleteBookmark({ recipeid: id });
            setUserSaved(prevSaved => prevSaved.filter(recipe => recipe.recipeId !== id));
            toast.success("Recipe removed successfully!");
        } catch (err) {
            console.log(err);
        } finally {
            setDeleteLoading(false);
        }
    };

    useEffect(() => {
        getSavedRecipes();
    }, []);

    return (
        <section>
            <Header title="Saved" />
            <div className="mt-12 px-6 md:px-20 lg:px-32">
                {loading && (
                    <div className="h-[300px] mx-auto flex items-center justify-center">
                        <Loader2 className="h-6 w-6 animate-spin" />
                    </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-fit mx-auto">
                    {!loading && userSaved.map(recipe => (
                        <div key={recipe.recipeId} className="relative border rounded-md overflow-hidden md:h-[300px]">
                            <div className="relative">
                                <Image height={500} width={500} src={recipe.image} alt="thumbnail" className="w-full h-full aspect-square transition bg-secondary/50 hover:opacity-80 cursor-pointer" />
                                <div className="absolute top-0 left-0 right-0 w-full p-2 flex items-center justify-end">
                                    <Button size="icon" variant="secondary" onClick={() => handleDelete(recipe.recipeId)}>
                                        {deleteLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <BookmarkMinus className="h-4 w-4" />}
                                    </Button>
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
                {!loading && userSaved.length === 0 && (
                    <div className="text-center h-[300px] flex items-center justify-center">
                        <h1 className="text-base font-muted opacity-70">No saved recipes!</h1>
                    </div>
                )}
            </div>
        </section>
    );
}
