import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';

const Input = () => {

      const inputdata=useRef();
       let dispatch=useDispatch();
      function handleAdd()
      {
         let data=inputdata.current.value;
         dispatch({type:"Add",
            payload:{
                nisha:data
            }
        })
          
      }
  return (
     
        
    <div>
        <input type='number' ref={inputdata}/>
        <span><button onClick={handleAdd}>Add</button></span>
    </div>
  )
}

export default Input