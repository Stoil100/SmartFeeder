import React, { useEffect,useState } from "react";
import {onAuthStateChanged, User } from "firebase/auth";
import { auth,db } from "../firebase";
import { set, ref, onValue } from "firebase/database";

export function useAuth() {
  const [user, setUser] = useState<User>();
  const [credentials,setCredentials] = useState();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = ref(db, `users/${user?.uid}`);
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();
          if (userData) {
            setCredentials(userData);
          }
        });
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,credentials
  };
}