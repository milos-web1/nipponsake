import { combineReducers } from "redux";
import AppReducer from "./AppReducer";
import dataReducer from "./dataReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const app = combineReducers({
  AppReducer,
  data: dataReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default app;
