import { useContext } from "react";
import { Usercontext } from "../App";
import { v4 as uuidv4 } from 'uuid';
function BUDGET(){
    const{state,dispatch}=useContext(Usercontext)

  const handaleInput=(e)=>{
dispatch({type:"nameInput",
        payload:e.target.value});
  }

const handaleNumberInput=(e)=>{
    dispatch({
        type:"numberInput",
        payload:e.target.value
    })
}
  const  addexpencive=()=>{
    dispatch({
        type:"addexpense",
        payload:{name:state.name,amount:state.amount,id:uuidv4}
    })
  }

  const deleteBtn=(id)=>{
    dispatch({
        type:"deleteExpenciv",
        payload:id
    })
  }

    return (
        <>
        <h1>My Budget Planner</h1>
        <div style={{display:"flex",gap:"20px"}}>
        
        <div>
           
           <h2>Budget:Rs{state.budget}</h2>
        </div>
        <div>
           
           <h2>Remaining:Rs{state.remaining}</h2>
        </div>
        <div>
           
           <h2>spent:Rs{state.spent}</h2>
        </div>
        </div>
        <div>
            <h2>Add Expenses</h2>
            <input type="text" placeholder="Name" onChange={(e)=>handaleInput(e)}/>    
            <input type="number" placeholder="Cost" onChange={(e)=>handaleNumberInput(e)} />
            <button onClick={addexpencive}>ADD</button>
            {
                state.expencivarray.map((iteam,id)=>(
                    <>
                    <h1>{iteam.name}</h1>
                    <h1>{iteam.amount}</h1>
                    <button onClick={()=>deleteBtn(iteam.id)}>delete</button>
                    </>
                ))
            }
        </div>
        </>
    )
}
export default BUDGET;
