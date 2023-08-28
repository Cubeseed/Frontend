import React, { useState, createContext, useContext } from "react";

type props = {
  choice: string;
  setChoice: (value: string) => void;
}

export const useSignUpContext = () => useContext(Context);

export const Context = React.createContext<props>({
  choice: "",
  setChoice: (value: string) => {},
});

type contextProps = {
  children: React.ReactElement;
};

export const SignUpContextProvider = ({ children }: contextProps) => {
  const [choice, setChoice] = useState<string>("");
  const contextProvider: props = {
    choice,
    setChoice,
  }

  return (
    <Context.Provider value={contextProvider}>
      {children}
    </Context.Provider>
  );
}
