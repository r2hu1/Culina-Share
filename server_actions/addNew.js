"use server";
import Recipe from "@/mongodb/models/recipe";
import { connectToDb } from "@/mongodb/utils/connectToDb";

export const addNew = async ({...props}) => {
    await connectToDb();
    try {
        const data = await Recipe.create({
            strCategory: props.strCategory,
            strInstructions: props.strInstructions,
            strYoutube: props.strYoutube,
            strMeal: props.strMeal,
            strMealThumb: props.strMealThumb,
        });
        return true;
    }
    catch (err) {
        return false;
    }
};