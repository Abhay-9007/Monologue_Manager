import {useState, useEffect} from 'react'
import Card from './components/Card'
import TestUI from './components/TestUI'

function App(){

    const [allData, setAllData] = useState({})

    const [logData, setLogData] = useState("")

    function handleChangeLog(e){
        setLogData(e.target.value)
    }

    const [specialData, setSpecialData] = useState("")

    function handleChangeSpecial(e){
        setSpecialData(e.target.value)
    }

    const [weeklyData, setWeeklyData] = useState("")

    function handleChangeWeekly(e){
        setWeeklyData(e.target.value)
    }

    async function printData(){

        const newData = {
            "logs" : logData,
            "special" : specialData,
            "weeklytask" : weeklyData
        }

        await setAllData(newData)

        // console.log(allData)
    }

    useEffect(() => {
        // console.log(allData)
    }, [allData])

    // return <TestUI/>
      
      return (
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

        {/* <div className="cont" id="expanceCont">
          <div className="flex flex-row justify-center items-center" id='expanceDiv'>
            <input className="input_field" 
              type="text"
              placeholder="Exapanse">
            </input>

            <p className="text-2xl font-bold">:</p>

            <input className="input_field" 
              type="number"
              placeholder="Amount">
            </input>
            <p className="hover:cursor-pointer hover:text-green-400 hover:scale-110 text-5xl font-bold text-green-500 px-4"
              onClick={() => {addExp}}
            >
              + 
            </p>
          </div>
        </div> */}

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




// export default App


