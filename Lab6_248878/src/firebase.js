import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPy6TkA-mWKzjGicqjn_lxVKwMWPXjjlY",
  authDomain: "lab6248878.firebaseapp.com",
  projectId: "lab6248878",
  storageBucket: "lab6248878.appspot.com",
  messagingSenderId: "332071371929",
  appId: "1:332071371929:web:fa6ec09cad753c4204a408"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const getList = () => {
    var list = [];

    firestore.collection("list").onSnapshot((snapshot) => {
        snapshot.forEach((doc) =>{
            const newListElement = {
                name: doc.data()['name'],
                description: doc.data()['description'],
                email: doc.data()['email'],
            }
            list.push(newListElement)   
        }) 
    })

    
    return list
}

export const addToList = (name, description, email) => {
    firestore.collection("list").add({
        name: name,
        description: description,
        email: email
    })
}