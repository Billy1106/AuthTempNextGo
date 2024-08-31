import {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from "react";
import { auth } from "@/firebase/client";
import { onAuthStateChanged } from "firebase/auth";
import { getFetchClient } from "@/common/open-api-schema/client";
import createClient from "openapi-fetch";
import type { paths } from "@/common/open-api-schema/schema.gen";

type ClientType = ReturnType<typeof createClient<paths>>;

type RequestContextType = {
  client: ClientType | null;
};

const RequestContext = createContext<RequestContextType>({
  client: null,
});

export const RequestProvider = ({ children }: { children: ReactNode }) => {
  const [client, setClient] = useState<any | null>(null);

  useEffect(() => {
    const initializeClient = async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          try {
            const client = await getFetchClient({ user });
            setClient(client);
          } catch (error) {
            console.error(error);
          }
        }
      });
    };

    initializeClient();
  }, []);

  return (
    <RequestContext.Provider value={{ client }}>
      {children}
    </RequestContext.Provider>
  );
};

export const useRequestContext = () => useContext(RequestContext);
