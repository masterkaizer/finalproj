
$(document).ready(function() {

    //Getting jQuery references from the recommend.html
    var bodyInput = $('#exampleFormControlTextarea1');
    var emailInput = $('#exampleFormControlInput1');
    var recButton = $('#submitRec');
    var yourName = $('#name');
    var tag = $('#exampleFormControlSelect1');
  
    $('#submitRec').click(function(){
  
    // var url = window.location.search;
    // var recommendationId;
    // var authorId;
      // submitPost();
      // A function for handling what happens when the form to create a new post is submitted
      // function handleFormSubmit(event) {
      event.preventDefault();
      // Constructing a newPost object to hand to the database
      var newPost = {
        email: emailInput
          .val()
          .trim(),
        recommendation: bodyInput
          .val()
          .trim(),
          categories: category
          .val()
          .trim(),
      };
      // rating: ratingInput
      //   .val(),
      //need to asssign values to the number choices
      // console.log('new post', newPost);
      // $.post('/api/new', newPost)
      // // On success, run the following code
      //   .then(function(data) {
      //     // Log the data we found
      //     console.log(data);
      //   });   
      function submitRecommendation(newPost) {
        $.post('/api/recommend',newPost)
          .then(function() {
            window.location.replace('/newsfeed');
          });
      }
      console.log("I'm listening");
      submitRecommendation(newPost);
    });
  });