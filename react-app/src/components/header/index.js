import style from "./header.module.scss"
import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () =>{
    return (
     <div className={style.container}>
        <h5>PlayMakers Header</h5>
     </div>

    );
}
export default Header;