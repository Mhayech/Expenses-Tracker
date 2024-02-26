import { createContext,useReducer } from "react";

const AppReducer =(state,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return{
                ...state,
                expenses:[...state.expenses,action.payload]
                
            }
        default:
            return state
    }
}
const initialState ={
    budget :2500,
    expenses :[
        {
            id:123,
            name:'Shopping',
            cost:50
        },
        {
            id:124,
            name:'Food',
            cost:70,
        },
        {
            id:125,
            name:'Gym',
            cost:70,
        },
        {
            id:126,
            name:'Smoking',
            cost:70,
        }
    ]
}

export const AppContext=createContext()

export const AppProvider = (props)=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)
    return(<AppContext.Provider value={{
        budget:state.budget,
        expenses:state.expenses,
        dispatch,
    }}
    >
        {props.children}
    </AppContext.Provider>)
}

