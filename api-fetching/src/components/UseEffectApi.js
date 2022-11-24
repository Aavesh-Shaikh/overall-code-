import React, { useEffect, useState } from "react";
import "./UseEffectApi.css"

const UseEffectApi = () => {

    const [users,setUsers] = useState([]);
    const getUsers = async() =>{
        const response = await fetch("https://api.github.com/users");
        setUsers(await response.json());

      
    }

    useEffect( () =>{
        getUsers();
    },[])

    return (
        <>
        <h2>List of Github Users </h2>
        
        {users.map((user,index) =>
        <Card key={index} login={user.login}  followers_url={user.followers_url} gravatar_id={user.gravatar_id} avatar_url={user.avatar_url} />        
        
        )}
        <button onClick={ () => {
                    console.log(users)
                }}>Click me</button>
        </>
    )
}
const Card = (props) => {

    return (
        <>
            <div className="card">
                <h2>{props.login}</h2>
                <a href={props.followers_url}></a>
                <h3>{props.gravatar_id}</h3>
                <img className="image" src={props.avatar_url}></img>
            </div>
        </>
    )
}

export default UseEffectApi;


