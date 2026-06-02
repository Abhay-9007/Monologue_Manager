
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Data(){
    const [data, setData] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {

        async function fetchData(){

            try{

                const response = await axios.get(
                    "http://localhost:3000/data",
                    {
                        withCredentials: true
                    }
                )

                setData(response.data)

            }catch(err){

                console.log(err)

                setError("Error fetching data")
            }
        }

        fetchData()

    }, [])

    if(error){
        return <p className="text-2xl text-red-600">{error}</p>
    }


    return(
        <>
            <h1 className="heading_css">DATA</h1>
            <div className="flex flex-col justify-center items-center m-10">
                {
                    data.map((item) => (
                        <div key={item._id}
                        className="border-2 border-green-800 rounded-t-2xl m-3 p-5">
                            <p className="text-2xl text-white text-wrap w-100">{item.log}</p>
                            <p className="text-sm text-gray-300 text-end">{item.date}</p>
                        </div>
                    ))
                }
            </div>
            <Link className="sticky bottom-10 left-10 hover:bg-gray-800 border-2 p-2  px-5 border-green-800 h-10 rounded-lg text-3xl m-1 text-green-600 font-bold" to='/create'> CREATE </Link>
        </>
    )
}``

export default Data