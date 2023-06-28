import { Schema, model, models } from "mongoose";

const AnalyticalComposicionSchema = new Schema({
	name: {
		type: String,
		unique: [true, "Analytical composicion already exists!"],
		required: [true, "Analytical composicion is required!"],
	},
});

const AnalyticalComposition =
	models.User || model("Analytical_Composicion", AnalyticalComposicionSchema);

export { AnalyticalComposition, AnalyticalComposicionSchema };
