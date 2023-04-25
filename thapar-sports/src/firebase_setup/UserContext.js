import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import { useNavigate as navigate } from "react-router-dom";

export const UserContext = createContext({
  authIsReady: false,
  setAuthIsReady: () => {},
  user: null,
  setUser: () => {},
  signIn: () => {},
  signUp: () => {},
  forgotPassword: () => {},
});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authIsReady, setAuthIsReady] = useState(false);
  const [error, setError] = useState(null);

 

  const signUp = async (email, password) => {
    // Check if email is valid
    const isValidEmail = email.endsWith("@thapar.edu");
    if (!isValidEmail) {
      setError("You must use a Thapar University email address to sign up.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const signIn = async (email, password) => {
    // Check if email is valid
    const isValidEmail = email.endsWith("@thapar.edu");
    if (!isValidEmail) {
      setError("You must use a Thapar University email address to sign in.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const forgotPassword = (email) => {
    // Check if email is valid
    const isValidEmail = email.endsWith("@thapar.edu");
    if (!isValidEmail) {
      setError("You must use a Thapar University email address to reset your password.");
      return;
    }

    sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthIsReady(true);
      if (user && authIsReady) {
        navigate("/dashboard");
      }
    });
    return unsubscribe;
  }, [authIsReady, navigate]);

  return (
    <UserContext.Provider
      value={{
        forgotPassword,
        error,
        setError,
        user,
        authIsReady,
        setUser,
        signIn,
        signUp
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
