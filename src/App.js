import React from "react";

import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import NavBar from "./NavBar";

import './App.css';
import whiskey from "./whiskey.jpg";
import tubby from "./tubby.jpg";
import duke from "./duke.jpg";
import perry from "./perry.jpg";

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

const { dogs } = App.defaultProps
console.log(dogs)

function App({ dogs }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/dogs" >
            <DogList dogs={dogs} />
          </Route>
          <Route path="/dogs/:name" >
            <DogDetails dogs={dogs} />
          </Route>

          <Redirect from="/" to="/dogs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}



export default App;
