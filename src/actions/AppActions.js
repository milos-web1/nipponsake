import * as types from '../utils/ActionTypes';

const Actions = {
updateCurrentBreweryId(val){
  return {
    type: types.SET_CURRENT_BREWERY_ID,
    val
  };
},
}
export default Actions;
