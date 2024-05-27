import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext("");
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth(app);

  // Creating user with eamil and pass
  function registerUserWithEmailAndPassword(email, pass) {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  }

  // updating the user
  function updateUser(name) {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  }

  // log in user with eamil and pass
  function logInUser(email, pass) {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  }
  // log out user
  function logOutUser() {
    return signOut(auth);
  }

  //   observing the user
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return () => unsubcribe();
  }, [auth]);

  const authInfo = {
    user,
    isLoading,
    registerUserWithEmailAndPassword,
    logOutUser,
    updateUser,
    logInUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
