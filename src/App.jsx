import './App.css'
import {Route ,Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";

function App() {
 

  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path ="/"  element ={<Home/>}></Route>
        <Route path = "login" element = {<Login/>}></Route>
        <Route path = "signup" element = {<Signup/>}></Route>
        <Route path = "dashboard" element = {<Dashboard/>}></Route>

      </Routes>

     
    </div>
  )
}

export default App
