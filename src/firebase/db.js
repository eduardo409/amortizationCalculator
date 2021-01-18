import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAThy0SMJDPT-FtgW5YLSdN7EP2t64TNvA",
  authDomain: "amortization-calculator-266503.firebaseapp.com",
  projectId: "amortization-calculator-266503",
  storageBucket: "amortization-calculator-266503.appspot.com",
  messagingSenderId: "597617018945",
  appId: "1:597617018945:web:6b39bd97746b8b23229ec0",
  measurementId: "G-1ZY2ZL2NF5"
};
export const db = firebase.initializeApp(firebaseConfig).firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
