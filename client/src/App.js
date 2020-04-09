import React from "react";
// import Books from "./pages/Books";
import Nav from "./components/Nav";
import Homepage from "./pages/homepage";
import Footer from "./components/footer/index"
import "./styles/styles.css"
import Saved from "./pages/saved";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams
// } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>

        <Nav />
        <Switch>

          <Route exact path="/" component= {Homepage} />
          <Route exact path="/search" component={Homepage} />
          <Route exact path="/saved" component={Saved } />

        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    
    // <div>

    //   <Nav />


    //     <Homepage />

   
    //   <Footer />
    // </div>

  );
}

export default App;
