import React from "react";
import Navbar from "../containers/Navbar";
import TaskTab from "../components/TaskTab";
import TopBar from "../components/TopBar";
import "./Important.css"
const Important = () => {
  const taskList = [
    {
      id: 1,
      status: "not_done",
      time: "9:00am",
      task: "wash cloth",
      priority: "low",
    },

    {
      id: 2,
      status: "done",
      time: "9:00am",
      task: "Learn to Drive",
      priority: "high",
    },
    {
      id: 3,
      status: "done",
      time: "9:00am",
      task: "watch tutorial",
      priority: "high",
    },
  ];

  const importantTaskList = taskList.filter((i) => i.priority == "high");

  return (
    <div className="important__container align__main">
      <TopBar />
      {importantTaskList.map((i) => (
        <TaskTab
          id={i.id}
          status={i.status}
          time={i.time}
          task={i.task}
          priority={i.priority}
        />
      ))}
      <Navbar />
    </div>
  );
};

export default Important;
