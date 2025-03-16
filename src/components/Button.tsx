import { PropsWithChildren } from "react";

type ButtonProps = {
  buttonType?: "secondary";
  onClick?: () => void;
};

export default function Button({ onClick, buttonType, children }: PropsWithChildren<ButtonProps>) {
  return (
    <button onClick={onClick} className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}>
      {children}
    </button>
  );
}
