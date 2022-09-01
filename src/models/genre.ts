import { Schema, model } from "mongoose";
import { Genre } from "../types/interfaces";

const GenreSchema = new Schema<Genre>({
  name: { type: String, required: true, /*unique: true*/ },
  books: [{ type: Schema.Types.ObjectId, ref: "books" }],
});

// Virtual for book's URL
GenreSchema.virtual("url").get(function () {
  return "/catalog/genre/" + this._id;
});

// Export model
module.exports = model<Genre>("Genre", GenreSchema);