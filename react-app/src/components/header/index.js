import { NavLink } from 'react-router-dom';
import React from "react";
import style from "./header.module.scss"

const Header = () =>{
    return (
     <div className={style.header}>
        <div className={style.nav}>
        <ul className={style.navList}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/fourm'}>Fourm</NavLink>
        </ul>
     </div>
     </div>
    );
}
export default Header;