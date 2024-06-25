import { createContext } from "react";

interface DirProp {
    dir: string;
    setDir: React.Dispatch<React.SetStateAction<string>> | null;
}

export const Directory = createContext<DirProp>({ dir: '/', setDir: null })