import { Request, Response } from "express";
import { Book } from "../types/interfaces";
const BookModel = require("../models/book");

// Display all books normally
exports.book_list = (req: Request, res: Response) => {
  BookModel.find().populate("author")
    .then((books: Array<Book>) => {
      res.send(books);
    })
    .catch((err: any) => {
      console.log(err);
      res.send("Error!")
    });
};

// Get one book by id
exports.get_one_book_by_id = (req: Request, res: Response) => {
  BookModel.findById(req.params.id)
    .then((book: Book) => {
      res.send(book);
    })
    .catch((err: any) => {
      console.log(err);
      res.send("Error!")
    });
};

// Get one book by name
exports.get_one_book_by_name = (req: Request, res: Response) => {
  BookModel.find({"title": req.body.title})
    .then((books: Array<Book>) => {
      res.send(books);
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(400).send("Error!")
    });
};

// Display list of all books as json
exports.book_list = (req: Request, res: Response) => {
  BookModel.find()
    .then(async (centers: any) => res.json(centers))
    .catch((err: any) => res.status(400).json(err));
};

// Display detail page for a specific book
exports.book_detail = (req: Request, res: Response) => {
  BookModel.findById(req.params.bookId)
    .then((book: any) => res.json(book))
    .catch((err: any) => res.status(400).json(err));
};

// Handle book create on POST.
exports.book_create_post = (req: any, res: Response) => {
  const title = req.body.title;
  const author = req.body.author;
  const summary = req.body.summary;
  const isbn = req.body.isbn;
  const genre = req.body.genre;
  const book = new BookModel({
    title,
    author,
    summary,
    isbn,
    genre,
  });
  book
    .save()
    .then(async (e: any) => {
      res.json("Book inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};

// Handle book delete on POST.
exports.book_delete_post = (req: Request, res: Response) => {
  BookModel.findByIdAndDelete(req.params.id)
    .then((e: any) => {
      res.json("Book deleted");
    })
    .catch((err: any) => res.status(400).json(err));
};

// Handle book update on POST.
exports.book_update_post = (req: Request, res: Response) => {
  BookModel.findById(req.params.id)
    .then((book: any) => {
      book.title = req.body.title??book.title;
      book.author = req.body.author == null?book.author:req.body.author;
      book.summary = req.body.summary;
      book.isbn = req.body.isbn;
      book.genre = req.body.genre;
      book
        .save()
        .then((e: any) => {
          res.json("Book updated!");
        })
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};