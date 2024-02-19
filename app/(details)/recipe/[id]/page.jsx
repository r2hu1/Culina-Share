"use client";
import Header from "@/app/_components/Header";
import { Badge } from "@/components/ui/badge";
import { getById } from "@/helpers/getById";
import { Loader2 } from "lucide-react";
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

export default function Recipe({ params }) {
    const [data, setData] = useState(
        {
            "idMeal": "52772",
            "strMeal": "Teriyaki Chicken Casserole",
            "strDrinkAlternate": null,
            "strCategory": "Chicken",
            "strArea": "Japanese",
            "strInstructions": "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
            "strTags": "Meat,Casserole",
            "strYoutube": "https://www.youtube.com/watch?v=4aZr5hZXP_s",
            "strIngredient1": "soy sauce",
            "strIngredient2": "water",
            "strIngredient3": "brown sugar",
            "strIngredient4": "ground ginger",
            "strIngredient5": "minced garlic",
            "strIngredient6": "cornstarch",
            "strIngredient7": "chicken breasts",
            "strIngredient8": "stir-fry vegetables",
            "strIngredient9": "brown rice",
            "strIngredient10": "",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": null,
            "strIngredient17": null,
            "strIngredient18": null,
            "strIngredient19": null,
            "strIngredient20": null,
            "strMeasure1": "3/4 cup",
            "strMeasure2": "1/2 cup",
            "strMeasure3": "1/4 cup",
            "strMeasure4": "1/2 teaspoon",
            "strMeasure5": "1/2 teaspoon",
            "strMeasure6": "4 Tablespoons",
            "strMeasure7": "2",
            "strMeasure8": "1 (12 oz.)",
            "strMeasure9": "3 cups",
            "strMeasure10": "",
            "strMeasure11": "",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "strMeasure16": null,
            "strMeasure17": null,
            "strMeasure18": null,
            "strMeasure19": null,
            "strMeasure20": null,
            "strSource": null,
            "strImageSource": null,
            "strCreativeCommonsConfirmed": null,
            "dateModified": null
        }
    );

    // const getDetails = async () => {
    //     await getById(params.id).then((data) => {
    //         setData(data.meals[0]);
    //         console.log(data.meals[0]);
    //     })
    // };
    // useEffect(() => {
    //     getDetails();
    // }, []);

    return (
        <section>
            <Header />
            {!data && (<div className="h-[300px] flex items-center justify-center">
                <Loader2 className="h-6 w-6 animate-spin" />
            </div>)}
            <div className="mt-10 px-6 md:px-20 lg:px-32">
                <iframe src={`https://www.youtube.com/embed/${data.strYoutube.split("v=")[1]}`} width="100%" height="300" frameBorder="0" allowFullScreen title={data.strMeal} className="rounded-md"></iframe>
                <div className="mt-7">
                    <h1 className="text-lg font-bold">{data.strMeal}</h1>
                    <Table className="mt-2 mb-4">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Ingredients</TableHead>
                                <TableHead>Quantity</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>{data.strIngredient1}</TableCell>
                                <TableCell>{data.strMeasure1}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{data.strIngredient2}</TableCell>
                                <TableCell>{data.strMeasure2}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{data.strIngredient3}</TableCell>
                                <TableCell>{data.strMeasure3}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{data.strIngredient4}</TableCell>
                                <TableCell>{data.strMeasure4}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{data.strIngredient5}</TableCell>
                                <TableCell>{data.strMeasure5}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{data.strIngredient6}</TableCell>
                                <TableCell>{data.strMeasure6}</TableCell>
                            </TableRow>
                            
                        </TableBody>
                    </Table>
                    <span className="text-sm font-light opacity-70">Detailed instructions.</span>
                    <p className="text-sm mt-2">{data.strInstructions}</p>
                </div>
            </div>
        </section>
    )
}