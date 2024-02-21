import { models, model } from "mongoose";
import { recipeSchema } from "../schema/recipeSchema";

const Recipe = models.Saved || model("Recipe", recipeSchema);

export default Recipe; 