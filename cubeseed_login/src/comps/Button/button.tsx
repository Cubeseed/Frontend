import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
};

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
