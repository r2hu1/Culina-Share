import { models, model } from "mongoose";
import { recipeSchema } from "../schema/recipeSchema";

const Recipe = model("Recipe", recipeSchema);

export default Recipe; 