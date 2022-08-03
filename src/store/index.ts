import { configureStore,createSlice } from "@reduxjs/toolkit";

const displayNameSlice=createSlice({
    name:"displayName",
    initialState:{
        displayName:"",
        stockBookmark:false,
        loginToast:false,
    },
    reducers:{
        setDisplayName:(state,action)=>{
            state.displayName=action.payload;
        },setStockBookmark:(state,action)=>{
            state.stockBookmark=action.payload;
        }
        ,setLoginToast:(state,action)=>{
            state.loginToast=action.payload;
        }
    }
});

export const actions=displayNameSlice.actions;

const store = configureStore({
    reducer: displayNameSlice.reducer
});

export default store;


