import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        name: "leadastaire",
        email: "muneebwaseem@leadastaire.com"
    },
    reducers:{
        update: (state,action) =>(
            state.name= action.payload.name,
            state.email= action.payload.value
        )
    }
})

export const {update} = userSlice.actions;
export default userSlice.reducer;