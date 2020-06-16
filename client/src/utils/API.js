import axios from "axios";

export default {
  // Gets all books
  getRecs: function() {
    return axios.get("/api/recommendations");
  },
  // Gets the book with the given id
  getRec: function(id) {
    return axios.get("/api/recommendations/" + id);
  },
  // Deletes the book with the given id
  deleteRec: function(id) {
    return axios.delete("/api/recommendations/" + id);
  },
  // Saves a book to the database
  saveRec: function(recData) {
    console.log(recData)
    console.log("line 19 utils api Recs");
    return axios.post("/api/recommendations", recData);
  }
};
