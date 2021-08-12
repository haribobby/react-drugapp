import { ActionTypes } from "../constants/action-types";

//intial state
const drugs = [
  {
    id: 'd1',
    title: 'Crocin',
    amount: 14.12,
    isPopular: true,
    desc: 'Crocin Advance is the best medicine for Joint, knee, muscles and other pains which provide fast and effective relief. It is suitable for adults as well as',
  },
  {
    id: 'd2',
    title: 'Zincovit',
    amount: 4.12,
    isPopular: false,
    desc: 'It is a nutritional supplement that restores the amount of vitamins and minerals in your body and helps to improve your overall health.',
  }
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