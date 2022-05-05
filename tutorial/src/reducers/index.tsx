import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction('increment')
export const decrement = createAction<number>('decrement')

const initialState = {value:0}

export const counterReducer = createReducer(initialState, (builder)=>{
  builder.addCase(increment, (state, action)=>{
    state.value ++
  })

  builder.addCase(decrement, (state, action)=>{
    state.value -= action.payload
  })
})


export const push = createAction<number>('push');
export const pop = createAction('pop');

const arrayState = {value: [] as number[]}

export const arrayReducer = createReducer(arrayState, (builder)=>{
  builder.addCase(push, (state, action) =>{
   state.value.push(action.payload)
  })
})