import React, { useState, createContext, useContext } from "react";
import { SignUpErrors } from "@cs/types/index";

type props = {
  choice: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  errors: SignUpErrors;
  setChoice: (value: string) => void;
  setErrors: (value: SignUpErrors) => void;
  setUsername: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
}

export const useSignUpContext = () => useContext(Context);

export const Context = React.createContext<props>({
  choice: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: {},

  setChoice: (value: string) => {},
  setUsername: (value: string) => {},
  setEmail: (value: string) => {},
  setPassword: (value: string) => {},
  setConfirmPassword: (value: string) => {},
  setErrors: (value: SignUpErrors) => {},
});

type contextProps = {
  children: React.ReactElement;
};

export const SignUpContextProvider = ({ children }: contextProps) => {
  const [choice, setChoice] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<SignUpErrors>({});

  const contextProvider: props = {
    choice,
    username,
    email,
    password,
    confirmPassword,
    errors,
    setConfirmPassword,
    setPassword,
    setUsername,
    setEmail,
    setChoice,
    setErrors,
  }

  return (
    <Context.Provider value={contextProvider}>
      {children}
    </Context.Provider>
  );
}
