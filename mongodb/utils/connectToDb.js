"use server";

import { connect } from "mongoose";

export const connectToDb = async () => {
    try{
        await connect(process.env.MONGO_URI);
    }
    catch(err) {
        console.log(err);
    }
};