import React from 'react'
import {TiDelete} from 'react-icons/ti'

const ExpenseItem = (props)=> {
  return (
    <div>
    <li className='list-group-item d-flex justify-content-between align-content-center'>
        {props.name}
        <div className='text-center'>
          <span className='badge text-bg-primary rounded-pill'>${props.cost}</span>
        </div>
        
        <div>
            <TiDelete size='1.5em'/>
        </div>
    </li>
    </div>
  )
}

export default ExpenseItem
