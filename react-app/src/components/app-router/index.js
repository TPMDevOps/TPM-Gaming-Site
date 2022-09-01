import { Route, Routes } from 'react-router-dom';

import Forums from '../../pages/forum';
import Home from "../../pages/home";
import React from "react";

const AppRouter = () => {
    return(

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/fourm' element={<Forums/>} />
        </Routes>
    );
}

export default AppRouter;