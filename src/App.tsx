import {BrowserRouter, Routes} from "react-router-dom";

import AuthenticatedAppPage from "pages/authenticated/authenticated-app.page";
import UnauthenticatedAppPage from "pages/unauthenticated/unauthenticated-app.page";

function App() {

    const isAuth = localStorage.getItem("auth")

    return (
       <BrowserRouter>
            <Routes>
                {
                    isAuth === "true" ? <AuthenticatedAppPage/> : <UnauthenticatedAppPage/>
                }
            </Routes>
       </BrowserRouter>
    );
}

export default App;
