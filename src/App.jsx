import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BUDGET from './components/budget'
import { createContext } from 'react'
import { useReducer } from 'react'

export const Usercontext=createContext();

const  initialstate={
  name:" ",
  amount:0,
  expencivarray:[],
  spent:0,
  budget:2000,
  remaining:2000,
}

const reducer=(state,action)=>{
  switch(action.type){
    case "nameInput":
      return{...state , name:action.payload};
      
      case "numberInput":
        return{...state,amount:action.payload};

        case "addexpense":
          return{...state,
            spent:state.spent + Number(action.payload.amount),
            remaining:state.remaining - action.payload.amount,
            expencivarray:[...state.expencivarray,action.payload]
          }

          case "deleteExpenciv":
            const ExpencivArr=state.expencivarray.filter((iteam)=>iteam.id==action.payload);

            const DeletedAmount=Number(ExpencivArr[0].amount);
  
  return{...state, 
              expencivarray:state.expencivarray.filter((iteam)=>iteam.id != action.payload),
             spent:state.spent-DeletedAmount,
             remaining:state.remaining+Number(DeletedAmount), 
  };

  default:
    return state
};
}

function App() {
  
  const [state, dispatch]=useReducer(reducer, initialstate)

  return (
    <>
    <Usercontext.Provider value={{state,dispatch}}>
      <BUDGET/>
    </Usercontext.Provider>
     
    </>
  )
}

export default App
