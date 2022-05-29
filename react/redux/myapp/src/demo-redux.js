import {createStore} from 'redux'
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {counter:0, show:true}

const counterSlice = createSlice({
       name: 'counter',
       initialState : initialCounterState,
       reducers:{
              increment(state){
                     state.counter++;
              },
              decrement(state){
                     state.counter--;
              },
              increase(state, action){
                     state.counter = state.counter +action.payload;
              },
              toggleCounter(state){
                     state.show = !state.show;
              },
       }
})

const initialAuth = {isauth : false};
const authSlice = createSlice({
       name:'auth',
       initialState : initialAuth,
       reducers:{
              login(state){
                     state.isauth = true;
              },
              logout(state){
                     state.isauth = false;
              },
       },
})


const store = configureStore({
       reducer : { counter: counterSlice.reducer, auth : authSlice.reducer, }
});


export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;

export default store;
