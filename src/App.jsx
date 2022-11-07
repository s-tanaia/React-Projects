
import { useEffect, useState } from 'react';
import React from 'react';
import "./App.css"

 

function App() {
    let [list, setList] = useState([]); 
    let [newTask, setNewTask] = useState([""])

    useEffect(() =>{
        setList([])
    }, []);

    
    return (
        <div className='container' >
            <h1 id="title">To do list</h1>
            <input type="text" value={newTask} onChange={value => setNewTask(value.target.value)} placeholder="Type your task here"></input>
            <button id="add" onClick={() => addTask()}>Add</button>
            <ol>
                {list.map((item, index) => (
            <li>
                {item}
                <button id="dlt" onClick={() => deleteTask(index)}>Delete</button>         
            </li>
            ))}
            </ol>            
        </div>
        
    );
    
    function addTask(){
        setList([...list, newTask]);
        setNewTask("");
    }
    
    function deleteTask(index){

    let tasKArray = [...list];
    tasKArray.splice(index, 1);

    setList(tasKArray);
  
}
}
    export default App;
 

