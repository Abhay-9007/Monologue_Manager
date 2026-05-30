import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"


function Login(){
    const navigate = useNavigate()
    const [username, setUserName] = useState("");
    function handleUserNameChange(e){
        // console.log(e.target.value)
        setUserName(e.target.value)
    }

    const [email, setEmail] = useState("");
    function handleEmailChange(e){
        // console.log(e.target.value)
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState("");
    function handlePasswordChange(e){
        // console.log(e.target.value)
        setPassword(e.target.value)
    }

    const [message, setMessage] = useState("")

    async function handleLogin(e) {
        e.preventDefault()
        try {
            const response = await axios.post(
                "http://localhost:3000/login",
                {   username,
                    email,
                    password
                },
                {
                    withCredentials: true
                }
            )
            setMessage(response.data.message)
            console.log(response.data)
            navigate("/data")
        } catch (err) {
            console.error(err)
            setMessage(
                err.response?.data?.message ||
                "Login Failed"
            )
        }
    }


    return (
        <>  
            <div className="h-screen w-screen flex justify-center items-center flex-col">

                <h1 className = "heading_css" > LOG-IN PAGE</h1>
                <form className = " flex flex-col"
                onSubmit={handleLogin}>

                    <input
                        value = {username}
                        id = "username"
                        className = "input_css"
                        type="text"
                        placeholder="Username"
                        onChange={(e) => {handleUserNameChange(e)}}
                    ></input>

                    <input
                        id = "email"
                        value = {email}
                        className = "input_css"
                        type="email"
                        placeholder="email"
                        onChange={(e) => {handleEmailChange(e)}}
                    ></input>

                    <input
                        id = "password"
                        value = {password}
                        className = "input_css"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {handlePasswordChange(e)}}
                    ></input>

                    <div className="flex gap-10 items-start">
                        <button type="submit" className = "button_css">Login</button>
                        <Link className = "link_css" to='/api/auth/register'> Register </Link>
                    </div>
                    <p className="text-red-500">{message}</p>
                </form>
            </div>
        </>
    )
}

export default Login