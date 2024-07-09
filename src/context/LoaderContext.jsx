import React, { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({children}) => {
    const [progress, setProgress] = useState(0);

    return (
        <LoaderContext.Provider value = {[progress, setProgress]} >
            {children}
        </LoaderContext.Provider>
    );
}

export const useLoaderContext = () => useContext(LoaderContext)