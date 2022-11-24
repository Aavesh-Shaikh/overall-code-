import React, { useContext } from "react";

import {FullName} from "./App";


function CompA(){
  let ctx = useContext(FullName)
     return  (
     <h1>Hello My Name is  {ctx.fname} {ctx.lname}</h1>
     )
    

}
export default CompA;