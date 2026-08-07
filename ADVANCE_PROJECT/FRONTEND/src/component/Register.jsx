
// import { useState } from "react"
// import { useNavigate, Link } from "react-router-dom"
// import axios from "axios"


// function Register() {
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

//     async function handleRegister(e) {
//         e.preventDefault()
//         try {
//             const response = await axios.post(
//                 "http://localhost:3000/api/auth/register",
//                 {   username,
//                     email,
//                     password
//                 },
//                 {
//                     withCredentials: true
//                 }
//             )

//             setMessage(response.data.message)
//             alert(response.data)
//             navigate("/data")

//         } catch (err) {
//             console.error(err)
//             setMessage(
//                 err.response?.data?.message ||
//                 "Failed"
//             )
//         }
//     }

//     const [message, setMessage] = useState("")
//     return (
//         <>
//             {/* <h1 className="text-red-500 text-center">Register</h1> */}

//             <div className="h-screen w-screen flex justify-center items-center flex-col">

//                 <h1 className = "heading_css" > REGISTER PAGE</h1>
//                 <form className = " flex flex-col"
//                 onSubmit={handleRegister}>
//                     <input
//                         value = {username}
//                         id = "username"
//                         className =  "input_css"
//                         type="text"
//                         placeholder="Username"
//                         onChange={(e) => {handleUserNameChange(e)}}
//                     ></input>

//                     <input
//                         id = "email"
//                         value = {email}
//                         className =  "input_css"
//                         type="email"
//                         placeholder="email"
//                         onChange={(e) => {handleEmailChange(e)}}
//                     ></input>

//                     <input
//                         id = "password"
//                         value = {password}
//                         className =  "input_css"
//                         type="password"
//                         placeholder="Password"
//                         onChange={(e) => {handlePasswordChange(e)}}
//                     ></input>

//                     <div className="flex gap-10 items-start">
//                         <button type="submit" className = "button_css">Register</button>
//                         <Link className = "link_css" to='/login'> LOGIN </Link>
//                     </div>
//                     <p>{message}</p>
//                 </form>
//             </div>



//         </>
//     )
// }



// export default Register


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
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
      setMessage(err.response?.data?.message || "Registration Failed");
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center px-5 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600 rounded-full blur-[160px] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600 rounded-full blur-[160px] opacity-20"></div>

      {/* Card */}
      <form
        onSubmit={handleRegister}
        className="relative z-10 w-full max-w-md bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-2xl p-10"
      >
        <h1 className="text-4xl font-bold text-center text-white">
          Create Account ✨
        </h1>

        <p className="text-center text-slate-400 mt-3 mb-8">
          Start your personal journaling journey today.
        </p>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition"
          />

        </div>

        {message && (
          <p className="mt-4 text-center text-red-400">
            {message}
          </p>
        )}

        <button
          type="submit"
          className="w-full mt-8 bg-indigo-600 hover:bg-indigo-500 py-4 rounded-xl text-lg font-semibold transition duration-300 hover:scale-[1.02]"
        >
          Create Account
        </button>

        <div className="flex justify-between items-center mt-8 text-sm">

          <Link
            to="/"
            className="text-slate-400 hover:text-indigo-400 transition"
          >
            ← Home
          </Link>

          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-300 transition"
          >
            Already have an account?
          </Link>

        </div>
      </form>
    </div>
  );
}

export default Register;