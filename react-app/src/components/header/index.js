import style from "./header.module.scss"
import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () =>{
    return (
     <div className={style.header}>
        <div className={style.nav}>
        <ul className={style.navList}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/Fourm'}>Fourm</NavLink>
        </ul>
     </div>
     </div>
    );
}
export default Header;