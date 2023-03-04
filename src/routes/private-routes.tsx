import { Outlet, Navigate } from "react-router-dom";
import ROUTES_CONSTANT from "constants/routes.const";

const PrivateRoutes = () => {
  const isAuth = localStorage.getItem("auth");

  return isAuth === "true" ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES_CONSTANT.LOGIN_ROUTE} replace />
  );
};

export default PrivateRoutes;
