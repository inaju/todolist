import React, { useState } from "react";
import "./NewTodo.css";
import { IoMdList } from "react-icons/io";
import { BsCalendar2Event, BsFillMicFill } from "react-icons/bs";

import { useSelector, useDispatch } from "react-redux";
import { setToggle, setTodoList, setShowCalender,setShowTodoSpace } from "../redux/slice";
import Calender from "../components/Calender";
import { ToastContainer, toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";

const NewTodo = () => {
  const toggle = useSelector((state) => state.counter.toggle);
  const todolist = useSelector((state) => state.counter.todolist);
  const showCalender = useSelector((state) => state.counter.showCalender);
  const currentDate = useSelector((state) => state.counter.currentDate);
  const showTodoSpace= useSelector((state) => state.counter.showTodoSpace);

  const [error, setError] = useState("");
  const [input, setInput] = useState({
    id: 0,
    todo: "",
    date: "",
    priority: "low",
  });

  // const [showTodoSpace, setshowTodoSpace] = useState(false);

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
    // dispatch(setTodoList(input));

    console.log(input);
    console.log(input["date"])
    if (input["todo"] === '' || input["todo"].length===0) {
      emptyInput();
    } 

    if (input["date"] === "" || input["date"] === undefined) {
      emptyDate();
    }

    if (input["todo"] != "" && (input["date"] != undefined || input["date"] === "" )) {
      input["date"] = currentDate.payload;

      dispatch(setTodoList(input));
      // console.log(input["todo"])
      // console.log(input["date"])
      console.log("Saved");

      dispatch(setToggle());
      todoSuccessful();

    }
    
  };

  return (
    <div className="newtodo__container">
      <div className="newtodo__container-parent">
    
      <div className={showTodoSpace==true ? `newtodo__container-calender ` : `newtodo__container-calender show`}>
          <Calender />

        </div>
        
         <form  className={showTodoSpace==true ? `show` : ` `} action="">
            <ToastContainer hideProgressBar/>
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
              }}
            />
            <p className="newtodo__container-selected_date">
              {currentDate['payload']}
            </p>

            <div className="newtodo__container-parent_bottom">
              <div className="newtodo__container-parent_icons">
                <IoMdList size={23} />
                <BsCalendar2Event
                  size={23}
                  onClick={() => {
                    dispatch(setShowTodoSpace());
                    dispatch(setShowCalender());
                  }}
                />
                <BsFillMicFill size={23} />
              </div>

              <div className="newtodo__container-parent_save">
                <p
                  onClick={(e) => {
                    todoSaveFunc(e);
                  }}
                >
                  Save
                </p>
                {/* {console.log(todolist)} */}
              </div>
            </div>
          </form>

        {/* {!showTodoSpace && (
         
        )} */}
      </div>
    </div>
  );
};

export default NewTodo;
