import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebase/client";
import { signIn as signInByNextAuth, signOut as signOutByNextAuth } from "next-auth/react";
const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const signIn = async (email: string, password: string) => {
      setLoading(true);
      setError("");
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const idToken = await userCredential.user.getIdToken();
        await signInByNextAuth("credentials", {
          idToken,
          callbackUrl: "/",
        });
      } catch (error) {
        console.log(error);
        setError("Failed to sign in. Please check your credentials.");
      } finally {
        setLoading(false);
      }
    };
  
    const signOutUser = async () => {
      setLoading(true);
      try {
        await signOut(auth);
        await signOutByNextAuth();
      } catch (error) {
        console.log(error);
        setError("Failed to sign out. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  
    return { signIn, signOutUser, loading, error };
  };

export default useAuth;