import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBEQlbRY5umQn5a00wQmlgqDGSNhTm6twI",
  authDomain: "class-60-hw-fb2a3.firebaseapp.com",
  databaseURL: "https://class-60-hw-fb2a3-default-rtdb.firebaseio.com",
  projectId: "class-60-hw-fb2a3",
  storageBucket: "class-60-hw-fb2a3.appspot.com",
  messagingSenderId: "163576092053",
  appId: "1:163576092053:web:55fb6c1f3b47fc40ecd29c"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default  firebase.database()