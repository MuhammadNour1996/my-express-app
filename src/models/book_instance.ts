import { Schema, model } from "mongoose";
import { BookInstance } from "../types/interfaces";

const BookInstanceSchema = new Schema<BookInstance>({
  imprint: { type: String, required: true, /*unique: true*/ },
  status: { type: String, required: true },
  due_back: { type: Date, required: true },
  book: { type: Schema.Types.ObjectId, ref: "book", required: true },
});

// Virtual for book's URL
BookInstanceSchema.virtual("url").get(function () {
  return "/catalog/book_instance/" + this._id;
});

// Export model
module.exports = model<BookInstance>("BookInstance", BookInstanceSchema);