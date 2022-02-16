import React, { useState } from "react";
import "./NewTodo.css";
import { IoMdList } from "react-icons/io";
import { BsCalendar2Event, BsFillMicFill } from "react-icons/bs";

import { useSelector, useDispatch } from "react-redux";
import { setToggle, setTodoList, setShowCalender } from "../redux/slice";
import Calender from "../components/Calender";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewTodo = () => {
  const toggle = useSelector((state) => state.counter.toggle);
  const todolist = useSelector((state) => state.counter.todolist);
  const showCalender = useSelector((state) => state.counter.showCalender);
  const currentDate = useSelector((state) => state.counter.currentDate);

  const [error, setError] = useState("");
  const [input, setInput] = useState({
    id: 0,
    todo: "",
    date: "",
    priority: "low",
  });

  
  console.log(showCalender);
  // const [showCalender, setShowCalender] = useState(false);
  const [showTodoSpace, setshowTodoSpace] = useState(false);

  const dispatch = useDispatch();

  const saveTodo = (ev) => {
    setInput({
      ...input,
      id: Math.random().toString(16).slice(2),
      date: currentDate,
      todo: ev.target.value,
    });
  };

  const emptyInput = () => toast("Please Enter A Todo");

  const emptyDate = () => toast("Please Select a Date");

  const todoSuccessful = () => toast("Todo Saved Successfully");

  const todoSaveFunc = (e) => {
    console.log(input,currentDate)
  
    if (input != "") {
      input["date"] = currentDate.payload;
      

      dispatch(setTodoList(input));
      
      console.log("Saved")
      
      dispatch(setToggle());
      todoSuccessful()


    } else if (input == "") {
      emptyInput();
    } else {
      emptyDate();
    }
  };

  return (
    <div className="newtodo__container">
      <div className="newtodo__container-parent">
        {showCalender && <Calender />}

        {!showTodoSpace && (
          <form action="">
            <ToastContainer />
            <input
              contenteditable="true"
              required
              name="newtodo"
              placeholder="New Task"
              onChange={(e) => {
                e.preventDefault();
                setInput({
                  id: Math.random().toString(16).slice(2),
                  date: currentDate,
                  todo: e.target.value,
                });
                console.log(input)
                // todoSaveFunc(e);
              }}
            />

            <div className="newtodo__container-parent_bottom">
              <div className="newtodo__container-parent_icons">
                <IoMdList size={23} />
                <BsCalendar2Event
                  size={23}
                  onClick={() => {
                    setshowTodoSpace(!showTodoSpace);
                    dispatch(setShowCalender());
                    // dispatch(setToggle());
                  }}
                />
                <BsFillMicFill size={23} />
              </div>

              <div className="newtodo__container-parent_save">
                <p
                  onClick={(e) => {
                    todoSaveFunc();
                  }}
                >
                  Save
                </p>
                {console.log(todolist)}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewTodo;
