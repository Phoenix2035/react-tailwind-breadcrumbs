import { Navigate, Outlet } from "react-router-dom";

import ROUTES_CONSTANT from "../routing/routes.const";

const OnboardingRoutesGuard = () => {
  const isAuth = localStorage.getItem("auth");

  return (
    <>
      {isAuth === "true" ? (
        <Navigate to={ROUTES_CONSTANT.CONTACTS_ROUTE} replace />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default OnboardingRoutesGuard;
