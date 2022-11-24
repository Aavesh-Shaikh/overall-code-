import React, { useRef, useState } from "react";
import CompC from "./CompC"


function CompB(){
    const [name ,setName]=useState("");
    let nameInput = useRef();
    const reader = new FileReader();

// CONVERTS Image TO BASE 64
reader.readAsDataURL(name);
    return (
       <>
       <CompC/>
       <input type="file" ref={nameInput} onChange={()=>setName(nameInput.current.files[0])}></input>
       <img src={reader?.result}></img>
       </>
    )

}
export default CompB;