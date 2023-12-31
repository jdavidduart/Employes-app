import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../../../utils/DummyData/data";

const initialState = {
  employees: dummyData,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setTest: (state, action) => {
      state.test = action.payload.data;
    },
    addEmployed: (state, action) => {
      state.employees = [...state.employees, action.payload.data];
    },
  },
});

export const { setTest, addEmployed } = employeesSlice.actions;
export const exampleReducer = employeesSlice.reducer;
