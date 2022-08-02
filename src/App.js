import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar.js"
import ImageLink from "./Components/ImageLink";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState('');
 const onInputChange = (event)=>{
    console.log(event.target.value)
  }
  return <div className="App">
    
    
    
    <Navbar/>
    <ImageLink onInputChange = {onInputChange()}/>
  </div>;
}

export default App;
