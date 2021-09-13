import firebase from 'firebase';

const firebaseConfig = {
   apiKey: "AIzaSyCPqZeanQ9lkKqpZTfUJDEFrvuxjqV2008",
  authDomain: "development-f2d5b.firebaseapp.com",
  projectId: "development-f2d5b",
  storageBucket: "development-f2d5b.appspot.com",
  messagingSenderId: "340395580675",
  appId: "1:340395580675:web:632fd8ad2d861457a61d36"
};

// Initialize Firebase
const Fire = firebase.initializeApp(firebaseConfig);


export default Fire;