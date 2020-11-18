import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const inputStyle = css`
  border-radius: 4px;
  border: none;
  background-color: white;
  width: 200px;
  transition: all 0.3s;
  box-shadow: 0 5px 10px #b3b3b3;
  margin: 10px;
  padding: 10px;

  &:hover {
    width: 220px;
    transform: translateX(-10px);
    outline: none;
  }
`;

export const TextInput = ({ name, placeholder = "", value, onChange, label }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        css={inputStyle}
        placeholder={placeholder}
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </React.Fragment>
  );
};
