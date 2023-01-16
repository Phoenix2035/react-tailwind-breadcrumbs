import React from 'react';
import {Routes,Route, Navigate} from "react-router-dom";


interface IRoutePage {
    route: string;
    Component: (props?: any) => JSX.Element;
}

interface RenderRoutesProps {
    routePages: IRoutePage[];
    redirectRoute?: string;
}

const RenderRoutes = ({routePages, redirectRoute}: RenderRoutesProps) => {
    return (
        <>
            {routePages?.map(Page => (
                <Route key={Array.isArray(Page.route) ? Page.route[0] : Page.route} path={Page.route} element={Page.Component}/>
            ))}
            {redirectRoute && <Navigate to={redirectRoute}/>}
        </>
    );
};

export default RenderRoutes;