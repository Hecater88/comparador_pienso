import { Schema, model, models } from "mongoose";
import { IngredientSchema } from "./ingredient";
import { AnalyticalComposicionSchema } from "./analytical_composition";
import { AditiveSchema } from "./additive";
import { RatingSchema } from "./rating";

const PiensoSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	name: {
		type: String,
		required: [true, "Tag is required."],
	},
	brand: {
		type: String,
		required: [true, "Tag is required."],
	},
	description: {
		type: String,
	},
	image: {
		type: String,
	},
	analytical_compositions: [AnalyticalComposicionSchema],
	ingredients: [IngredientSchema],
	additives: [AditiveSchema],
	ratings: [RatingSchema],
});

const Pienso = models.Pienso || model("Pienso", PiensoSchema);

export default Pienso;
