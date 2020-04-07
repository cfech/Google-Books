import React from "react";
// import Books from "./pages/Books";
import Nav from "./components/Nav";
import Homepage from "./pages/homepage";
import Footer from "./components/footer/index"
import "./styles/styles.css"
import Saved from "./pages/saved";

function App() {
  return (
    <div>
      <Nav />
      <Homepage />
      {/* <Saved/> */}
      <Footer />
    </div>
  );
}

export default App;
