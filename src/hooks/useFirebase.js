import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeauth from "../components/firebase/firebase.init";

initializeauth();
const auth = getAuth();
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const googleSignin = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
            }
        });
    }, [])

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }

    return {
        user,
        googleSignin,
        logout
    }
}

export default useFirebase;
