import { Request, Response } from "express";
import { Author } from "../types/interfaces";
const AuthorModel = require("../models/author");

// Display all autjors normally
exports.authors_list = (req: Request, res: Response) => {
  AuthorModel.find()
    .then((authors: Array<Author>) => {
      res.send(authors);
    })
    .catch((err: any) => {
      console.log(err);
      res.send("Error!")
    });
};

// Get one author by id
exports.get_one_author_by_id = (req: Request, res: Response) => {
  AuthorModel.findById(req.params.id)
    .then((author: Author) => {
      res.send(author);
    })
    .catch((err: any) => {
      console.log(err);
      res.send("Error!")
    });
};

// Get one book by name
exports.get_one_author_by_name = (req: Request, res: Response) => {
  AuthorModel.find({"first_name": req.body.first_name})
    .then((authors: Array<Author>) => {
      res.send(authors);
    })
    .catch((err: any) => {
      console.log(err);
      res.sendStatus(400).send("Error!")
    });
};

// Display list of all authors as json
exports.author_list = (req: Request, res: Response) => {
  AuthorModel.find()
    .then(async (centers: any) => res.json(centers))
    .catch((err: any) => res.status(400).json(err));
};

// Display detail page for a specific book
exports.author_detail = (req: Request, res: Response) => {
  AuthorModel.findById(req.params.bookId)
    .then((author: any) => res.json(author))
    .catch((err: any) => res.status(400).json(err));
};

// Handle author create on POST.
exports.author_create_post = (req: any, res: Response) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const date_of_birth = req.body.date_of_birth;
  const date_of_death = req.body.date_of_death;
  const author = new AuthorModel({
    first_name,
    last_name,
    date_of_birth,
    date_of_death,
  });
  author
    .save()
    .then(async (e: any) => {
      res.json("Author inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};

// Handle author delete on POST.
exports.author_delete_post = (req: Request, res: Response) => {
  AuthorModel.findByIdAndDelete(req.params.id)
    .then((e: any) => {
      res.json("Author deleted");
    })
    .catch((err: any) => res.status(400).json(err));
};

// Handle book update on POST.
exports.author_update_post = (req: Request, res: Response) => {
  AuthorModel.findById(req.params.id)
    .then((author: any) => {
      author.first_name = req.body.first_name??author.first_name;
      author.last_name = req.body.last_name == null?author.last_name:req.body.last_name;
      author.date_of_birth = req.body.date_of_birth??author.date_of_birth;
      author.date_of_death = req.body.date_of_death??author.date_of_death;
      author
        .save()
        .then((e: any) => {
          res.json("Author updated!");
        })s
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};