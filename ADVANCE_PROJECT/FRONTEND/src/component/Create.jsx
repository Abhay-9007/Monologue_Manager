// import {useEffect, useState} from "react"
// import {useNavigate} from "react-router-dom"
// import axios from "axios"




// function Create(){
//     const navigate = useNavigate()

//     const [data , setData] = useState("")

//     const [log, setLog] = useState([])
//     const [special, setSpecial] = useState([])
//     const [on, setOn] = useState("")
//     const [amount, setAmount] = useState(0)
//     const [expense, setExpense] = useState({})
//     const [weekly, setWeekly] = useState("")
//     const [mood, setMood] = useState("")

//     const [counter, setCounter] = useState(1)
    

//     function handleDataChange(e){
//         setData(e.target.value)
//     }
    
//     function handleLogChange(e){
//         setLog(e.target.value)
//     }
//     function handleSpecialChange(e){
//         setSpecial(e.target.value)
//     }
//     function handleExpenseChange(e){
//         // console.log(e.target.value)
//         setExpanse(e.target.value)
//     }
//     function handleWeeklyChange(e){
//         setWeekly(e.target.value)
//     }
//     function handleMoodChange(e){
//         setMood(e.target.value)
//     }
//     function forOn(e){
//         setOn(e.target.value)
//     }

//     function forAmount(e){
//         // console.log(e.target.value)
//         setAmount(e.target.value)
//     }

//     function handleCounterIncrement(){
//         setCounter(prev => prev + 1)
//         console.log(counter)
//     }
    
//     function print(){

//         if(on.trim() === "" || amount === ""){
//             return
//         }

//         setExapence(prev => (
//             {
//                 ...prev,
//                 [on] : amount
//             }
//         ))
//         setOn("")
//         setAmount(0)
//     }


//     async function handleSubmit(e){
//         e.preventDefault()
//         try{
//             const response = await axios.post(
//                 "http://localhost:3000/create",
//                 {
//                     log : log,
//                     special: special,
//                     weekly_task : weekly,
//                     mood : mood,
//                     expense : expense
//                 },
//                 {
//                     withCredentials: true
//                 }
//             )

//             navigate("/data")

//         }catch(err){
//             console.error("Somethign went wrong...", err)
//         }

//         console.log(log, special, weekly, mood, expense)
//         setData("")
//     }




//     return (
//         <>
//             {/* <h1>Abhay is God</h1> */}

//             <h1 className = "heading_css" > Create Here </h1>
//             <form 
//             className="flex flex-col items-center justify-center mt-50"
//             onSubmit={(e) => {handleSubmit(e)}}>
//                 {/* <textarea 
//                     className="h-30 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg  focus:outline-none m-1 text-green-600 "
//                     onChange={handleLogChange}
//                     value={log}
//                     placeholder="Write Log here..."
//                 />
//                 <textarea 
//                     className="h-30 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg  focus:outline-none m-1 text-green-600 "
//                     onChange={handleSpecialChange}
//                     value={special}
//                     placeholder="Write Specials..."
//                 />
//                 <textarea 
//                     className="h-30 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg  focus:outline-none m-1 text-green-600 "
//                     onChange={handleWeeklyChange}
//                     value={weekly}
//                     placeholder="Write about your Weekly Task..."
//                 />
//                 <textarea 
//                     className="h-30 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg  focus:outline-none m-1 text-green-600 "
//                     onChange={handleMoodChange}
//                     value={mood}
//                     placeholder="Write about your Mood..."
//                 /> */}
//                 <div className="">
                    
//                     <div className="flex flex-row justify-center items-center" id='expanceDiv'>
//                         <input className="border-2 border-green-800 text-2xl p-3 rounded-lg  focus:outline-none m-1 text-green-600" 
//                         type="text"
//                         placeholder="Exapanse"
//                         value = {on}
//                         onChange={(e) => {forOn(e)}}
//                         required={true}
//                         >
//                         </input>

//                         <p className="text-4xl font-bold">:</p>

//                         <input className="border-2 border-green-800 text-2xl p-3 rounded-lg  focus:outline-none m-1 text-green-600" 
//                         type="number"
//                         placeholder="Amount"
//                         value = {amount}
//                         onChange={(e) => {forAmount(e)}}
//                         required={true}
//                         >
//                         </input>
                        
//                     </div>
//                     <p className="hover:cursor-pointer hover:text-green-400 hover:scale-110 text-5xl font-bold text-green-500 w-fit px-4"
//                         onClick={() => {handleCounterIncrement(); print()}}
//                     >
//                     + 
//                     </p>
//                 </div>
//                 <button type="submit" className="button_css">Submit</button>
//             </form>
//         </>
//     )
// }


// export default Create




