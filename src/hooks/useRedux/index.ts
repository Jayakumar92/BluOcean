import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, proceedLogout } from '@redux/store'

const useRedux = () => {
    const dispatch: AppDispatch = useDispatch();
    const app = useSelector((state: RootState) => state.app);
    return { ...app, dispatch };
};


export { useRedux };    