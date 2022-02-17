import React, {useState} from "react";
import "./TaskTab.css";
import {
  AiOutlineClockCircle,
  AiOutlineCheck,
  AiOutlineStar,
} from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {  todoUpdate, setPriority } from "../redux/slice";

function TaskTab({ time, task, id, priority }) {
  // const priority = useSelector((state) => state.counter.priority);
  // const status = useSelector((state) => state.counter.status);
  const todolist = useSelector((state) => state.counter.todolist);
const [status,setStatus] = useState(false)
  const dispatch = useDispatch();

  const checkStatus = (status) => {
    if (status == true) {
      return "done";
    } else {
      return "not_done";
    }
  };

  return (
    <div className={`tasktab__container ${checkStatus(status)}`}>
      <div className="tasktab__container-task">
        <div
          className="tasktab__container-task_icon"
          onClick={() => {
            // dispatch(setStatus());
            setStatus(!status)
            console.log(status)
            // dispatch(todoUpdate(id));
          }}
        >

          {checkStatus(status) == "done" ? (
            <AiOutlineCheck size={30} color="#1167B1" />
          ) : (
            <AiOutlineClockCircle size={30} color="#272A3B" />
          )}
        </div>


        <div className="tasktab__container-task_item">
          <p>
            <b>{task}</b>
          </p>
          <p>{time}</p>
        </div>
        
      </div>









      <div
        className="tasktab__container-task_priority"
        onClick={() => {
          dispatch(setPriority());
        }}
      >
        
        {priority == "high" ? (
          <AiOutlineStar size={30} color="#1167B1" />
        ) : (
          <AiOutlineStar size={30} color="#121212" />
        )}
      </div>
    </div>
  );
}

export default TaskTab;
