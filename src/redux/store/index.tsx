import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { APP_REDUCER } from '@/redux/app'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const STORAGE_NAME = 'BASE_APP'

const persistConfig = {
    key: STORAGE_NAME,
    storage,
}

const reducer = combineReducers({
    app: APP_REDUCER,
});

export function proceedLogout(params: any) {
    return {
        type: "USER_LOGOUT",
        payload: params
    }
}

const rootReducer = (state: any, action: any) => {
    if (action.type === 'USER_LOGOUT') {
        try {
            localStorage.clear();
            action.payload.onSuccess();
            return reducer(undefined, action);
        } catch {
            action.payload.onError();
        }
    }
    return reducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };