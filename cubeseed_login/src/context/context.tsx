import React, { useState, createContext } from "react";
export const Context = React.createContext<props>({
  text: "",
  inputValue: { date: "", time: "" },
  congrate: false,
  open: false,
  show: false,
  setText: (value: string) => {},
  handleChangeInputValues: () => {},
  setOpen: () => {},
  handleCloseModal: () => {},

  handleShowModal: () => {},
  handleCongrateMeaasge: () => {},
});
type props = {
  text: string;
  inputValue: {
    time: string;
    date: string;
  };
  congrate: boolean;
  open: boolean;
  show: boolean;
  setText: (value: string) => void;
  handleChangeInputValues: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseModal: () => void;
  handleCongrateMeaasge: () => void;

  handleShowModal: () => void;
};
type contextProps = {
  children: React.ReactElement;
};

export const FarmContexProvider = ({ children }: contextProps) => {
  const [inputValue, setInPutValue] = React.useState({
    time: "",
    date: "",
  });

  const [text, setText] = React.useState<string>("");
  const [open, setOpen] = useState(false);
  const [show, setShow] = React.useState(false);
  const [congrate, setCongrate] = React.useState(false);

  const handleChangeInputValues = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setInPutValue({
      ...inputValue,
      [event.target.name]: value,
    });
  };
  const handleCongrateMeaasge = () => {
    setCongrate(true);
  };

  const handleShowModal = () => {
    setShow(true);
    setOpen(true);
  };
  const handleCloseModal = () => {
    setShow(false);
  };

  const contexProvider: props = {
    text,
    setText,
    congrate,
    open,
    show,
    setOpen,
    inputValue,

    handleShowModal,
    handleCloseModal,
    handleChangeInputValues,
    handleCongrateMeaasge,
  };
  return <Context.Provider value={contexProvider}>{children}</Context.Provider>;
};
