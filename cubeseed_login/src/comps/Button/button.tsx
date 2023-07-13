import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className: string;
};

export default function Button({ children, className }: ButtonProps) {
  return <button className={className}>{children}</button>;
}
