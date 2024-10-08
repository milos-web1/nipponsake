import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";

import rootReducer from "./reducers";
import fbConfig from "./FBConfig";

const initialState = {};

const middleware = [thunk.withExtraArgument({ getFirebase, getFirestore })];

export default () => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      reduxFirestore(fbConfig)
    )
  );
};
