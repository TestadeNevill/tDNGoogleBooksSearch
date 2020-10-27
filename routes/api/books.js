const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

router.route("/:id")
    .delete(booksController.delete);

module.exports = router;