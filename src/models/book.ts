import { Schema, model } from "mongoose";
import { Book } from "../types/interfaces";

const BookSchema = new Schema<Book>({
  title: { type: String, required: true, /*unique: true*/ },
  author: { type: Schema.Types.ObjectId, ref: "author", required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genres: [{ type: Schema.Types.ObjectId, ref: "genres" }],
  book_instanses: [{ type: Schema.Types.ObjectId, ref: "book_instance" }],
});

// Virtual for book's URL
BookSchema.virtual("url").get(function () {
  return "/catalog/book/" + this._id;
});

// Export model
module.exports = model<Book>("Book", BookSchema);