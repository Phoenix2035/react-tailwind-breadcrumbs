import {Outlet, Navigate, useLocation} from "react-router-dom"
import ROUTES_CONSTANT from "routing/routes.const";


const PrivateRoutes = () => {
    const location = useLocation()
    const isAuth = localStorage.getItem("auth")

    return isAuth === "true" ? <Outlet/> : <Navigate to={ROUTES_CONSTANT.LOGIN_ROUTE} state={{from: location}} replace/>
};

export default PrivateRoutes;