import React, {
  useState,
  createContext,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type InputValue = {
  time: string;
  date: string;
};

type FarmContextType = {
  text: string;
  inputValue: InputValue;
  congrate: boolean;
  open: boolean;
  show: boolean;
  setText: (value: string) => void;
  handleChangeInputValues: (event: ChangeEvent<HTMLInputElement>) => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleCloseModal: () => void;
  handleCongrateMessage: () => void;
  handleShowModal: () => void;
};

// Create the context with default values, throws error if used outside of provider
export const FarmContext = createContext<FarmContextType>({
  text: "",
  inputValue: { date: "", time: "" },
  congrate: false,
  open: false,
  show: false,
  setText: () => {
    throw new Error("setText function called outside of FarmContextProvider");
  },
  handleChangeInputValues: () => {
    throw new Error(
      "handleChangeInputValues function called outside of FarmContextProvider"
    );
  },
  setOpen: () => {
    throw new Error("setOpen function called outside of FarmContextProvider");
  },
  handleCloseModal: () => {
    throw new Error(
      "handleCloseModal function called outside of FarmContextProvider"
    );
  },
  handleCongrateMessage: () => {
    throw new Error(
      "handleCongrateMessage function called outside of FarmContextProvider"
    );
  },
  handleShowModal: () => {
    throw new Error(
      "handleShowModal function called outside of FarmContextProvider"
    );
  },
});

type FarmContextProviderProps = {
  children: React.ReactNode;
};

// provider component
export const FarmContextProvider: React.FC<FarmContextProviderProps> = ({
  children,
}) => {
  const [inputValue, setInputValue] = useState<InputValue>({
    time: "",
    date: "",
  });
  const [text, setText] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [congrate, setCongrate] = useState<boolean>(false);

  const handleChangeInputValues = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCongrateMessage = () => {
    setCongrate(true);
  };

  const handleShowModal = () => {
    setShow(true);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <FarmContext.Provider
      value={{
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
        handleCongrateMessage,
      }}
    >
      {children}
    </FarmContext.Provider>
  );
};

// Custom hook
export const useFarmContext = () => {
  return useContext(FarmContext);
};
