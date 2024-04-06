import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword ,signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../assets/Firebase/firebase.config";
import { set } from "firebase/database";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading ,setLoading] = useState(true);
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    const authInfo = {
        createUser,logOut,user,loginUser,loading
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('This sign in success',currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    },[])
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;