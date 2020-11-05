import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";  
import "./App.css";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile"
import Post from "./components/Post"
import Gallery from "./components/Gallery"
import ToDo from "./components/ToDo"


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route exact path="/profile/:profileId" component= {Profile} />
        <Route exact path="/post" component= {Post} />
        <Route exact path="/gallery" component= {Gallery} />
        <Route exact path="/todo" component= {ToDo} />
      </Switch>
    </Router>
  );
}

export default App;

