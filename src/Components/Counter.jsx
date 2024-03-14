import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {

     let counter=useSelector((state)=>(state.count))
  return (
    <h2>Count:{counter}</h2>
  )
}

export default Counter