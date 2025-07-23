import { configureStore } from "@reduxjs/toolkit";
import registerSlice from '../features/register/registerSlice'
const store = configureStore(
    {
        reducer: {
            registerSlice
        }   
    }
);

export default store;