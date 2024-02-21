import { Schema } from "mongoose";

export const recipeSchema = new Schema({
    strMealThumb: {
        type: String,
        required: true,
        max: 5000,
    },
    strMeal: {
        type: String,
        required: true
    },
    strCategory: {
        type: String,
        required: true
    },
    strInstructions: {
        type: String,
        required: true,
        max: 5000,
    },
    strYoutube: {
        type: String,
        required: true,
        max: 200,
    }
})