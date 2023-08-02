import TodoList from "../Todolist/TodoList"
import { useState } from "react";
import "./todoinput.css"
function TodoInput() {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const changeData = (e) => {
        setInput(e.target.value);
      };
      
      const change = () => {
        setData([...data, input]);
        setInput("");
      };
    return(
        
    <>
    <div className="Box">
        <input type="text" placeholder="Enter Your Todo" value={input} onChange={(e) => changeData(e)}/>
        <button onClick={change}>Add</button>
    </div>
    <div className="todolist">
    {data.map((data) => (
        <TodoList key={Math.random()} todo={data}/>
      ))}
    </div>
    
    
    </>
    )
}
export default TodoInput
