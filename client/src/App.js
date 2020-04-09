import React from "react";
import Nav from "./components/Nav";
import Homepage from "./pages/homepage";
import Footer from "./components/footer/index"
import "./styles/styles.css"
import Saved from "./pages/saved";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Browser router with switch statement for routes 
function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/search" component={Homepage} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="*" component={Homepage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

//Exporting App
export default App;
