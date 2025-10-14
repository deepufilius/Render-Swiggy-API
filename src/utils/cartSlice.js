import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[]
    },
    reducers:{
        addItem: (state,action)=>{
            //Mutating the state
            state.items.push(action.payload);
        },
        removeItem: (state,action)=>{
            state.items.splice(action.payload,1);
        },
        clearCart: (state)=>{
            //return []

            state.items.length = 0;
        }
    }
})

const {reducer,actions} = cartSlice;

export const {addItem,removeItem,clearCart} = actions;

export default reducer;