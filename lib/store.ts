import { configureStore } from "@reduxjs/toolkit"
import  countrydataReducer from "./slices/countrydataSlice";

export const makeStore = ()=>{
    return configureStore({
        reducer:{
            country:countrydataReducer,
        },
    })
}
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];