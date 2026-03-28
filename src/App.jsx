import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'

 
function App (){
  return(

    <div>
      <BrowserRouter>
        
      <Navbar/>

      </BrowserRouter>
    </div>

  )
}
export default App