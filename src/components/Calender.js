import { useState } from "react";
import Calendar from "react-calendar";
// import './App.css';
// import '../react-calendar/dist/Calendar.css';
import "./Calender.css";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentDate, setShowCalender, setToggle } from "../redux/slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Calender() {
  const [date, setDate] = useState(new Date());

  const currentDate = useSelector((state) => state.counter.currentDate);
  const showCalender = useSelector((state) => state.counter.showCalender);
  const toggle = useSelector((state) => state.counter.toggle);

  const dispatch = useDispatch();


  return (
    <div className="calender__container ">
      <ToastContainer />

      <h1 className="text-center">Select Date</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date: {date.toDateString()}</span>{" "}
        {/* {console.log(date.toDateString())} */}
      </p>

      <button
        onClick={() => {
          dispatch(setCurrentDate(date.toDateString()));
          // dispatch(setShowCalender());
          dispatch(setShowCalender());
          // dispatch(setToggle());

        }}
      >
        save
      </button>
    </div>
  );
}

export default Calender;
