//set const value of string to avoid typo errors

export const ADD_TO_CAR = "ADD_TO_CAR"

export function addToCar(item){
 return {
  type: ADD_TO_CAR,
  payload: item
 }
}