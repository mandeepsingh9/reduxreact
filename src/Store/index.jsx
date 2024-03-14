
import { createStore } from "redux";

   
let Initialvalue={
    count:0,

}
  function reducer(store=Initialvalue,action)
  {
      console.log(store);
      let newstore=store;
       
         if(action.type==="Increment")
         {
              newstore={count:store.count+1}   
         }
         else if(action.type==="Decrement")
         {
            newstore={count:store.count-1}
         }
         else if(action.type==="Add")
         {
            newstore={count:store.count+Number(action.payload.nisha)}
         }
      return newstore;
  }
 
 const store=createStore(reducer);


 export default store;