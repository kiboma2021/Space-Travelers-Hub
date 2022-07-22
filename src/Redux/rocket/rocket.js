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
  reducers:{
      updateReserved: (state,action)=>{ 
        const rockets = state.map((roc) => {
          if (roc.id === action.payload) return { ...roc, reserved: true };
  
          return roc;
        });
        return rockets;
      },
      cancelReservation: (state, { payload }) => {
      const rockets = state.map((roc) => {
        if (roc.id === payload) return { ...roc, reserved: false };

        return roc;
      });
      return rockets;
    },
  },

  extraReducers: {
    [getRockets.fulfilled]: (state, { payload }) => payload,
  },
  
})
export const { updateReserved, cancelReservation }=rocketSlice.actions
export default rocketSlice.reducer;
