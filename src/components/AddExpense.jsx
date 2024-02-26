import React,{useState,useContext} from 'react'
import { AppContext } from '../context/AppContext'
import {v4 as uuidv4} from 'uuid'
import { type } from '@testing-library/user-event/dist/type'

function AddExpense() {
    const {dispatch} = useContext(AppContext)
    const [name,setName]=useState('')
    const [cost,setCost]=useState('')

    const handleSubmit=(event)=>{
        event.preventDefault()
        const expense = {
            id:uuidv4(),
            name:name,
            cost:parseInt(cost)
        }
        dispatch({
            type:'ADD_EXPENSE',
            payload:expense,
        }

        )
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor='name'className="form-label">Name</label>
    <input required='required' type="text" className="form-control" id='name' value={name} onChange={(event)=>{setName(event.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor='cost' className="form-label">Cost</label>
    <input type="text" className="form-control" id='cost' value={cost} onChange={(e)=>{setCost(e.target.value)}}/>
  </div>
  <div className='text-center'>
  <button type="submit" className="btn btn-primary">Save</button>
  </div>
</form>
</>
  )
}

export default AddExpense
