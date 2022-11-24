import React, { useEffect, useState } from "react";
import {FullName} from "./App"

function CompC(){
  const [name ,setName]=useState("Avesh");

    return (
        <FullName.Consumer>
         { (ctx) =>{
              return (<>
                      <h2>You can call me {ctx.fname} {ctx.lname}</h2>
                      <h2 onClick={()=>setName((prevState)=>prevState +="!")} onDoubleClick={()=>setName((prevState)=>prevState ="Avesh")}>{name}</h2></>
              ); 
         }}
        </FullName.Consumer>
    )
}
export default CompC;