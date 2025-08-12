import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

import { addDoc, collection, getFirestore } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyCD_DnQgpu9UKfAGxeEYDN2e59g-Opuv5g",
  authDomain: "netflixweb-5e64c.firebaseapp.com",
  projectId: "netflixweb-5e64c",
  storageBucket: "netflixweb-5e64c.firebasestorage.app",
  messagingSenderId: "30264259116",
  appId: "1:30264259116:web:2b5305ab6a0e1b34f89789"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,

        });
    }
    catch (error) {
        console.log(error);
        alert(error);
        
    }
}
const login = async (email,password) => {
    try {
      await  signInWithEmailAndPassword(auth, email, password);


        
    } catch(error) {
         console.log(error);
         alert(error);
    }
}


const logout = () => {
    signOut(auth);

}

export {auth,db,login,signup,logout}