import { configureStore } from '@reduxjs/toolkit';
import testSlice, { slice1, slice2 } from './createSlice';

export const store = configureStore({
    reducer : {counter : slice1, counter2: slice2}
})