import { useMemo, useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebase/client";
import {
  signIn as signInByNextAuth,
  signOut as signOutByNextAuth,
} from "next-auth/react";
import { useSession } from "next-auth/react";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { data } = useSession();

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    return new Promise(async (resolve, reject) => {
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );
        await signInByNextAuth("credentials", {
          email,
          password,
        });
        resolve(user);
      } catch (error) {
        console.log(error);
        setError("Failed to sign in. Please try again.");
        reject(error);
      } finally {
        setLoading(false);
      }
    });
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

  const session = useMemo(() => data, [data]);

  return { signIn, signOutUser, loading, error, session };
};

export default useAuth;
