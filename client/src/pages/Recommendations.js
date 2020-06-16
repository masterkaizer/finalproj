import React, { useEffect, useState } from "react";
import Jumbotron from "../Components/Jumbotron";
import DeleteBtn from "../Components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../Components/Grid";
import { List, ListItem } from "../Components/List";
import { Input, TextArea, FormBtn } from "../Components/Form";
import { Link } from 'react-router-dom'

function Recommendations() {
  // Setting our component's initial state
  const [searchBarValue, setSearchBarValue] = useState("");
  const [recommendations, setRecommendations] = useState([])
  const [formObject, setFormObject] = useState({
    email: "",
    Rec: "",
    category:""
  })

  // Load all books and store them with setBooks
  useEffect(() => {
    loadRecs()
  }, [])

  // Loads all books and sets them to books
  function loadRecs() {
    API.getRecs()
      .then(res => 
        setRecommendations(res.data)
      )
      .catch(err => console.log(err));
  };
  // function loadFilteredRecs() {
  //   API.getRec()
  //     .then(res => 
  //       setRecommendations(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteRec(id) {
    API.deleteRec(id)
      .then(res => loadRecs())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    console.log("hello, 41")
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleInputChangeSearchBar(event){
    console.log("hello, handleinputChangeSearchBar")
    const { name, value } = event.target;
    setSearchBarValue(value);
  }
let filteredRecommendations = searchBarValue ? recommendations.filter(recommendation => recommendation.Rec.includes(searchBarValue)):recommendations;
//  function getFilteredRec(){
//    if()
//  {
//   <List>
//     {newinfo.map(recommendation => {
//       return (
//         <ListItem key={recommendation._id}>
//           <a href={"/recommendations/" + recommendation._id}>
//             <strong>
//               {recommendation.email} by {recommendation.Rec}
//             </strong>
//           </a>
//           {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
//         </ListItem>
//       );
//     })}
//   </List>}
// handleChange=(e)=>{
//   this.setState({searchValues:e.target.value.toLowerCase()},()=>{this.filterData()})
//  }
//  filterData=()=>{
//    console.log("working")
//    let newInfo = this.state.data.filter(dataValue=>{
//      return dataValue.name.toLowerCase().includes(this.state.searchValues)
//    })
//    this.setState({filtered:newInfo})
 
//  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
console.log("hello, 49")
    if (formObject.email && formObject.Rec) {
        console.log("hello, 51")
      API.saveRec({
        email: formObject.email,
        Rec: formObject.Rec,
        category: formObject.category
      })
        .then(() => setFormObject({
            email: "",
            Rec: "",
            category:""
        }))
        .then(() => loadRecs())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
          <nav class="navbar navbar-light bg-light">
<form class="form-inline">
<button class="btn btn-outline-success" type="button"><Link to="/">Home</Link></button>
<button class="btn btn-outline-success" type="button"><Link to="/login">Login</Link></button>
<button class="btn btn-outline-success" type="button"><Link to="/signup">Sign up</Link></button>
<button class="btn btn-outline-success" type="button"><Link to="/recommendations">Recommendations</Link></button>
<button class="btn btn-outline-success" type="button"><Link to="/meetups">Meet ups</Link></button>
<button class="btn btn-outline-success" type="button"><Link to="/recommendation-form">News Feed</Link></button>

</form>
</nav>
<h3>Use search bar to find current information on all things doggy.</h3>
{/* <!-- Search form --> */}
<div class="md-form active-purple active-purple-2 mb-3">
  <input class="form-control" name="searchBar" onChange={handleInputChangeSearchBar} type="text" placeholder="Search" aria-label="Search"></input>
</div>
<h3>Please enter your recommendation below.</h3>
        <Row>
          <Col size="md-6">
            {/* <Jumbotron>
              <h1></h1>
            </Jumbotron> */}
            <form>
              <Input
                onChange={handleInputChange}
                name="email"
                placeholder="Name (required)"
                value={formObject.email}
              />
                <Input
                onChange={handleInputChange}
                name="category"
                placeholder="Category (Please enter park, restaurant, grooming, supplies, or activities."
                value={formObject.category}
              />
              <TextArea
                onChange={handleInputChange}
                name="Rec"
                placeholder="Recommendation (required)"
                value={formObject.Rec}
              />
              <FormBtn
                disabled={!(formObject.email && formObject.Rec)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          
          <Col size="md-6 sm-12">
            {/* <Jumbotron>
              <h1></h1>
            </Jumbotron> */}
            {filteredRecommendations.length ? (
              <List>
                {filteredRecommendations.map(recommendation => {
                  return (
                    <ListItem key={recommendation._id}>
                      <a href={"/recommendations/" + recommendation._id}>
                        <strong>
                          {recommendation.Rec}, {recommendation.category} by {recommendation.email}
                        </strong>
                      </a>
                      {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
// export recommendations
export  default Recommendations;
