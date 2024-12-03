import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  courses: [],
  details: {},
  Enquiries: []
}
const url = "http://localhost:6700/course";
// Get all the posts from the API
export const getCourses = createAsyncThunk('course/getCourses', async (thunkAPI) => {
  try {
    const res = await axios.get(url)
    return res.data
  } catch (err) {
    return thunkAPI.rejectWithValue({ error: err.message })
  }
})
//get course details by id
export const getCourseDetails = createAsyncThunk('course/getCourseDetails', async (id, thunkAPI) => {
  try {
    const res = await axios.get(`${url}/${id}`)
    return res.data
  } catch (err) {
    return thunkAPI.rejectWithValue({ error: err.message })
  }
})

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(getCourses.fulfilled, (state, action) => {
      state.courses = state.courses.concat(action.payload)
    })
      .addCase(getCourseDetails.fulfilled, (state, action) => {
        state.details = action.payload;
      })
      
  }

});
export default courseSlice.reducer;

