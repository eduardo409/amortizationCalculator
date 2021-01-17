import firebase from "firebase/app";
import "firebase/firestore";
/* eslint no-console:  */

// Imports the Secret Manager library
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');


// Instantiates a client
const client = new SecretManagerServiceClient();

async function accessSecret(secret) {
  const name = `projects/amortization-calculator-266503/secrets/${secret}/versions/latest`;
  const [version] = await client.accessSecretVersion({
    name: name,
  });

  // Extract the payload as a string.
  const payload = version.payload.data.toString();
  console.log("payload: " +payload)
  return payload
}
async function setup() {
  var apiKey = await accessSecret("apiKey")
  var authDomain = await accessSecret("authDomain")
  var projectId = await accessSecret("projectId")
  var storageBucket = await accessSecret("storageBucket")
  var messagingSenderId = await accessSecret("messagingSenderId")
  var appId = await accessSecret("appId")
  var measurementId = await accessSecret("measurementId")

  // Get a Firestore instance
  firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId
  };
  return firebaseConfig
}

var firebaseConfig
setup().then(response =>{
  firebaseConfig = response
})
export const db = firebase.initializeApp(firebaseConfig).firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
