import { models, model } from "mongoose";
import { recipeSchema } from "../schema/recipeSchema";

const Recipe = models.Recipe || model("Recipe", recipeSchema);

export default Recipe; 
