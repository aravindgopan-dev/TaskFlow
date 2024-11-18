import { PayloadAction,createSlice } from "@reduxjs/toolkit";

export interface initialStateType{
    isSidebarCollapsed:boolean,
    isDarkMode :boolean
}



const  initialState:initialStateType={
    isSidebarCollapsed:false,
    isDarkMode:false
}
export const globalSlice=createSlice({
    name:"global",
    initialState,
    reducers:{
        setIsSidebarCollapsed:(state,action:PayloadAction<boolean>)=>{
            state.isSidebarCollapsed=action.payload;
        },
        setisDarkMode:(state,action:PayloadAction<boolean>)=>{
            state.isDarkMode=action.payload;
        }
    }
})

export const  {setIsSidebarCollapsed,setisDarkMode}=globalSlice.actions
export default globalSlice.reducer