import { Schema, model, models } from "mongoose";

const AditiveSchema = new Schema({
	name: {
		type: String,
		unique: [true, "Analytical composicion already exists!"],
		required: [true, "Analytical composicion is required!"],
	},
});

const Aditive = models.User || model("Aditive", AditiveSchema);

export { Aditive, AditiveSchema };
