import { Schema, model, models } from "mongoose";

const RatingSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	title: {
		type: String,
		required: [true, "Title is required."],
	},
	description: {
		type: String,
		required: [true, "Description is required."],
	},
});

const Rating = models.Rating || model("Rating", RatingSchema);

export { Rating, RatingSchema };
