import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  label: string;
  sizeType: "large" | "small";
  type?: "submit" | "reset" | "button";
}
