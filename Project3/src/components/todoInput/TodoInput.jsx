import TodoList from "../Todolist/TodoList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import "./todoinput.css";
function TodoInput() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const changeData = (e) => {
    setInput(e.target.value);
  };

  const change = () => { 

    if (input === "") {
        toast("Please Add Todo ");
       
        
    }else{
   setData([...data, input ]);
    setInput("");
    toast("Your Todo is Add");
    }
  };
  
  const handleDelete = (index) => {
      console.log(index)

    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    toast(`${[...data]} Todo is Remove`);

  };
  return (
    <>
      <div className="Box">
        <form action="">
          <input
            type="text"
            required
            placeholder="Enter Your Todo"
            value={input}
            onChange={(e) => changeData(e)}
          />
          <button onClick={change} >Add</button>
         
        </form>
      </div>
      <ToastContainer />
      <div className="todolist">
        {data.map((data,index) => (
          <TodoList  index = {index} todo={data} onDelete={handleDelete} />
          
        ))}
      </div>
    </>
  );
}
export default TodoInput;
