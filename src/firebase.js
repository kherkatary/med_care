import { initializeApp } from 'firebase/app';
import {getAuth}from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCK8K2BAomwunYL-uiJew7AtFnh4ToBac8",
    authDomain: "loginproject-ee03e.firebaseapp.com",
    projectId: "loginproject-ee03e",
    storageBucket: "loginproject-ee03e.appspot.com",
    messagingSenderId: "198149913276",
    appId: "1:198149913276:web:c20a7369038471d634aeb9"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

 

onAuthStateChanged(auth,user =>{
    if(user!=null){
        console.log('logged in!');
    }
    else{
        console.log('No user');
    }
});

// Get a list of cities from your database
async function getCities(db) {
const citiesCol = collection(db, 'cities');
const citySnapshot = await getDocs(citiesCol);
const cityList = citySnapshot.docs.map(doc => doc.data());
return cityList;
}