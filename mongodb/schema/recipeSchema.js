import { Schema } from "mongoose";

export const recipeSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true,
        max: 5000,
    }
})