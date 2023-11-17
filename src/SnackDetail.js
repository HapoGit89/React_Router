import "./SnackDetail.css"
import { BrowserRouter, NavLink } from "react-router-dom"

function SnackDetail ({data}){
    const goHome = ()=> window.location.href="/"
    return (
        <div className="SnackDetail">
            <h1>{data.name}</h1>
            <p>{data.text}</p>
           { data.img && <img src={data.img} className="DetailImg"></img>}

           <button onClick={goHome}>Reset</button>

           


        </div>
    )

}

export default SnackDetail