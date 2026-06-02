
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"




function Create(){
    const navigate = useNavigate()
    const [data , setData] = useState("")
    function handleDataChange(e){
        setData(e.target.value)
    }


    async function handleSubmit(e){
        e.preventDefault()
        try{
            const response = await axios.post(
                "http://localhost:3000/create",
                {
                    log : data
                },
                {
                    withCredentials: true
                }
            )

            navigate("/data")

        }catch(err){
            console.error("Somethign went wrong...", err)
        }


        console.log(data)
        setData("")
    }




    return (
        <>
            {/* <h1>Abhay is God</h1> */}

            <h1 className = "heading_css" > Create Here</h1>
            <form 
            className="flex flex-col items-center justify-center mt-50"
            onSubmit={(e) => {handleSubmit(e)}}>
                <textarea 
                    className="h-50 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg  focus:outline-none m-1 text-green-600 "
                    onChange={handleDataChange}
                    value={data}
                    placeholder="Write Something..."
                />
                <button type="submit" className="button_css">Submit</button>
            </form>
        </>
    )
}


export default Create