import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcLNINQTXHxXq01jYEpVLZdK_7b-hmLnE",
    authDomain: "movie-app-1-ee6fb.firebaseapp.com",
    projectId: "movie-app-1-ee6fb",
    storageBucket: "movie-app-1-ee6fb.appspot.com",
    messagingSenderId: "347173817405",
    appId: "1:347173817405:web:cc2ff87ca12397bd306e54"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);