import firebase from "firebase/app";
import "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyCgTmv9kgUG-dSUoBwdxlWy81KVU7hfXis",
    authDomain: "sei-resource-manager.firebaseapp.com",
    projectId: "sei-resource-manager",
    storageBucket: "sei-resource-manager.appspot.com",
    messagingSenderId: "616315820198",
    appId: "1:616315820198:web:b6f4efe756349b6d153c67"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

function login() {
    auth.signInWithPopup(provider);
}

function logout() {
    auth.signOut();
}

export {
    auth,
    login,
    logout,
}
