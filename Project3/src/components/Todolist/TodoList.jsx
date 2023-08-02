import "./todolist.css";
import { useState } from "react";


function TodoList({ todo }) {
  const [StatusChanges, setStatusChanges] = useState("pending");
  let changes = () => {
  if (StatusChanges === "pending") {
    setStatusChanges("Complete");
    
  }else{
    setStatusChanges("pending");
  }
  
  };
  return (
    <>
      <div className="item">
        <div className="list">{todo}</div>
        <div className="status_button">
          <h4>
            Status:<span className="status">   {StatusChanges}</span>
          </h4>
          <div className="update_btn">
            <button onClick={changes}>Update Status</button>
            <button>Remove</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
