import React, { useState, createContext, useContext } from "react";

type props = {
  choice: string;
  fullName: string;
  email: string;
  setChoice: (value: string) => void;
  setFullName: (value: string) => void;
  setEmail: (value: string) => void;
}

export const useSignUpContext = () => useContext(Context);

export const Context = React.createContext<props>({
  choice: "",
  fullName: "",
  email: "",

  setChoice: (value: string) => {},
  setFullName: (value: string) => {},
  setEmail: (value: string) => {},
});

type contextProps = {
  children: React.ReactElement;
};

export const SignUpContextProvider = ({ children }: contextProps) => {
  const [choice, setChoice] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const contextProvider: props = {
    choice,
    fullName,
    email,
    setFullName,
    setEmail,
    setChoice,
  }

  return (
    <Context.Provider value={contextProvider}>
      {children}
    </Context.Provider>
  );
}
