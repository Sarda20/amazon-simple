import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeauth = () => {
    initializeApp(firebaseConfig);
}

export default initializeauth;