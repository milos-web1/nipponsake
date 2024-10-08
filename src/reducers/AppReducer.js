// import { fromJS } from 'immutable';
import * as types from "../utils/ActionTypes";
// const initialState = fromJS({
//   currentBreweryId: null
// });

const initialState = {
  currentBreweryId: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_CURRENT_BREWERY_ID:
      return state.set("currentBreweryId", action.val);
    case types.SET_INITIAL_STATE:
      return (state = initialState);
    default:
      return state;
  }
}
