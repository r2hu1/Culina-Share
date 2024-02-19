import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Card({ ...props }) {
    return (
        <Link href={`/recipe/${props.idMeal}`}>
            <div key={props.strMeal} className="relative border rounded-md overflow-hidden sm:max-w-[200px] sm:h-[240px]">
                <img src={props.strMealThumb} alt="thumbnail" className="sm:max-h-[200px] sm:w-[200px] aspect-square transition hover:opacity-80 cursor-pointer" />
                <div className="py-3 px-4 grid gap-2 absolute z-10 bottom-0 left-0 right-0 w-full bg-background sm:bg-background/70 backdrop-blur-md">
                    <h1 className="text-base text-wrap">{props.strMeal}</h1>
                    <Badge className="w-fit">{props.strCategory}</Badge>
                </div>
            </div>
        </Link>
    )
}