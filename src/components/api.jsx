import React, { useState,useEffect } from 'react'

const Api = () => {

    const [users,setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((Response) => Response.json())
        .then((json) => setUsers(json));

    },[]);
console.log (users);

  return <div>

    {users.map((i) => ( <div>{i?.name}</div> ))}
  </div>
}


export default Api;