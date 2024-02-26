import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext'


function Budget() {
  const {budget} = useContext(AppContext)
  return (
    <>
    <div className='alert alert-secondary'>
        <span>Budget: {budget}$</span>

        <button type='button' className='btn btn-primary ml-500'>Edit</button>
    </div>
    </>
  )
}

export default Budget
