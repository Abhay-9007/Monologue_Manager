
import {Link} from "react-router-dom"

function Home(){
    return(
        <>
        <h1> This is Home Page... </h1>
        <h1> What do you wanna do??? </h1>
        <Link to="/login"> login </Link> <br/>
        <Link to="/api/auth/register"> register </Link> <br/>
        <Link to="/create"> create </Link> <br/>
        <Link to="/data"> see data</Link> <br/>
        {/* <h1> login </h1>
        <h1> register </h1>
        <h1> create </h1>
        <h1> your data </h1> */}

        
        </>

    )
}



export default Home
