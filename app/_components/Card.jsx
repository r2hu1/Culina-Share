import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Card({ category, ...props }) {
    return (
        <div key={props.strMeal} className="relative border rounded-md overflow-hidden md:h-[300px]">
            <div className="relative">
                <Image height={500} width={500} src={props.strMealThumb} alt="thumbnail" className="w-full h-full aspect-square transition bg-secondary/50 hover:opacity-80 cursor-pointer" />
                <div className="absolute top-0 left-0 right-0 w-full p-2 flex items-center justify-end">
                    <Button size="icon" variant="secondary"><Bookmark className="h-4 w-4" /></Button>
                </div>
            </div>
            <div className="py-3 px-4 grid gap-1 absolute z-10 bottom-0 left-0 right-0 w-full bg-background sm:bg-background/70 backdrop-blur-3xl">
                <div className="flex items-center justify-between">
                    <h1 className="text-base hidden sm:flex">{props.strMeal.slice(0, 15)}...</h1>
                    <h1 className="text-base sm:hidden">{props.strMeal}</h1>
                    <Badge variant="secondary" className="w-fit">{props.strCategory || category}</Badge>
                </div>
                <Button className="mt-2" size="sm" asChild><Link href={`/recipe/${props.idMeal}`}>View</Link></Button>
            </div>
        </div>
    )
}