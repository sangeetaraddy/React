import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  Enquiries: []
}
const enquiriesurl = "http://localhost:6700/enquiries";
// Get all the posts from the API
export const getEnquiries = createAsyncThunk('enquiries/getEnquiries', async (thunkAPI) => {
  try {
    const res = await axios.get(enquiriesurl)
    return res.data
  } catch (err) {
    return thunkAPI.rejectWithValue({ error: err.message })
  }
})
export const addEnquire = createAsyncThunk(
  // The name of the action
  'enquiries/addEnquire',
  // The payload creator
  async (initialPost, thunkAPI) => {
    try {
      const res = await axios.post(enquiriesurl, initialPost)
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message })
    }
  }
)
export const enquiriesSlice = createSlice({
  name: "enquiries",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(getEnquiries.fulfilled, (state, action) => {
      state.Enquiries = state.Enquiries.concat(action.payload)
    })
      .addCase(addEnquire.fulfilled, (state, action) => {
        state.Enquiries.push(action.payload)
      })
  }

});
export default enquiriesSlice.reducer;

