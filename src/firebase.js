import firebase from "firebase";
import fbConfig from "./FBConfig";

firebase.initializeApp(fbConfig);
firebase.analytics();
export default firebase;
