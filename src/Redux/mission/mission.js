import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMissionData } from "../../services/api.service";


export const getMission = createAsyncThunk('job/getMission', getMissionData)

const initialState ={
  mission:[],
  isLoading:true,
}
export const MissionSlice = createSlice({
  name:'rockets',
  initialState,
  extraReducers: {
    [getMission.pending]: (state) => {
      state.isLoading = true;// eslint-disable-line
    },
    [getMission.fulfilled]: (state, action) => {
      state.isLoading = false;// eslint-disable-line
      const item = action.payload;
      state.mission = item; // eslint-disable-line
    },
    [getMission.rejected]: (state) => {
      state.isLoading = false;// eslint-disable-line
    },
  }
})
export default MissionSlice.reducer;