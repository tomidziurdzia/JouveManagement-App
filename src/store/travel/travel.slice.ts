import {createSlice} from '@reduxjs/toolkit';
import {ErrorInterface, TravelInterface} from '../../interface';

interface TravelState {
  travels: TravelInterface[];
  travel: TravelInterface | null;
  errorMessage: ErrorInterface | undefined;
  total: number;
}

const initialState: TravelState = {
  travels: [],
  travel: null,
  errorMessage: undefined,
  total: 0,
};

export const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    onGetTravel: (state, {payload}) => {
      state.travel = payload;
      state.errorMessage = undefined;
    },
    onGetTravels: (state, {payload}) => {
      state.travels = payload.travels;
      state.errorMessage = undefined;
      state.total = payload.total;
    },
    onErrorMessageTravel: (state, {payload}) => {
      state.errorMessage = payload;
    },
    clearErrorMessageTravel: state => {
      state.errorMessage = undefined;
    },
  },
});

export const {
  onGetTravel,
  onGetTravels,
  onErrorMessageTravel,
  clearErrorMessageTravel,
} = travelSlice.actions;
