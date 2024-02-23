"use client";
import Header from "@/app/_components/Header";
import { Badge } from "@/components/ui/badge";
import { getById } from "@/server_actions/getById";
import { Bookmark, Loader2, Printer, Share2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { addBookmark } from "@/server_actions/addBookmark";

export default function Recipe({ params }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const getDetails = async () => {
        try {
            const result = await getById(params.id);
            setData(result?.meals?.[0] ?? null);
        } catch (error) {
            console.error("Error fetching recipe details:", error);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    const handleShare = () => {
        try {
            navigator.share({
                title: data?.strMeal,
                text: data?.strInstructions,
            });
        } catch (error) {
            console.error("Error sharing recipe:", error);
            toast.error("Something went wrong, please try again later.");
        }
    };

    const handlePrint = () => {
        try {
            window.print();
        } catch (error) {
            console.error("Error printing recipe:", error);
            toast.error("Something went wrong, please try again later.");
        }
    };

    const handleBookmark = async () => {
        try {
            setLoading(true);
            const result = await addBookmark({
                recipeid: data?.idMeal,
                image: data?.strMealThumb,
                title: data?.strMeal,
                category: data?.strCategory,
            });
            if (result.error) {
                toast.error(result.error);
            } else {
                toast.success("Recipe saved successfully!");
            }
        } catch (error) {
            console.error("Error adding bookmark:", error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getDetails();
    }, []);

    const renderIngredients = () => {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = data[`strIngredient${i}`];
            const measure = data[`strMeasure${i}`];
            if (ingredient && measure) {
                ingredients.push(
                    <TableRow key={i}>
                        <TableCell>{ingredient}</TableCell>
                        <TableCell>{measure}</TableCell>
                    </TableRow>
                );
            }
        }
        return ingredients;
    };

    return (
        <section>
            <Header title="Recipe Details" />
            {loading && (
                <div className="h-[300px] flex items-center justify-center">
                    <Loader2 className="h-6 w-6 animate-spin" />
                </div>
            )}
            {data && (
                <div className="mt-10 px-6 md:px-20 lg:px-32">
                    <iframe src={`https://www.youtube.com/embed/${data?.strYoutube?.split("v=")[1]}`} width="100%" height="300" frameBorder="0" allowFullScreen title={data?.strMeal} className="rounded-md print:hidden"></iframe>
                    <div className="mt-7">
                        <div className="flex flex-wrap items-center justify-between">
                            <h1 className="text-lg font-semibold">{data?.strMeal}</h1>
                            <Badge>{data?.strCategory}</Badge>
                        </div>
                        <Table className="mt-4 mb-4">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Ingredients</TableHead>
                                    <TableHead>Quantity</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {renderIngredients()}
                            </TableBody>
                        </Table>
                        <span className="text-sm font-light opacity-70">Detailed instructions.</span>
                        <p className="text-sm mt-2">{data?.strInstructions}</p>
                        <div className="flex print:hidden flex-wrap items-center gap-2 mt-7">
                            <Button onClick={handleShare} className="flex items-center gap-1">Share <Share2 className="w-4 h-4" /></Button>
                            <Button onClick={handleBookmark} className="flex items-center gap-1" size="icon" variant="secondary">{!loading ? <Bookmark className="w-4 h-4" /> : <Loader2 className="w-4 h-4 animate-spin" />}</Button>
                            <Button onClick={handlePrint} className="flex items-center gap-2" size="icon" variant="secondary"><Printer className="w-4 h-4" /></Button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}