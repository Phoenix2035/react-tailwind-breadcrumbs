import {LOGIN_ROUTE, CONTACTS_HOME_ROUTE} from "./routes.const";


import Login from "components/login";
import Contacts from "components/contacts";

export const unauthenticatedRoutes = [
    {route: LOGIN_ROUTE, Component: Login},
];

export const authenticatedRoutes = [
    {route: CONTACTS_HOME_ROUTE, Component: Contacts},
]