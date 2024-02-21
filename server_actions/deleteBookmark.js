"use server";
import Saved from "@/mongodb/models/saved";
import { connectToDb } from "@/mongodb/utils/connectToDb";

export const deleteBookmark = async ({ recipeid }) => {
    await connectToDb();
    try {
        const data = await Saved.deleteOne({ recipeId: recipeid });
        return data;
    }
    catch (err) {
        console.log(err);
    }
}