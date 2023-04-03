import { Route, Routes } from 'react-router-dom';

import Forums from '../../pages/forum';
import Home from "../../pages/home";
import React from "react";
import SignUpForm from '../sign_up_form';

const AppRouter = () => {
    return(

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/form' element={<Forums/>} />
            <Route path='/signup' element={<SignUpForm/>} />
        </Routes>
    );
}

export default AppRouter;