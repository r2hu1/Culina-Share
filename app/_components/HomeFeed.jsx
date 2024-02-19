import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { a, b } from "@/catched/mealdb";
import Card from "./Card";
import Search from "./Search";

export default function HomeFeed() {
    const byAlplabet = {
        a: a,
        // thinking something
    };
    return (
        <section className="mb-10 px-6 md:px-20 lg:px-32 grid gap-3">
            <Search/>
            <div className="mt-10">
                <div className="md:flex flex flex-wrap sm:grid sm:grid-cols-3 sm:place-items-center sm:w-fit sm:mx-auto items-center gap-4 md:mx-0 justify-center sm:justify-normal">
                    {byAlplabet.a.map((item) => (
                        <Card {...item} key={item.idMeal}/>
                    ))}
                </div>
            </div>
        </section>
    )
}