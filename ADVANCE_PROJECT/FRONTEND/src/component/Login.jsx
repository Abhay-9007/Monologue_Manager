// import { useState } from "react"
// import { useNavigate, Link } from "react-router-dom"
// import axios from "axios"


// function Login(){
//     const navigate = useNavigate()
//     const [username, setUserName] = useState("");
//     function handleUserNameChange(e){
//         // console.log(e.target.value)
//         setUserName(e.target.value)
//     }

//     const [email, setEmail] = useState("");
//     function handleEmailChange(e){
//         // console.log(e.target.value)
//         setEmail(e.target.value)
//     }

//     const [password, setPassword] = useState("");
//     function handlePasswordChange(e){
//         // console.log(e.target.value)
//         setPassword(e.target.value)
//     }

//     const [message, setMessage] = useState("")

//     async function handleLogin(e) {
//         e.preventDefault()
//         try {
//             const response = await axios.post(
//                 "http://localhost:3000/login",
//                 {   username,
//                     email,
//                     password
//                 },
//                 {
//                     withCredentials: true
//                 }
//             )
//             setMessage(response.data.message)
//             console.log(response.data)
//             navigate("/data")
//         } catch (err) {
//             console.error(err)
//             setMessage(
//                 err.response?.data?.message ||
//                 "Login Failed"
//             )
//         }
//     }


//     return (
//         <>  
//             <div className="h-screen w-screen flex justify-center items-center flex-col">

//                 <h1 className = "heading_css" > LOG-IN PAGE</h1>
//                 <form className = " flex flex-col"
//                 onSubmit={handleLogin}>

//                     <input
//                         value = {username}
//                         id = "username"
//                         className = "input_css"
//                         type="text"
//                         placeholder="Username"
//                         onChange={(e) => {handleUserNameChange(e)}}
//                     ></input>

//                     <input
//                         id = "email"
//                         value = {email}
//                         className = "input_css"
//                         type="email"
//                         placeholder="email"
//                         onChange={(e) => {handleEmailChange(e)}}
//                     ></input>

//                     <input
//                         id = "password"
//                         value = {password}
//                         className = "input_css"
//                         type="password"
//                         placeholder="Password"
//                         onChange={(e) => {handlePasswordChange(e)}}
//                     ></input>

//                     <div className="flex gap-10 items-start">
//                         <button type="submit" className = "button_css">Login</button>
//                         <Link className = "link_css" to='/api/auth/register'> Register </Link>
//                     </div>
//                     <p className="text-red-500">{message}</p>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Login

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      setMessage(response.data.message);
      navigate("/data");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login Failed");
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center px-5">

      {/* Background Blur */}
      <div className="absolute w-96 h-96 bg-indigo-600 rounded-full blur-[150px] opacity-30"></div>
      <div className="absolute right-20 bottom-20 w-72 h-72 bg-purple-600 rounded-full blur-[150px] opacity-20"></div>

      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-md bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl p-10 shadow-2xl"
      >

        <h1 className="text-4xl font-bold text-center text-white">
          Welcome Back 👋
        </h1>

        <p className="text-center text-gray-400 mt-3 mb-8">
          Continue your journaling journey.
        </p>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full bg-slate-800 text-white rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-indigo-500 transition"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-800 text-white rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-indigo-500 transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-800 text-white rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-indigo-500 transition"
          />

        </div>

        {message && (
          <p className="text-red-400 mt-4 text-center">
            {message}
          </p>
        )}

        <button
          type="submit"
          className="w-full mt-8 bg-indigo-600 hover:bg-indigo-500 py-4 rounded-xl text-lg font-semibold transition duration-300 hover:scale-[1.02]"
        >
          Login
        </button>

        <div className="flex justify-between items-center mt-8 text-sm">

          <Link
            to="/"
            className="text-gray-400 hover:text-indigo-400"
          >
            ← Home
          </Link>

          <Link
            to="/api/auth/register"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Create Account
          </Link>

        </div>

      </form>
    </div>
  );
}

export default Login;