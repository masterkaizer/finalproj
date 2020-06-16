import axios from "axios";

export default {
  // Gets all books
  getMeetups: function() {
    return axios.get("/api/meetups");
  },
  // Gets the book with the given id
  getMeetup: function(id) {
    return axios.get("/api/meetups/" + id);
  },
  // Deletes the book with the given id
  deleteMeet: function(id) {
    return axios.delete("/api/meetups/" + id);
  },
  // Saves a book to the database
  saveMeetup: function(recData) {
    console.log(recData)
    console.log("line 19 utils api meetups");
    return axios.post("/api/meetups", recData);
  }
};