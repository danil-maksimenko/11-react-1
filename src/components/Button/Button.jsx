import "./Button.css";
import { memo } from "react";
import cn from "classnames";

function Button({ children, onClick, appearance = "accent" }) {
  return (
    <button
      className={cn("button", {
        accent: appearance === "accent",
        secondary: appearance === "secondary",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default memo(Button);
