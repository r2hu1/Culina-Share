"use server";
import { getCurrentUserData } from "@/clerk/getCurrentUserData";
import Saved from "@/mongodb/models/saved";
import { connectToDb } from "@/mongodb/utils/connectToDb";

export const addBookmark = async ({ recipeid, image, title, category }) => {
    const user = await getCurrentUserData();
    await connectToDb();
    try {
        if (!user.firstName) {
            return { "error": "Please sign in to save recipes" };
        }
        const getBookmark = await Saved.findOne({
            recipeId: recipeid,
            email: user.email,
        });
        if (getBookmark) {
            return { "error": "Recipe already saved" };
        }
        const addToBookmark = await Saved.create({
            recipeId: recipeid,
            email: user.email,
            image: image,
            title: title,
            category: category,
        });
        return { "success": "Recipe saved successfully" };
    }
    catch (err) {
        console.log(err);
        return false;
    }
};