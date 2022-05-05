import { configureStore } from '@reduxjs/toolkit'
import { arrayReducer, counterReducer } from './reducers';

export default configureStore({
  reducer: { 
    counter: counterReducer,
    arrayState: arrayReducer
   },
})