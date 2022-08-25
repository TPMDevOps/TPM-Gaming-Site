import Home from "../../pages/home";
import react from "react"

const AppRouter = () => {
    return(

        <switch>
            <Route exact path={'/'} component={Home} />
        </switch>
    );
}

export default AppRouter;