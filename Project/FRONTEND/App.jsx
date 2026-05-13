import {useState, useEffect} from 'react'
import Card from './components/Card'
import TestUI from './components/TestUI'

function App(){

    const [allData, setAllData] = useState({})

    const [logData, setLogData] = useState("")

    const [expance, setExapance] = useState({})
    const [on, setOn] = useState("")
    const [amount, setAmount] = useState("")
    function handleChangeLog(e){
        // console.log(e.target.value)
        setLogData(e.target.value)
    }

    const [specialData, setSpecialData] = useState("")

    function handleChangeSpecial(e){
        // console.log(e.target.value)
        setSpecialData(e.target.value)
    }

    const [weeklyData, setWeeklyData] = useState("")

    function handleChangeWeekly(e){
        // console.log(e.target.value)
        setWeeklyData(e.target.value)
    }

    function forOn(e){
        setOn(e.target.value)
    }

    function forAmount(e){
        setAmount(e.target.value)
    }

    function print(){

        if(on.trim() === "" || amount === ""){
            return
        }

        setExapance(prev => (
            {
                ...prev,
                [on] : amount
            }
        ))
        setOn("")
        setAmount(0)
    }

    function printData(){

        const newData = {
            "logs" : logData,
            "special" : specialData,
            "expance" : expance,
            "weeklytask" : weeklyData
        }

        setAllData(newData)

        // console.log(allData)
    }
    // useEffect(() => {
    //     console.log(expance)
    // }, [expance])
    // useEffect(() => {
    //     console.log(allData)
    // }, [allData])

    return ( //<TestUI/>
        <>  
        <h1 className="text-6xl font-bold text-center m-5">Daily Journal</h1>
        <div className="flex flex-col justify-center items-center">
        <textarea 
            className="text-area1 mt-10"
            onChange={(e) => {
                handleChangeLog(e)
            }}
            id="log_input"
            value={logData}
        ></textarea>

        <textarea 
            className="text-area2"
            onChange={(e) => {
                handleChangeSpecial(e)
            }}
            id="special_input"
            value={specialData}
        ></textarea>

        <div className="cont" id="expanceCont">
        <div className="flex flex-row justify-center items-center" id='expanceDiv'>
            <input className="input_field" 
            type="text"
            placeholder="Exapanse"
            value = {on}
            onChange={(e) => {forOn(e)}}
            required={true}
            >
            </input>

            <p className="text-4xl font-bold">:</p>

            <input className="input_field" 
            type="number"
            placeholder="Amount"
            value = {amount}
            onChange={(e) => {forAmount(e)}}
            required={true}
            >
            </input>
            <p className="hover:cursor-pointer hover:text-green-400 hover:scale-110 text-5xl font-bold text-green-500 px-4"
            onClick={() => {print()}}
            >
            + 
            </p>
        </div>
        </div> 

        <textarea 
            className="text-area3"
            onChange={(e) => {
                handleChangeWeekly(e)
            }}
            id="weekly_input"
            value={weeklyData}
        ></textarea>

        <button
            className='hover:bg-amber-600 px-6 border-2 border-amber-600 rounded-3xl'
            onClick={() => {printData()}}>Submit</button>

        <Card allData={allData}/>

        </div>

        </>
    )
}

export default App








// import { useEffect, useState } from "react"
// import TestUI from "./components/TestUI"

// function App() {

//   const [data, setData] = useState({
//       "logs" : ["Went ot college there were no classes", "also went to Mandi", "and started Running"],
//       "special" : ["went for Running", "no Class"],
//       "expance" : {
//         "mangos" : 100, "travel" : 20
//       },
//       "weeklytask" : "Compelete Backend"
//     })

//   const container = document.getElementById("container")
//   const btn = document.createElement("btn")
//   const div = document.createElement("expanceDiv")
//   btn.onClick = () => {
//     console.log("Clicked...")
    // container.appendChild(div)
//   )
// } 
//   function addExp(){
//     const cont = document.getElementById("expanceCont")
//     const div = document.createElement("expanceDiv")
//     cont.appendChild(div)
//     console.log("child added...")
//   }
      // <>
      // <input className="input_field" 
      //   type="text"
      //   placeholder="Exapanse">
      // </input>

      // <p className="text-2xl font-bold">:</p>

      // <input className="input_field" 
      //   type="number"
      //   placeholder="Amount">
      // </input>
      // </>
    // )
    // console.log("child added...")
  // }



//   return (<TestUI/>)
  // (
  //   <>
  //     <h1 className="text-6xl font-bold text-center m-5">Daily Journal</h1>
  //     <div className="flex flex-col justify-center items-center">
  //       <textarea
  //         className="text-area1 mt-10"
  //         type="text"
  //         placeholder="Enter Logs Here..."
  //         >
  //       </textarea>

  //       <textarea
  //         className="text-area2"
  //         type="text"
  //         placeholder="Enter Special Logs Here..."
  //         >
  //       </textarea>

  //       <div className="cont" id="expanceCont">
  //         <div className="flex flex-row justify-center items-center" id='expanceDiv'>
  //           <input className="input_field" 
  //             type="text"
  //             placeholder="Exapanse">
  //           </input>

  //           <p className="text-2xl font-bold">:</p>

  //           <input className="input_field" 
  //             type="number"
  //             placeholder="Amount">
  //           </input>
  //           <p className="hover:cursor-pointer hover:text-green-400 hover:scale-110 text-5xl font-bold text-green-500 px-4"
  //             onClick={() => {addExp}}
  //           >
  //             + 
  //           </p>
  //         </div>
  //       </div>

  //       <textarea
  //         className="text-area3"
  //         type="text"
  //         placeholder="Enter a Weekly Objective Here..."
  //         >
  //       </textarea>


  //         <button className="bg-violet-600 hover:bg-violet-500 hover:scale-95 text-white font-bold py-2 px-4 m-10 rounded"> Submit </button>
  //     </div>

  //     <div className="flex m-10 flex-col justify-center items-center">
  //       <div className="p-2">
  //         <div className="card_info">
  //           <h1 className="card_head" >Logs</h1>
  //           <p>{data.logs}</p>
  //         </div>
  //         <div className="card_info">
  //           <h1 className="card_head" >Special</h1>
  //           <p>{data.special}</p>
  //         </div>
  //         <div className="card_info">
  //           <h1 className="card_head" >Weekly Task</h1>
  //           <p>{data.weeklytask}</p>
  //         </div>
  //         <div className="card_info">
  //           <h1 className="card_head" >Expance</h1>
  //           <p>{JSON.stringify(data.expance)}</p>
  //         </div>
          
  //       </div>
  //     </div>


  //     <div id="container"></div>
  //     <button id="btn">Add..</button>
  //   </>
  // )
// }

// export default App


