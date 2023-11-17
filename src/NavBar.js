import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"


function NavBar({data}) {
    const snacks = data
  return (
    <nav className="NavBar">
        {console.log(snacks)}
         {snacks.map(el=>(
            <NavLink exact to={`${el.name}`} key={`N${el.id}`}>
                {el.name}
            </NavLink>
         ))}
    </nav>
  );
}

export default NavBar;