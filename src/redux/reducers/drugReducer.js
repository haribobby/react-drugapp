import { ActionTypes } from "../constants/action-types";

//intial state
const drugs = [
  
]

export const drugReducer = (state = drugs, { type, payload }) => {

  // console.log("in reducer.... {}"+ JSON.stringify(payload));

  switch (type) {
    case ActionTypes.ADD_DRUG:
     
      return [...state, payload];
    // case ActionTypes.FETCH_DRUG:
    //     return state;
    
    default:
      return state;
  }
}