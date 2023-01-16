import React from 'react';

import RenderRoutes from "utils/render-routes";
import {authenticatedRoutes} from "constants/route-pages.const";
import {CONTACTS_HOME_ROUTE} from "constants/routes.const";

const AuthenticatedAppPage = () => {
    return <RenderRoutes routePages={authenticatedRoutes} redirectRoute={CONTACTS_HOME_ROUTE}/>
};

export default AuthenticatedAppPage;