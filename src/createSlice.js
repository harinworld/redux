import { createSlice } from "@reduxjs/toolkit";

const initialState = {count:0};

const testSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        // 어떤 일을 처리할 것인가?
        increment(state,action){state.count += action.payload},
        decrement(state,action){state.count -= action.payload}
    }
});


const initialState2 = {count:0};

const testSlice2 = createSlice({
    name:'counter2',
    initialState : initialState2,
    reducers:{
        // 어떤 일을 처리할 것인가?
        increment2(state,action){state.count += action.payload},
        decrement2(state,action){state.count -= action.payload}
    }
});


const {increment, decrement} = testSlice.actions;
const {increment2, decrement2} = testSlice.actions;
const slice1 = testSlice.reducer;
const slice2 = testSlice2.reducer;
export {increment, decrement, increment2, decrement2, slice1, slice2}