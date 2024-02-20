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
import { addNew } from "@/helpers/addNew";
import { useState } from "react";

export default function Page() {
    const [cate, setCate] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [uploadedb, setUploadedb] = useState(false);
    const [bfile, setBfile] = useState('');

    const handleFileInput = (e) => {
        e.preventDefault();
        setFile(e.target.files[0]);
        const reader = new FileReader();
        reader.onload = () => {
            setBfile(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const uploadImage = async (e) => {
        setIsUploading(true);
        const uploadResponse = await fetch(
            `https://api.cloudinary.com/v1_1/srcimg/image/upload`,
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        file: bfile,
                        upload_preset: "culinashare",
                        api_key: "478292776746713",
                    }
                ),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const uploadedImageData = await uploadResponse.json();
        console.log(uploadedImageData);
        if (uploadedImageData.secure_url.length > 0 || uploadedImageData.secure_url != undefined) {
            setFile(uploadedImageData.secure_url);
            setUploadedb(true);
            let string = uploadedImageData.secure_url;
            let cutString = string.split("image/upload")[1];
            setFile(cutString);
        }
        setIsUploading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await uploadImage();
        if (!isUploading) {
            try {
                const data = await addNew({
                    category: cate,
                    title: title,
                    instructions: desc,
                    image: file
                });
                if (data.error) {
                    toast.error("Something went wrong!");
                }
                else {
                    toast.success("Posted new recipe!");
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    }
    return (
        <section>
            <Header title="Add your recipe" />
            <div className="mt-10">
                <form method="post" onSubmit={handleSubmit} className="px-6 md:px-20 max-w-3xl mx-auto grid gap-3">
                    <Label htmlFor="thumbnail" className="-mb-1">Thumbnail <span className="text-xs opacity-70">(square)</span></Label>
                    <Input onChange={handleFileInput} required type="file" id="thumbnail" accept="image/*" />
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
                    <Button type="submit" className="mt-4">Save</Button>
                </form>
            </div>
        </section>
    )
}