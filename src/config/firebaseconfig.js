import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCs8sfqDtN9VO7JQ5EPLtzfu-O9mS20zBg",
  authDomain: "app-projeto-4e430.firebaseapp.com",
  projectId: "app-projeto-4e430",
  storageBucket: "app-projeto-4e430.appspot.com",
  messagingSenderId: "718562037479",
  appId: "1:718562037479:web:2f7f0c707074ce8b851c42"
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;