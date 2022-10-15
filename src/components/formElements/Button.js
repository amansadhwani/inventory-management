import React from "react";

export const Button = ({ type, onClick, name, className }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {name}
    </button>
  );
};
