import { Schema, model } from "mongoose";
import { Author } from "../types/interfaces";

const AuthorSchema = new Schema<Author>({
  first_name: { type: String, required: true, /*unique: true*/ },
  last_name: { type: String, required: true },
  date_of_birth: { type: Date, required: true },
  date_of_death: { type: Date, required: false },
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

// Virtual for book's URL
AuthorSchema.virtual("url").get(function () {
  return "/catalog/author/" + this._id;
});

// Export model
module.exports = model<Author>("Author", AuthorSchema);