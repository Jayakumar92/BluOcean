import { AppDispatch, proceedLogout } from '@/redux/store';
import { useDispatch } from 'react-redux';


const useLogout = () => {

    const dispatch: AppDispatch = useDispatch();

    function logout() {
        dispatch(proceedLogout({
            onSuccess: () => {
                console.log('came');
            },
            onError: () => {
            }
        }))
    }


    return { logout }
}
export { useLogout };
