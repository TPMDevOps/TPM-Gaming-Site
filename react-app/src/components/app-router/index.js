import Home from "../../pages/home";
import React from "react";
import { Routes ,Route } from 'react-router-dom';

const AppRouter = () => {
    return(

        <Routes>
            <Route exact path={'/'} component={Home} />
        </Routes>
    );
}

export default AppRouter;