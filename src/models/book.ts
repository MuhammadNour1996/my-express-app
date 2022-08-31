import { Schema, model } from "mongoose";
import { Book } from "../types/interfaces";

const BookSchema = new Schema<Book>({
  title: { type: String, required: true, /*unique: true*/ },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genres: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
  book_instanses: [{ type: Schema.Types.ObjectId, ref: "BookInstance" }],
});

// Virtual for book's URL
BookSchema.virtual("url").get(function () {
  return "/catalog/book/" + this._id;
});

// Export model
module.exports = model<Book>("Book", BookSchema);