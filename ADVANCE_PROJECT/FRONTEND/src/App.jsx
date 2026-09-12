import {Route, Routes} from "react-router-dom"

import Register from "./components/Register.jsx"
import Login from "./components/Login.jsx"
import Data from "./components/Data.jsx"
import Create from "./components/Create.jsx"
import Home from "./components/Home.jsx"
import AuthSuccess from "./components/AuthSuccess.jsx"

function App() {
  return (
    <>
    {/* <div className="App">
      <h1 className = "text-5xl font-bold text-center m-10 p-3">DAILY JOURNAL</h1>
    </div> */}


    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/data" element={<Data/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/api/auth/register" element={<Register/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/auth-success" element={<AuthSuccess/>}/>
    </Routes>

    </>


  );
}


export default App