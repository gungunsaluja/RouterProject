// import './App.css'
import {Route ,Routes} from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import { useEffect,useState } from 'react';

import PrivateRoute from './Components/PrivateRoute.jsx';
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
 

  return (
    <div className = "w-screen h-screen bg-black flex flex-col">
      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}></Navbar>

      <Routes>
        <Route path ="/" element ={<Home isLoggedIn = {isLoggedIn}/>}></Route>
        <Route path = "/login" element = {<Login setIsLoggedIn = {setIsLoggedIn}/>}></Route>
        <Route path = "/signup" element = {<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path = "/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
             <Dashboard/>
          </PrivateRoute>
       
        }></Route>

      </Routes>

     
    </div>
  )
}

export default App
