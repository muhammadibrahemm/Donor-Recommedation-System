import { configureStore } from "@reduxjs/toolkit";
import registerSlice from '../features/register/registerSlice'
import loginLogoutSlice from "../features/login/loginSlice"

const store = configureStore(
    {
        reducer: {
            registerSlice,
            loginLogoutSlice
        }   
    }
);

export default store;