import { combineReducers } from "redux"
import {taskReducer} from "./reducers"

const reducers = combineReducers({
  addTask:taskReducer,
})

export default reducers