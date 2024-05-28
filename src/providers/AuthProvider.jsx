import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext("");
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

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

  // sign in with google
  function googleSignIn() {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  }
  // log out user
  function logOutUser() {
    return signOut(auth);
  }

  //   observing the user
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userInfo = {
            email: currentUser.email,
          };
          axiosPublic.post("/auth/createJwt", userInfo, {
            withCredentials: true,
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          const userInfo = {
            email: currentUser?.email,
          };
          axiosPublic.post("/auth/deleteJwt", userInfo, {
            withCredentials: true,
          });
        } catch (err) {
          console.log(err);
        }
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
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
