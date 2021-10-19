import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };

  //observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  const handleUserRegister = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUserName(name);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleUserName = (name) => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const handleUserLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut,
    handleUserRegister,
    handleUserName,
    handleUserLogin,
  };
};

export default useFirebase;
