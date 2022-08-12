import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCESal26jf8wGh79TnGOjfY0Xy0MrspZAY",
  authDomain: "auth-cd9c2.firebaseapp.com",
  projectId: "auth-cd9c2",
  storageBucket: "auth-cd9c2.appspot.com",
  messagingSenderId: "296364044486",
  appId: "1:296364044486:web:edc92332572e7c1f0c67c7",
  measurementId: "G-49DKSVZMPB",
};

export const app = initializeApp(firebaseConfig);