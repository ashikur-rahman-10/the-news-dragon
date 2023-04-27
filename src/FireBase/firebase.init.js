// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCn-SkOLcE_4JaNZe-5WxRu25b-RLfuThI",
    authDomain: "the-news-dragon-be278.firebaseapp.com",
    projectId: "the-news-dragon-be278",
    storageBucket: "the-news-dragon-be278.appspot.com",
    messagingSenderId: "239053030846",
    appId: "1:239053030846:web:eb8f52a4a124aaad8825ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;