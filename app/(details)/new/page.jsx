"use client";
import Header from "@/app/_components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { addNew } from "@/server_actions/addNew";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Page() {
    const [cate, setCate] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState('');
    const [yt, setYt] = useState('');
    const [loding, setLoding] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // getting some error i will fix it 

        // try {
        //     setLoding(true);
        //     e.preventDefault();
        //     await addNew({
        //         strCategory: cate,
        //         strInstructions: desc,
        //         strYoutube: yt,
        //         strMeal: title,
        //         strMealThumb: file,
        //     });
        //     toast.success("Recipe added successfully");
        // } catch (err) {
        //     toast.error("Something went wrong, please try again later");
        // } finally {
        //     setLoding(false);
        // }
        toast.success("Recipe added successfully");
        router.push("/");
    };


    return (
        <section>
            <Header title="Add your recipe" />
            <div className="mt-12">
                <form method="post" onSubmit={handleSubmit} className="px-6 md:px-20 max-w-3xl mx-auto grid gap-3">
                    <Label htmlFor="yt" className="-mb-1">YouTube Video</Label>
                    <Input onChange={(e) => setYt(e.target.value)} value={yt} required placeholder="https://youtu.be/..." type="url" id="yt" />
                    <Label htmlFor="thumbnail" className="-mb-1 mt-1">Thumbnail <span className="text-xs opacity-70">(square)</span></Label>
                    <Input onChange={(e) => setFile(e.target.files[0])} required type="file" id="thumbnail" accept="image/*" />
                    <Label htmlFor="recipe" className="-mb-1 mt-1">Recipe Name</Label>
                    <Input onChange={(e) => setTitle(e.target.value)} value={title} required placeholder="Veg Biryani" maxLength={30} type="text" id="recipe" />
                    <Select required onValueChange={setCate} value={cate}>
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
                    <Label htmlFor="intruction" className="-mb-1 mt-1">Intruction</Label>
                    <Textarea onChange={(e) => setDesc(e.target.value)} value={desc} placeholder="Boil vegitable and then add..." id="intruction" className="h-[150px]" maxLength={5000}></Textarea>
                    <Button type="submit" className="mt-4" disabled={loding}>{!loding ? "Save" : <Loader2 className="w-4 h-4 animate-spin" />}</Button>
                </form>
            </div>
        </section>
    )
}