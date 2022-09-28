import { createSlice } from '@reduxjs/toolkit';


const choresSlice = createSlice({
  name: "chores",
  initialState: {
    taskList: [],

  },
  reducers: {
    createTask(state, action) {}
  },
  extraReducers(builder) {
    
  },
})