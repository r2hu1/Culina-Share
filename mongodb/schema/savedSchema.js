import { Schema } from "mongoose";

export const savedSchema = new Schema({
    recipeId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});