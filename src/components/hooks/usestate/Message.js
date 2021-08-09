import React, { useState, useEffect } from 'react'

function Message() {
    //console.log("Loggin......");
    const [username, setUsername] = useState("John");
    const [user, setUser] = useState({ name: "John", age: 15 });




    const [count, setCount] = useState(0);

    const [data, setData] = useState([]);
    const [todos, setTodos] = useState([]);

    // console.log(user);


    //    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => setData(data));   

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then((data) => {

            console.log("useeffect call.....")
            setData(data);

        });
    }, [user, count])

    //    useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(data => setTodos(data));   
    //  })

    return (
        <div>

            <br />
            User prop:  {username}
            <br />
            <br />
            User Obj name :  {user.name}
            <br />
            User Obj age :  {user.age}
            <br />


            <h1>Message Notifications</h1>
            <p>You have received {count} new messages</p>

            <br />

            <button onClick={() => setUsername('Jack')}> UpdateUserName</button>


            <button onClick={() => setUser({ ...user, age: 30 })}> UpdateUser</button>

            <br />
            <button onClick={() => setCount(count + 1)}>Send Message</button>

            <h1>Users</h1>
            <br />
            <div>{data.map((user) => <p key={user.name}>{user.name}</p>)}</div>
            <br />
            {/* <h1>Todos</h1>
            <br/>
			<div>{todos.map((todo) => <p key={todo.title}>{todo.title}</p>)}</div>
            <br/> */}

            {/* <button onClick={() => setUsername('Jack')}> UpdateUserName</button>

    
            <button onClick={() => setUser({...user, age: 30 })}> UpdateUser</button>

            <br/>
            <button onClick={() => setCount(count + 1)}>Send Message</button> */}

        </div>
    )
}

export default Message