
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"


function Register() {
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

    async function handleRegister(e) {
        e.preventDefault()
        try {
            const response = await axios.post(
                "http://localhost:3000/api/auth/register",
                {   username,
                    email,
                    password
                },
                {
                    withCredentials: true
                }
            )

            setMessage(response.data.message)
            alert(response.data)
            navigate("/data")

        } catch (err) {
            console.error(err)
            setMessage(
                err.response?.data?.message ||
                "Failed"
            )
        }
    }

    const [message, setMessage] = useState("")
    return (
        <>
            {/* <h1 className="text-red-500 text-center">Register</h1> */}

            <div className="h-screen w-screen flex justify-center items-center flex-col">

                <h1 className = "heading_css" > REGISTER PAGE</h1>
                <form className = " flex flex-col"
                onSubmit={handleRegister}>
                    <input
                        value = {username}
                        id = "username"
                        className =  "input_css"
                        type="text"
                        placeholder="Username"
                        onChange={(e) => {handleUserNameChange(e)}}
                    ></input>

                    <input
                        id = "email"
                        value = {email}
                        className =  "input_css"
                        type="email"
                        placeholder="email"
                        onChange={(e) => {handleEmailChange(e)}}
                    ></input>

                    <input
                        id = "password"
                        value = {password}
                        className =  "input_css"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {handlePasswordChange(e)}}
                    ></input>

                    <div className="flex gap-10 items-start">
                        <button type="submit" className = "button_css">Register</button>
                        <Link className = "link_css" to='/login'> LOGIN </Link>
                    </div>
                    <p>{message}</p>
                </form>
            </div>



        </>
    )
}



export default Register
