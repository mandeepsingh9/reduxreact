import React from 'react'
import { useDispatch } from 'react-redux'

const Buttons = () => {

        let dispatch= useDispatch()
     function handleIncrement()
     {
          dispatch({type:"Increment"})
     }
     function handleDecrement()
     {
           dispatch({type:"Decrement"})
     }
  return (
    <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Buttons