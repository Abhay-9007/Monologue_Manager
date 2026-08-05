
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function Data(){
//     const [data, setData] = useState([])
//     const [error, setError] = useState("")

//     useEffect(() => {

//         async function fetchData(){

//             try{

//                 const response = await axios.get(
//                     "http://localhost:3000/data",
//                     {
//                         withCredentials: true
//                     }
//                 )

//                 setData(response.data)
                

//             }catch(err){

//                 console.log(err)

//                 setError("Error fetching data")
//             }
//         }
//         console.log(data)
//         fetchData()

//     }, [])

//     if(error){
//         return <p className="text-2xl text-red-600">{error}</p>
//     }


//     return(
//         <>
//             <h1 className="heading_css">DATA</h1>
//             <div className="flex flex-col justify-center items-center m-10">
//                 {
//                     data.reverse().map((item) => (
//                         <div key={item._id}
//                         className="border-2 border-green-800 rounded-t-2xl m-3 p-5">
//                             {/* <p className="text-2xl text-white text-wrap w-100"> 
//                                 {item.log}
//                                 {item.special}
//                                 {item.weekly_task}
//                                 {item.mood}
//                                 {/* {item.expense} */}
//                                 {/* {item.log.split('\n').map((line, idx) => (
//                                     <span key={idx}>
//                                     {line}
//                                     {idx !== item.log.split('\n').length - 1 && <br />}
//                                     </span>
//                                 ))} 
//                             </p> */}
//                             <p className="text-2xl text-white whitespace-pre-wrap w-100">
//                                 <strong>Log:</strong>
//                                 <br />
//                                 {item.log}

//                                 <br />
//                                 <br />

//                                 <strong>Special:</strong>
//                                 <br />
//                                 {item.special}

//                                 <br />
//                                 <br />

//                                 <strong>Weekly Task:</strong>
//                                 <br />
//                                 {item.weekly_task}

//                                 <br />
//                                 <br />

//                                 <strong>Mood:</strong>
//                                 <br />
//                                 {item.mood}

//                                 <br />
//                                 <br />

//                                 <strong>Expenses:</strong>
//                                 <br />

//                                 {Object.entries(item.expense || {}).map(([name, amount]) => (
//                                     <div key={name}>
//                                         {name}: ₹{amount}
//                                     </div>
//                                 ))}
//                             </p>
//                             <p className="text-sm text-gray-300 text-end whitespace-pre-wrap">
//                                 {item.date}
//                             </p>
//                         </div>
//                     ))
//                 }
//             </div>
//             <Link className="sticky bottom-10 left-10 hover:bg-gray-800 border-2 p-2  px-5 border-green-800 h-10 rounded-lg text-3xl m-1 text-green-600 font-bold" to='/create'> CREATE </Link>
//         </>
//     )
// }``

// export default Data



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
        console.log(data)
        fetchData()

    }, [])

    if(error){
        return <p className="text-2xl text-red-600">{error}</p>
    }


    return (
  <div className="min-h-screen bg-slate-950 px-5 py-10">

    {/* Background Glow */}
    <div className="fixed top-0 left-0 w-96 h-96 bg-indigo-600 opacity-20 blur-[170px] rounded-full"></div>
    <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 blur-[170px] rounded-full"></div>

    <div className="relative z-10 max-w-5xl mx-auto">

      {/* Header */}

      <div className="flex justify-between items-center mb-12">

        <div>

          <h1 className="text-5xl font-bold text-white">
            My Journal
          </h1>

          <p className="text-slate-400 mt-2">
            Every page tells a story.
          </p>

        </div>

        <Link
          to="/create"
          className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-semibold transition hover:scale-105"
        >
          + New Entry
        </Link>

      </div>

      {/* Empty State */}

      {data.length === 0 && (

        <div className="text-center py-32">

          <h2 className="text-4xl font-bold text-white">
            No Journal Entries Yet
          </h2>

          <p className="text-slate-400 mt-5">
            Your memories will appear here.
          </p>

        </div>

      )}

      {[...data].reverse().map((item) => (

        <div
          key={item._id}
          className="bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 mb-8 hover:border-indigo-500 transition duration-300 shadow-xl"
        >

          {/* Date */}

          <div className="flex justify-between items-center mb-8">

            <span className="text-sm bg-indigo-600 px-4 py-1 rounded-full">
              {item.date}
            </span>

          </div>

          {/* Daily Log */}

          <section className="mb-8">

            <h2 className="text-2xl font-bold text-indigo-400 mb-3">
              📖 Daily Log
            </h2>

            <p className="whitespace-pre-wrap text-slate-300 leading-8">
              {item.log}
            </p>

          </section>

          {/* Special */}

          <section className="mb-8">

            <h2 className="text-2xl font-bold text-yellow-400 mb-3">
              ⭐ Special Moments
            </h2>

            <p className="whitespace-pre-wrap text-slate-300 leading-8">
              {item.special}
            </p>

          </section>

          {/* Weekly */}

          <section className="mb-8">

            <h2 className="text-2xl font-bold text-green-400 mb-3">
              🎯 Weekly Goals
            </h2>

            <p className="whitespace-pre-wrap text-slate-300 leading-8">
              {item.weekly_task}
            </p>

          </section>

          {/* Mood */}

          <section className="mb-8">

            <h2 className="text-2xl font-bold text-pink-400 mb-3">
              😊 Mood
            </h2>

            <p className="whitespace-pre-wrap text-slate-300 leading-8">
              {item.mood}
            </p>

          </section>

          {/* Expenses */}

          <section>

            <h2 className="text-2xl font-bold text-emerald-400 mb-5">
              💸 Expenses
            </h2>

            {Object.keys(item.expense || {}).length === 0 ? (

              <p className="text-slate-500">
                No expenses recorded.
              </p>

            ) : (

              <div className="grid md:grid-cols-2 gap-4">

                {Object.entries(item.expense || {}).map(([name, amount]) => (

                  <div
                    key={name}
                    className="bg-slate-800 rounded-xl px-5 py-4 flex justify-between items-center"
                  >

                    <span className="text-white">
                      {name}
                    </span>

                    <span className="font-bold text-emerald-400">
                      ₹ {amount}
                    </span>

                  </div>

                ))}

              </div>

            )}

          </section>

        </div>

      ))}

    </div>

    {/* Floating Button */}

    <Link
      to="/create"
      className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-500 w-16 h-16 rounded-full text-4xl flex justify-center items-center shadow-2xl transition hover:scale-110"
    >
      +
    </Link>

  </div>
);
}
export default Data