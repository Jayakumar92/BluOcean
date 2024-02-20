import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { useRedux } from '@/hooks'

const RouteUnAuth = (props: any) => {
    const { isAuthenticated } = useRedux();
    if (isAuthenticated) {
        return <Navigate to="/" />;
    }
    return <Fragment>{props.children}</Fragment>;
};

export { RouteUnAuth };
