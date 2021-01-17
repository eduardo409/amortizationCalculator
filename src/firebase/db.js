import firebase from "firebase/app";
import "firebase/firestore";
// Imports the Secret Manager library
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');


// Instantiates a client
const client = new SecretManagerServiceClient();

async function accessSecret(secret) {
  const name = `projects/${process.env.GOOGLE_CLOUD_PROJECT}/secrets/${secret}/versions/latest`;
  const [version] = await client.accessSecretVersion({
    name: name,
  });

  // Extract the payload as a string.
  const payload = version.payload.data.toString();
  return payload
}
async function setup() {
  apiKey = await accessSecret("apiKey")
  authDomain = await accessSecret("authDomain")
  projectId = await accessSecret("projectId")
  storageBucket = await accessSecret("storageBucket")
  messagingSenderId = await accessSecret("messagingSenderId")
  appId = await accessSecret("appId")
  measurementId = await accessSecret("measurementId")

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
