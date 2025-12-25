// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARBhKVMYKtUZZfsB8Xsd4PdbjJKVzR3Ck",
  authDomain: "react-js-blog-website-19362.firebaseapp.com",
  projectId: "react-js-blog-website-19362",
  storageBucket: "react-js-blog-website-19362.firebasestorage.app",
  messagingSenderId: "882269894400",
  appId: "1:882269894400:web:d81aa9d311add247e025e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

const auth = getAuth()

export const authWithGoogle = async() => {

    let user = null

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })
    return user
}