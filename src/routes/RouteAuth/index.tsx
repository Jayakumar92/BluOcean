import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { useRedux } from "@/hooks";

const RouteAuth = (props: any) => {
    const { isAuthenticated } = useRedux();
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return <Fragment>{props.children}</Fragment>;
};

export { RouteAuth };
