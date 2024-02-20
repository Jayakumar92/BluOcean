
import { RouteAuth, RouteUnAuth } from '@/routes';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AUTH_ROUTES, HOME_ROUTE } from "../constants";

function AppRoutes() {
    function getAuthRoutes(props: any) {
        return <Route {...props} element={<RouteUnAuth>{props.element}</RouteUnAuth>} />;
    }

    function getHomeRoutes(props: any) {
        return <Route {...props} element={<RouteAuth>{props.element}</RouteAuth>} />;
    }

    return (
        <BrowserRouter >
            <Routes>
                {AUTH_ROUTES.map(props => { return getAuthRoutes(props) })}
                {HOME_ROUTE.map(props => { return getHomeRoutes(props) })}
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes };
