import React, {useState} from "react";
import Snack from "./SnackThumb";
import SnackThumb from "./SnackThumb";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import SnackDetail from "./SnackDetail";
import MyNavBar from "./NavBar";

function SnackList ({snacks}) {

    const RouteList = (snacks) => {
        snacks.map((snack)=>{
            <Route exact path={`/${snack.name}`} element={<SnackDetail data={snack}/>}/>
             
        })
    }

return(
    <div>
         <h1>Available Snacks</h1>
        <BrowserRouter>
        <MyNavBar data={snacks}/>
        <Routes>
            {snacks.map(el => (
                 <Route path={`/${el.name}`} element={<SnackDetail data={el}></SnackDetail>}></Route> ))}
       

       
        </Routes>
        </BrowserRouter>
        
      
           
   
    </div>

)
     
    
}


export default SnackList