import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import axios from 'axios';

//code without api or without async

// export const userSlice = createSlice({
//     name:"user",
//     initialState:{
//         name: "leadastaire",
//         email: "muneebwaseem@leadastaire.com"
//     },
//     reducers:{
//         update: (state,action) =>(
//             state.name= action.payload.name,
//             state.email= action.payload.value
//         ),
//         remove: (state) => (
//             state= {}
//         ) 
//     }
// })

// export const {update, remove} = userSlice.actions;


//working for api or async stuff

export const updateUser2 = createAsyncThunk("users/update", async (user)=>{
     const response = await axios.post("http://localhost:8800/api/users/1/update", user);
     return response.data
});

//In above we define const, users/update is just dummmy
//we pass user from update.jsx file to it, it will post that to api
//and in return it will send us response back
//and we can run pending, success and rejected cases on this api in extra reducers

export const userSlice = createSlice({
    name: "user",
    initialState:{
        userInfo:{
            name: "Jack",
            email: "jack@gmail.com"
        },
        pending: null,
        error: false
    },
    reducers: {},
    //use extra reducers for async thunk, consist of pending, fulfilled(success), rejected(error)
    extraReducers:{
        [updateUser2.pending]: (state)=>{
            state.pending = true;
            state.error = false
        },

        //when pending false and api run successfully, we send data to that api using action.payload from update.jsx file using dispatch
        [updateUser2.fulfilled]: (state, action)=>{
            state.pending = false;
            state.userInfo = action.payload
        },
        [updateUser2.rejected]: (state)=>{
            state.pending = null;
            state.error = true
        }
    }

})

export default userSlice.reducer;