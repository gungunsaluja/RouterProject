import './App.css'
import {Route ,Routes} from "react-router-dom";
import { useState } from 'react';
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Dashboard from "./Pages/Dashboard.jsx";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
 

  return (
    <div className = "w-screen h-screen bg-black flex flex-col">
      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}></Navbar>

      <Routes>
        <Route path ="/"  element ={<Home/>}></Route>
        <Route path = "/login" element = {<Login setIsLoggedIn = {setIsLoggedIn}/>}></Route>
        <Route path = "/signup" element = {<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path = "/dashboard" element = {<Dashboard/>}></Route>

      </Routes>

     
    </div>
  )
}

export default App
