"use server";

import { getCurrentUserData } from "@/clerk/getCurrentUserData";
import Saved from "@/mongodb/models/saved";
import { connectToDb } from "@/mongodb/utils/connectToDb";

export const findUserSaved = async () => {
    const user = await getCurrentUserData();
    await connectToDb();
    try{
        const saved = await Saved.find({ email: user.email });
        return JSON.stringify(saved);
    }
    catch(err){
        return false;
    }
}