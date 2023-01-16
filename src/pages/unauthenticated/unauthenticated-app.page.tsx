import {LOGIN_ROUTE} from "constants/routes.const";
import RenderRoutes from "utils/render-routes";
import {unauthenticatedRoutes} from "constants/route-pages.const";

const UnauthenticatedAppPage = () => {
    return <RenderRoutes routePages={unauthenticatedRoutes} redirectRoute={LOGIN_ROUTE} />;
};

export default UnauthenticatedAppPage;