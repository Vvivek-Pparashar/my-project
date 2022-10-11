import React, { createContext, useContext, useReducer } from 'react'

//data layer
export const StateContext = createContext();

//provider
const StateProvider = ({ reducer, initialState, children }) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

//to use inside a component

export default StateProvider;

export const useStateValue = () => useContext(StateContext);