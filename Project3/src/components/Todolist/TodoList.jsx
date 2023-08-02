import "./todolist.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function TodoList({ todo, index , onDelete}) {
  const [StatusChanges, setStatusChanges] = useState("pending");
  let changes = () => {
    if (StatusChanges === "pending") {
      setStatusChanges("Complete");
      toast("Congratulations ");
    } else {
      setStatusChanges("pending");
      toast("Hurry Up");
    }
  };
  
  return (
    <>
      <div className="item">
        <div className="list">
          <span className="index">{index+1}.</span>

          <span>{todo}</span>
        </div>
        <div className="status_button">
          <h4>
            Status:<span className="status"> {StatusChanges}</span>
          </h4>
          <div className="update_btn">
            <button onClick={changes}>Update Status</button>
            <button onClick ={() => onDelete(index)}>Remove</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
