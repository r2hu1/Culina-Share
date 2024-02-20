import { savedSchema } from "../schema/savedSchema";
import { model, models } from "mongoose";

const Saved = models.Saved || model("Saved", savedSchema);

export default Saved;