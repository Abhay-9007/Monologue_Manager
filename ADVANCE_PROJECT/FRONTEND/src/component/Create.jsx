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


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Create() {
//     const navigate = useNavigate();

//     const [log, setLog] = useState("");
//     const [special, setSpecial] = useState("");
//     const [weekly, setWeekly] = useState("");
//     const [mood, setMood] = useState("");

//     // Dynamic Expense List
//     const [expenses, setExpenses] = useState([
//         {
//             on: "",
//             amount: ""
//         }
//     ]);

//     function handleLogChange(e) {
//         setLog(e.target.value);
//     }

//     function handleSpecialChange(e) {
//         setSpecial(e.target.value);
//     }

//     function handleWeeklyChange(e) {
//         setWeekly(e.target.value);
//     }

//     function handleMoodChange(e) {
//         setMood(e.target.value);
//     }

//     // Update a particular expense
//     function handleExpenseChange(index, field, value) {
//         const updated = [...expenses];
//         updated[index][field] = value;
//         setExpenses(updated);
//     }

//     // Add another expense row
//     function handleCounterIncrement() {
//         setExpenses(prev => [
//             ...prev,
//             {
//                 on: "",
//                 amount: ""
//             }
//         ]);
//     }

//     async function handleSubmit(e) {
//         e.preventDefault();

//         // Convert array -> object
//         const expenseObject = {};

//         expenses.forEach(item => {
//             if (item.on.trim() !== "") {
//                 expenseObject[item.on] = Number(item.amount);
//             }
//         });

//         try {
//             await axios.post(
//                 "http://localhost:3000/create",
//                 {
//                     log,
//                     special,
//                     weekly_task: weekly,
//                     mood,
//                     expense: expenseObject
//                 },
//                 {
//                     withCredentials: true
//                 }
//             );

//             navigate("/data");
//         } catch (err) {
//             console.error("Something went wrong...", err);
//         }

//         console.log({
//             log,
//             special,
//             weekly,
//             mood,
//             expenseObject
//         });
//     }

//     return (
//         <>
//             <h1 className="heading_css">Create Here</h1>

//             <form
//                 className="flex flex-col items-center justify-center mt-20"
//                 onSubmit={handleSubmit}
//             >

//                 {/* Uncomment if needed */}

                
//                 <textarea
//                     className="h-30 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
//                     value={log}
//                     onChange={handleLogChange}
//                     placeholder="Write Log..."
//                 />

//                 <textarea
//                     className="h-30 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
//                     value={special}
//                     onChange={handleSpecialChange}
//                     placeholder="Special..."
//                 />

//                 <textarea
//                     className="h-30 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
//                     value={weekly}
//                     onChange={handleWeeklyChange}
//                     placeholder="Weekly Task..."
//                 />

//                 <textarea
//                     className="h-30 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
//                     value={mood}
//                     onChange={handleMoodChange}
//                     placeholder="Mood..."
//                 />

//                 <div className="flex flex-col items-center">

//                     {expenses.map((item, index) => (
//                         <div
//                             key={index}
//                             className="flex flex-row justify-center items-center mb-3"
//                         >
//                             <input
//                                 className="border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
//                                 type="text"
//                                 placeholder="Expense"
//                                 value={item.on}
//                                 onChange={(e) =>
//                                     handleExpenseChange(
//                                         index,
//                                         "on",
//                                         e.target.value
//                                     )
//                                 }
//                             />

//                             <p className="text-4xl font-bold mx-2">:</p>

//                             <input
//                                 className="border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
//                                 type="number"
//                                 placeholder="Amount"
//                                 value={item.amount}
//                                 onChange={(e) =>
//                                     handleExpenseChange(
//                                         index,
//                                         "amount",
//                                         e.target.value
//                                     )
//                                 }
//                             />
//                         </div>
//                     ))}

//                     <p
//                         className="hover:cursor-pointer hover:text-green-400 hover:scale-110 text-5xl font-bold text-green-500"
//                         onClick={handleCounterIncrement}
//                     >
//                         +
//                     </p>

//                 </div>

//                 <button
//                     type="submit"
//                     className="button_css mt-6"
//                 >
//                     Submit
//                 </button>
//             </form>
//         </>
//     );
// }

// export default Create;



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
  <div className="min-h-screen bg-slate-950 py-10 px-5">

    {/* Background Glow */}
    <div className="fixed top-0 left-0 w-96 h-96 bg-indigo-600 opacity-20 blur-[170px] rounded-full"></div>
    <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 blur-[170px] rounded-full"></div>

    <div className="relative z-10 max-w-5xl mx-auto">

      <h1 className="text-5xl font-bold text-center text-white mb-3">
        New Journal Entry
      </h1>

      <p className="text-center text-slate-400 mb-10">
        Capture your thoughts, memories, goals, and emotions.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 shadow-2xl"
      >

        {/* Daily Log */}
        <div className="mb-8">
          <label className="text-xl font-semibold text-white">
            📖 Daily Log
          </label>

          <textarea
            value={log}
            onChange={handleLogChange}
            placeholder="What happened today?"
            className="mt-3 w-full h-40 bg-slate-800 border border-slate-700 rounded-xl p-5 text-white placeholder-slate-500 resize-none focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Special */}
        <div className="mb-8">
          <label className="text-xl font-semibold text-white">
            ⭐ Special Moments
          </label>

          <textarea
            value={special}
            onChange={handleSpecialChange}
            placeholder="Anything unforgettable?"
            className="mt-3 w-full h-32 bg-slate-800 border border-slate-700 rounded-xl p-5 text-white placeholder-slate-500 resize-none focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Weekly */}
        <div className="mb-8">
          <label className="text-xl font-semibold text-white">
            🎯 Weekly Goals
          </label>

          <textarea
            value={weekly}
            onChange={handleWeeklyChange}
            placeholder="Goals for this week..."
            className="mt-3 w-full h-32 bg-slate-800 border border-slate-700 rounded-xl p-5 text-white placeholder-slate-500 resize-none focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Mood */}
        <div className="mb-10">
          <label className="text-xl font-semibold text-white">
            😊 Mood
          </label>

          <textarea
            value={mood}
            onChange={handleMoodChange}
            placeholder="How are you feeling today?"
            className="mt-3 w-full h-28 bg-slate-800 border border-slate-700 rounded-xl p-5 text-white placeholder-slate-500 resize-none focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Expenses */}
        <div>

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold text-white">
              💸 Expenses
            </h2>

            <button
              type="button"
              onClick={handleCounterIncrement}
              className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-xl transition"
            >
              + Add Expense
            </button>

          </div>

          {expenses.map((item, index) => (

            <div
              key={index}
              className="grid md:grid-cols-2 gap-5 mb-5"
            >

              <input
                type="text"
                placeholder="Expense Name"
                value={item.on}
                onChange={(e) =>
                  handleExpenseChange(index, "on", e.target.value)
                }
                className="bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />

              <input
                type="number"
                placeholder="Amount"
                value={item.amount}
                onChange={(e) =>
                  handleExpenseChange(index, "amount", e.target.value)
                }
                className="bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />

            </div>

          ))}

        </div>

        {/* Submit */}

        <div className="flex justify-center mt-12">

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 px-16 py-4 rounded-xl text-xl font-semibold transition hover:scale-105"
          >
            🚀 Save Journal
          </button>

        </div>

      </form>

    </div>

  </div>
);
}

export default Create;