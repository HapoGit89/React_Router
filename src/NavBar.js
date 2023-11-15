import React from "react";
import { NavLink } from "react-router-dom";


function NavBar({data}) {
    const snacks = data
  return (
    <nav className="NavBar">
        {console.log(snacks)}
         {snacks.map(el=>(
            <NavLink exact to={`${el.name}`}>
                {el.name}
            </NavLink>
         ))}
    </nav>
  );
}

export default NavBar;