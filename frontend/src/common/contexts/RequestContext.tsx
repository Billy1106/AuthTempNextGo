import { createContext, useEffect, useState, useContext, ReactNode } from "react";
import { auth } from "@/firebase/client";
import axios, { AxiosInstance } from "axios";
import { onAuthStateChanged } from "firebase/auth";

type RequestContextType = {
    axiosInstance: AxiosInstance | null;
};

const RequestContext = createContext<RequestContextType>({
    axiosInstance: null,
});

export const RequestProvider = ({ children }: { children: ReactNode }) => {
    const [axiosInstance, setAxiosInstance] = useState<AxiosInstance | null>(null);

    useEffect(() => {
        const initializeAxios = async () => {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const idToken = await user.getIdToken();
                    const instance = axios.create({
                        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
                        headers: {
                            Authorization: `Bearer ${idToken}`,
                            "Content-Type": "application/json",
                        },
                    });
                    setAxiosInstance(() => instance);
                } else {
                    setAxiosInstance(null);
                }
            });
        };

        initializeAxios();
    }, []);


    return (
        <RequestContext.Provider value={{ axiosInstance }}>
            {children}
        </RequestContext.Provider>
    );
};

export const useRequestContext = () => useContext(RequestContext);
