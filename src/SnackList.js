import React, {useState} from "react";
import Snack from "./SnackThumb";
import SnackThumb from "./SnackThumb";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import SnackDetail from "./SnackDetail";
import MyNavBar from "./NavBar";
import "./SnackList.css"

function SnackList ({snacks}) {

    const RouteList = (snacks) => {
        snacks.map((snack)=>{
            <Route exact path={`/${snack.name}`} key = {`R${snack.id}`} element={<SnackDetail data={snack}/>}/>
             
        })
    }



return(
    <div className="SnackList">
         <h2>Available Snacks</h2>
        <BrowserRouter>
        <MyNavBar data={snacks} className="NavBar"/>
        <Routes>
            {snacks.map(el => (
                 <Route path={`/${el.name}`} element={<SnackDetail data={el} key={el.id}></SnackDetail>}></Route> ))}
       

                <Route path={`/`}></Route> 
        </Routes>
        
        </BrowserRouter>
        
    </div>

)
     
    
}


export default SnackList