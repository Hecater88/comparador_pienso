import { Schema, model, models } from "mongoose";

const IngredientSchema = new Schema({
	name: {
		type: String,
		unique: [true, "Analytical composicion already exists!"],
		required: [true, "Analytical composicion is required!"],
	},
});

const Ingredient = models.User || model("Ingredient", IngredientSchema);

export { Ingredient, IngredientSchema };