// // import {useEffect, useState} from "react"
// // import {useNavigate} from "react-router-dom"
// // import axios from "axios"




// // function Create(){
// //     const navigate = useNavigate()
// //     const [data , setData] = useState("")
// //     function handleDataChange(e){
// //         setData(e.target.value)
// //     }


// //     async function handleSubmit(e){
// //         e.preventDefault()
// //         try{
// //             const response = await axios.post(
// //                 "http://localhost:3000/create",
// //                 {
// //                     log : data
// //                 },
// //                 {
// //                     withCredentials: true
// //                 }
// //             )

// //             navigate("/data")

// //         }catch(err){
// //             console.error("Somethign went wrong...", err)
// //         }


// //         console.log(data)
// //         setData("")
// //     }




// //     return (
// //         <>
// //             {/* <h1>Abhay is God</h1> */}

// //             <h1 className = "heading_css" > Create Here</h1>
// //             <form 
// //             className="flex flex-col items-center justify-center mt-50"
// //             onSubmit={(e) => {handleSubmit(e)}}>
// //                 <textarea 
// //                     className="h-50 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg  focus:outline-none m-1 text-green-600 "
// //                     onChange={handleDataChange}
// //                     value={data}
// //                     placeholder="Write Something..."
// //                 />
// //                 <button type="submit" className="button_css">Submit</button>
// //             </form>
// //         </>
// //     )
// // }


// // export default Create


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
    const navigate = useNavigate();

    const [log, setLog] = useState("");
    const [special, setSpecial] = useState("");
    const [weekly, setWeekly] = useState("");
    const [mood, setMood] = useState("");

    // Dynamic Expense List
    const [expenses, setExpenses] = useState([
        {
            on: "",
            amount: ""
        }
    ]);

    function handleLogChange(e) {
        setLog(e.target.value);
    }

    function handleSpecialChange(e) {
        setSpecial(e.target.value);
    }

    function handleWeeklyChange(e) {
        setWeekly(e.target.value);
    }

    function handleMoodChange(e) {
        setMood(e.target.value);
    }

    // Update a particular expense
    function handleExpenseChange(index, field, value) {
        const updated = [...expenses];
        updated[index][field] = value;
        setExpenses(updated);
    }

    // Add another expense row
    function handleCounterIncrement() {
        setExpenses(prev => [
            ...prev,
            {
                on: "",
                amount: ""
            }
        ]);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // Convert array -> object
        const expenseObject = {};

        expenses.forEach(item => {
            if (item.on.trim() !== "") {
                expenseObject[item.on] = Number(item.amount);
            }
        });

        try {
            await axios.post(
                "http://localhost:3000/create",
                {
                    log,
                    special,
                    weekly_task: weekly,
                    mood,
                    expense: expenseObject
                },
                {
                    withCredentials: true
                }
            );

            navigate("/data");
        } catch (err) {
            console.error("Something went wrong...", err);
        }

        console.log({
            log,
            special,
            weekly,
            mood,
            expenseObject
        });
    }

    return (
        <>
            <h1 className="heading_css">Create Here</h1>

            <form
                className="flex flex-col items-center justify-center mt-20"
                onSubmit={handleSubmit}
            >

                {/* Uncomment if needed */}

                
                <textarea
                    className="h-30 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
                    value={log}
                    onChange={handleLogChange}
                    placeholder="Write Log..."
                />

                <textarea
                    className="h-30 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
                    value={special}
                    onChange={handleSpecialChange}
                    placeholder="Special..."
                />

                <textarea
                    className="h-30 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
                    value={weekly}
                    onChange={handleWeeklyChange}
                    placeholder="Weekly Task..."
                />

                <textarea
                    className="h-30 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
                    value={mood}
                    onChange={handleMoodChange}
                    placeholder="Mood..."
                />

                <div className="flex flex-col items-center">

                    {expenses.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-row justify-center items-center mb-3"
                        >
                            <input
                                className="border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
                                type="text"
                                placeholder="Expense"
                                value={item.on}
                                onChange={(e) =>
                                    handleExpenseChange(
                                        index,
                                        "on",
                                        e.target.value
                                    )
                                }
                            />

                            <p className="text-4xl font-bold mx-2">:</p>

                            <input
                                className="border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
                                type="number"
                                placeholder="Amount"
                                value={item.amount}
                                onChange={(e) =>
                                    handleExpenseChange(
                                        index,
                                        "amount",
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                    ))}

                    <p
                        className="hover:cursor-pointer hover:text-green-400 hover:scale-110 text-5xl font-bold text-green-500"
                        onClick={handleCounterIncrement}
                    >
                        +
                    </p>

                </div>

                <button
                    type="submit"
                    className="button_css mt-6"
                >
                    Submit
                </button>
            </form>
        </>
    );
}

export default Create;
