import { PopulatedDoc, Document, Types } from "mongoose";

export interface Genre {
  _id: Types.ObjectId;
  name: string;
  url: string;
  books: Array<PopulatedDoc<Book & Document>>;
}

export interface Author {
  _id: Types.ObjectId;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  date_of_death: Date;
  books: Array<PopulatedDoc<Book & Document>>;
}

export interface Book {
  _id: Types.ObjectId;
  title: string;
  summary: string;
  isbn: string;
  url: string;
  author: PopulatedDoc<Author & Document>;
  genres: Array<PopulatedDoc<Genre & Document>>;
  book_instanses: Array<PopulatedDoc<Genre & Document>>;
}

export interface BookInstance {
  _id: Types.ObjectId;
  imprint: string;
  status: string;
  due_back: Date;
  url: string;
  book: PopulatedDoc<Book & Document>;
}