import { User } from "firebase/auth";
import { createContext, useContext } from "react";

export type Context = {
  user: User | null;
  photoURL: string;
  darkModeEnabled: boolean;
  darkModeToggle: (uid: string, darkModeEnabled: boolean) => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  logOut: () => Promise<void>;
};

export const initialState = {
  user: null,
  photoURL: "",
  darkModeEnabled: false,
  darkModeToggle: async () => {},
  signInWithFacebook: async () => {},
  logOut: async () => {},
};

export const AuthContext = createContext<Context>(initialState);

export const useAuth = (): Context => useContext(AuthContext);
