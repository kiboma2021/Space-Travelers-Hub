import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRocketData } from '../../services/api.service';


export const getRockets = createAsyncThunk('job/getRockets', getRocketData)

const initialState ={
  rockets:[],
  isLoading:true,
}
export const rocketSlice = createSlice({
  name:'rockets',
  initialState,
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.isLoading = true;// eslint-disable-line
    },
    [getRockets.fulfilled]: (state, action) => {
      state.isLoading = false;// eslint-disable-line
      const item = action.payload;
      state.rockets = item; // eslint-disable-line
    },
    [getRockets.rejected]: (state) => {
      state.isLoading = false;// eslint-disable-line
    },
  }
})
export default rocketSlice.reducer;

