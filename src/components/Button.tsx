import React, { MouseEventHandler } from "react";

interface IButton {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ label, onClick }: IButton) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
