import { Router } from "express";
const author_controller = require("../controllers/author_controller");

const router = Router();

// POST request for creating Author
router.post("/create", author_controller.author_create_post);

// POST request to delete Author
router.post("/:id/delete", author_controller.author_delete_post);

// POST request to update Author
router.post("/:id/update", author_controller.author_update_post);

// GET request for one Author
router.get("/:id", author_controller.author_detail);

// GET request for list of all Author items.
router.get("/", author_controller.author_list);

module.exports = router;