import { Login } from '@/features/auth/screen/login';
import { Dashboard } from '@/features/home/screen/dashboard';



export const HOME_ROUTE = [
    {
        key: '1',
        path: "/",
        element: <Dashboard />,
        routeComponent: 'auth',
        exact: true,
    },
]


export const AUTH_ROUTES = [
    {
        key: '1',
        path: "/login",
        element: <Login />,
        exact: true,
    },
];
