import React, { createContext } from 'react';

import './App.css';
import CompA from "./CompA"
import CompB from "./CompB"
import CompC from "./CompC"

const FullName = createContext();
const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
<FullName.Provider value={{fname:"Avesh",lname:"Shaikh"}}>

    {/* <FirstName.Provider value={"Aavesh"}> */}
    {/* <LastName.Provider value={"Shaikh"}> */}
    <CompA/>
    <CompB/>
    <CompC/>
    {/* </LastName.Provider> */}
   {/* </FirstName.Provider> */}
  
</FullName.Provider>
  );
}

export default App;
export { FirstName , LastName ,FullName};