import { ActionTypes } from "../contants/action-types";

const intialState = {
  tasks:[],
}

export const taskReducer = (state=intialState ,{type, payload}) =>{
  switch(type){
    case ActionTypes.Add_TODO:
      return {...state,products:payload};
    default:
      return state;
  }   
}