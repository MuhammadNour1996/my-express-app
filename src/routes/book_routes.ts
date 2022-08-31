import { Router } from "express";
const book_controller = require("../controllers/book_controller");

const router = Router();

// POST request for creating Book.
router.post("/create", book_controller.book_create_post);

// POST request to delete Book.
router.post("/:id/delete", book_controller.book_delete_post);

// POST request to update Book.
router.post("/:id/update", book_controller.book_update_post);

// GET request for one Book.
router.get("/:bookId", book_controller.book_detail);

// GET request for list of all Book items.
router.get("/", book_controller.book_list);

module.exports = router;