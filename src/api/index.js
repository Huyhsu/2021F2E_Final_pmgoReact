import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import jsonInfo from "../json/jsonInfo.json";
import pokes from "../json/pokes.json";

// INITIALIZE FIREBASE
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);
// REFERENCE POKEMONS
const pokesCollectionRef = firebase.firestore().collection("pokes");
const pokesDocRef = pokesCollectionRef.doc("json");
const allPokesCollectionRef = pokesDocRef.collection("allPokes");
const allOrdersCollectionRef = firebase.firestore().collection("allOrders");

//REFERENCE AUTH
const auth = firebase.auth();

export const getPokeById = async (pokeId) => {
  // REFERENCE POKEMONS COLLECTION
  const doc = await allPokesCollectionRef.doc(pokeId).get();
  return doc.data()
}

export const getPokes = async (url) => {
  const collection = jsonInfo.find(element => element.url === url);
  const collectionName = collection.name || "allPokes";
  let jsonPokes = [];

  // QUERY POKEMONS
  let querySnapshot;
  if (collectionName === "allPokes")
    querySnapshot = await allPokesCollectionRef.orderBy("number").get();
  else
    querySnapshot = await allPokesCollectionRef.where("areaEn", "==", collectionName).orderBy("number", "asc").get();
  querySnapshot.forEach((doc) => {
    jsonPokes.push(doc.data());
  });
  return jsonPokes;
}

export const feedPokes = () => {
  pokes.forEach((poke) => {
    const docRef = allPokesCollectionRef.doc(poke.id);
    // const f_id = docRef.id;
    // const user = auth.currentUser.uid;

    // Store Data for Aggregation Queries
    docRef.set({
      ...poke,
      // user,
      // f_id
    });
  })
}

export const signInWithEmailPassword = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password);
}

export const registerWithEmailPassword = async (email, password, displayName) => {
  await auth.createUserWithEmailAndPassword(email, password);
  const user = auth.currentUser;
  await user.updateProfile({ displayName })
  return user;
}

export const updateUserInfoApi = async (email, password, displayName) => {
  const user = auth.currentUser;
  if(displayName)
    await user.updateProfile({ displayName });
  if(email)
    await user.updateEmail(String(email));
  if(password)
    await user.updatePassword(password);
  return user;
}

export const createOrderApi = async (order) => {
  const user = auth.currentUser.uid;
  const orderRef = await allOrdersCollectionRef.doc();
  const id = orderRef.id;
  // Store Data for Aggregation Queries
  await orderRef.set({
    ...order,
    id,
    user
  });
  return { ...order, id };
}

export const getOrderById = async (orderId) => {
  const doc = await allOrdersCollectionRef.doc(orderId).get();
  return doc.data()
}

export const getOrderByUser = async () => {
  const user = auth.currentUser.uid;
  let jsonOrders = [];

  // QUERY Orders
  const querySnapshot = await allOrdersCollectionRef.where("user", "==", user).get();
  querySnapshot.forEach((doc) => {
    jsonOrders.push(doc.data());
  });
  return jsonOrders;
}

export const signOut = () => {
  auth.signOut();
}

export const checkLoginApi = () => {
  const user = auth.currentUser;
  return user.uid?  true : false;
}

