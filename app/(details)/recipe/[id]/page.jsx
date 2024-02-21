"use client";
import Header from "@/app/_components/Header";
import { Badge } from "@/components/ui/badge";
import { getById } from "@/server_actions/getById";
import { Bookmark, Loader2, Printer, Share2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { addBookmark } from "@/server_actions/addBookmark";

export default function Recipe({ params }) {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);

    const getDetails = async () => {
        await getById(params.id).then((data) => {
            setData(data?.meals[0]);
        })
    };

    const handleShare = () => {
        try {
            navigator.share({
                title: data?.strMeal,
                text: data?.strInstructions,
            })
        }
        catch (err) {
            toast.error("Something went wrong, please try again later.");
        }
    };

    const handlePrint = () => {
        try {
            window.print();
        }
        catch (err) {
            toast.error("Something went wrong, please try again later.");
        }
    };

    const handleBookmark = async () => {
        try {
            setLoading(true);
            const datas = await addBookmark({ recipeid: data?.idMeal, image: data?.strMealThumb, title: data?.strMeal, category: data?.strCategory });
            if (datas.error) {
                toast.error(datas.error);
            }
            else {
                toast.success("Recipe saved successfully!");
            }
            setLoading(false);
        }
        catch (err) {
            toast.error(err.message);
        }
    }

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <section>
            <Header title="Recipe Details"/>
            {!data && (<div className="h-[300px] flex items-center justify-center">
                <Loader2 className="h-6 w-6 animate-spin" />
            </div>)}
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
                                {data?.strIngredient1 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient1}</TableCell>
                                        <TableCell>{data?.strMeasure1}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient2 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient2}</TableCell>
                                        <TableCell>{data?.strMeasure2}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient3 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient3}</TableCell>
                                        <TableCell>{data?.strMeasure3}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient4 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient4}</TableCell>
                                        <TableCell>{data?.strMeasure4}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient5 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient5}</TableCell>
                                        <TableCell>{data?.strMeasure5}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient6 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient6}</TableCell>
                                        <TableCell>{data?.strMeasure6}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient7 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient7}</TableCell>
                                        <TableCell>{data?.strMeasure7}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient8 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient8}</TableCell>
                                        <TableCell>{data?.strMeasure8}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient9 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient9}</TableCell>
                                        <TableCell>{data?.strMeasure9}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient10 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient10}</TableCell>
                                        <TableCell>{data?.strMeasure10}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient11 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient11}</TableCell>
                                        <TableCell>{data?.strMeasure11}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient12 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient12}</TableCell>
                                        <TableCell>{data?.strMeasure12}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient13 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient13}</TableCell>
                                        <TableCell>{data?.strMeasure13}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient14 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient14}</TableCell>
                                        <TableCell>{data?.strMeasure14}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient15 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient15}</TableCell>
                                        <TableCell>{data?.strMeasure15}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient16 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient16}</TableCell>
                                        <TableCell>{data?.strMeasure16}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient17 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient17}</TableCell>
                                        <TableCell>{data?.strMeasure17}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient18 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient18}</TableCell>
                                        <TableCell>{data?.strMeasure18}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient19 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient19}</TableCell>
                                        <TableCell>{data?.strMeasure19}</TableCell>
                                    </TableRow>
                                )}
                                {data?.strIngredient20 && (
                                    <TableRow>
                                        <TableCell>{data?.strIngredient20}</TableCell>
                                        <TableCell>{data?.strMeasure20}</TableCell>
                                    </TableRow>
                                )}
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
    )
}