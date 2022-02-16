import React, { useState } from "react";
import Navbar from "../containers/Navbar";
import "./Tasks.css";
import TaskTab from "../components/TaskTab";
import NewTodoButton from "../components/NewTodoButton";
import NewTodo from "../components/NewTodo";
import Calendar from "react-calendar";

import { useSelector, useDispatch } from "react-redux";
import { setToggle, setTodoList } from "../redux/slice";

import taskList from '../data/data';
import TopBar from "../components/TopBar";
const Tasks = () => {
  const [showNewTask, setShowNewTask] = useState(false);
  const [showCalender, setShowCalender] = useState(false);

  const todolist = useSelector((state) => state.counter.todolist);

  const count = useSelector((state) => state.counter.value);

  const toggle = useSelector((state) => state.counter.toggle);

  const dispatch = useDispatch();

  return (
    <div className="tasks__container align__main">
      <TopBar />
      
      {/* {console.log(todolist)} */}
      {todolist
        .slice(0)
        .reverse()
        .map((i) => (
          <div>
            <TaskTab
              id={i["payload"]["id"]}
              status={"not_done"}
              time={"8:00"}
              task={i["payload"]["todo"]}
              priority={"low"}
            />
          </div>
        ))}

      {taskList.map((i) => (
        <TaskTab
          id={i.id}
          status={i.status}
          time={i.time}
          task={i.task}
          priority={i.priority}
        />
      ))}

      {/* {todolist.length == 0 ? <p className="">Create a Todo</p> : <p> " "</p>}
      {console.log(todolist.length)} */}

      {/* <TaskTab
        status={"done"}
        time={"8:00"}
        task={"Go to Work"}
        priority={"high"}
      />
      <TaskTab
        status={"not_done"}
        time={"6:00"}
        task={"wash Plates"}
        priority={"low"}
      /> */}

      {toggle && (
        <div className="tasks__container-newtodo">
          <NewTodo />
        </div>
      )}

      <div
        className="tasks__container-newtodobutton"
        onClick={(e) => dispatch(setToggle())}
      >
        <NewTodoButton />
      </div>

      {showCalender && (
        <div className="tasks__container-newtodo">
          <Calendar />{" "}
        </div>
      )}

      <Navbar />
    </div>
  );
};

export default Tasks;
