import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  toggle: false,
  todolist: [],
  currentDate: "",
  showCalender: false,
  priority: false,
  status: false,
  showTodoSpace: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setShowTodoSpace: (state) => {
      state.showTodoSpace = !state.showTodoSpace;
    },

    todoUpdate: (state, action) => {
      // console.log(state.todolist);
      const newTodos = state.todolist.filter((todolist) =>
        console.log(todolist)
      );
    },

    setPriority: (state) => {
      state.priority = !state.priority;
    },
    setStatus: (state, action) => {
      state.status = !state.status;
    },

    setCurrentDate: (state, action) => {
      state.currentDate = action;
    },

    setShowCalender: (state) => {
      state.showCalender = !state.showCalender;
    },

    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
    setTodoList: (state, action) => {
      state.todolist = [...state.todolist, action];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setShowCalender,
  setCurrentDate,
  incrementByAmount,
  setToggle,
  setTodoList,
  setPriority,
  setStatus,
  todoUpdate,
  setShowTodoSpace,
  
} = counterSlice.actions;

export default counterSlice.reducer;
