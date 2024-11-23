import { useState } from "react";

function App() {
  const [addedTask,setAddedTask]=useState("")
  const [task,setTAsk]=useState([])

 
    const handleClick=(()=>{
     console.log(addedTask)
     setTAsk([...task, addedTask]);
      setAddedTask("")
    })
    const handleDelete = (indexToDelete) => {
      setTAsk(task.filter((_, index) => index !== indexToDelete)); // Remove task by index
    };
   
  
  return (
    <div className="App">
      <h1 className="flex justify-center text-6xl mt-10">To Do App</h1>
      <div className="flex justify-center m-10">
        <input 
        value={addedTask}
        onChange={(e)=>setAddedTask(e.target.value)}
        className="border-blue-900 w-96 bg-black text-white rounded-xl pl-4 "
         type="text"
          placeholder="Enter task you want to add" >

         </input>
        <button onClick={()=>handleClick()} className="bg-blue-500 texxt-white rounded-xl p-5 ml-4">Add Task</button>
      </div>
      {task.length > 0 && <>
      <div className="bg-gray-300 m-20 p-10 rounded-lg">
        <ul className="text-2xl">
          {task.map((tas,index)=>(<li key={index}>{tas} 
            <button onClick={() => handleDelete(index)}
              className= "m-4 bg-black text-white p-2 rounded-lg text-sm">Delete</button>
            </li> 
            ))}
          
        </ul>
      </div>
      </>}
      
    </div>
  );
}

export default App;
