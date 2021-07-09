import { ActionTypes } from "../contants/action-types";

export const addTodo = (task) =>{
  return{
    type:ActionTypes.Add_TODO,
    payload:task
  }
}

export const deleteTodo = (task) =>{
  return{
    type:ActionTypes.DLETE_TODO,
    payload:task
  }
}