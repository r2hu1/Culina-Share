"use server";
import { getCurrentUserData } from "@/clerk/getCurrentUserData";
import Recipe from "@/mongodb/models/recipe";
import { connectToDb } from "@/mongodb/utils/connectToDb";

export const addNew = async ({ category, title, instructions, image }) => {
    const user = await getCurrentUserData();
    await connectToDb();
    try {
        if (!user.firstName) {
            return { "error": "Please sign in to add recipes" };
        }
        const addNewRecipe = await Recipe.create({
            category: category,
            title: title,
            instructions: instructions,
            image: image,
        });
        return { "success": "Posted new recipe!" };
    }
    catch (err) {
        console.log(err);
        return false;
    }
};