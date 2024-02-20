import { createContext, useContext } from 'react';

export const AppContext = createContext({});

export const useApp = () => useContext<{
    show?: boolean;
    setShowLoader?: (loader: boolean) => void;
}>(AppContext);

