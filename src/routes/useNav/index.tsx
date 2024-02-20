
import { useLocation, useNavigate, useParams } from "react-router-dom";

const useNav = () => {

    const navigation = useNavigate();
    const params = useParams();
    const location = useLocation();

    const goTo = (to: string, replace: boolean = false) => {
        navigation(to, { replace: replace });
    }

    const goBack = (action: number = -1) => {
        // const doesAnyHistoryEntryExist = location.key !== "default";
        navigation(action)

        // if (doesAnyHistoryEntryExist) {
        //     navigation(action)
        // } else {
        //     navigation(ROUTES["auth-module"].splash)
        // }

    }

    return { goTo, goBack, ...params };

};

export { useNav };
