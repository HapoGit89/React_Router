import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import SnackDetail from "./SnackDetail";


function SnackThumb ({data}) {
return (
    <div className="SnackThumb">
        <Routes>
        
         <Route exact path={`/${data.name}`}><div>
            <NavLink exact to={`${data.name}`}>{data.name}</NavLink>
          <SnackDetail data={data} />
        
           
        </div>
        </Route>
        </Routes>

    
    </div>
)

}


export default SnackThumb