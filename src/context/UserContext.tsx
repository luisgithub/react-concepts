import React from "react";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export type User = {
  name: string;
  email: string;
};

export interface UserContextInterface {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const defaultSate = {
  user: {
    name: "",
    email: "",
  },
  setUser: (user: User) => {},
} as UserContextInterface;

export const UserContext = createContext(defaultSate);

type UserProviderProps = {
  children: ReactNode;
};

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({ name: "", email: "" });

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
