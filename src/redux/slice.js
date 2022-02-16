import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  toggle: false,
  todolist: [],
  currentDate: "",
  showCalender: false,
  priority:false,
  status:false,
};



export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {

    // todoUpdate: (state, action) => {
    //   console.log(state.todolist)
    //   console.log(action.payload)

    //   // Construct a new array immutably
    //   // const newTodos = state.todolist.filter(todolist => todolist.id !== action)
    //   // console.log(newTodos)
    //   // "Mutate" the existing state to save the new array
    //   // state.todolist = newTodos
    // },

    todoUpdate: (state, action) => {
      console.log(state.todolist);
      const newTodos = state.todolist.filter(todolist => console.log(todolist))
      // state.todolist = [...state.todolist, action];
      console.log(newTodos)
    },


    setPriority: (state) => {
      state.priority = !state.priority;
    },
    setStatus: (state, action) => {
      state.status = !state.status;
    },


    setCurrentDate: (state, action) => {
      state.currentDate = action;
      console.log(state.currentDate);
    },

    setShowCalender: (state) => {
      state.showCalender = !state.showCalender;
    },

    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
    setTodoList: (state, action) => {
      console.log(action);
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
} = counterSlice.actions;

export default counterSlice.reducer;
