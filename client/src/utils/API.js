
import axios from "axios";

export default {
    searchBooks: function (book) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
    },
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },
    findBooks: function () {
        return axios.get("/api/books");
    },
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id)
    }

}