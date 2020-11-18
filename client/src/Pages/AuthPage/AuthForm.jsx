import React, { useState } from "react";
import { TextInput } from "../../Components/StyledComponents/Components";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
const formStyle = css`
   display: flex;
  flex-direction: column;
  width: 200px;

`;

export const AuthForm = ({ register, login }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <div css={formStyle}>
      <TextInput
        placeholder={"put email"}
        name="email"
        value={form.email}
        onChange={changeHandler}
        label={"Email"}
      />

      <TextInput
        placeholder={"put pass"}
        name="password"
        value={form.password}
        onChange={changeHandler}
        label={"Password"}
      />
      <button onClick={() => login(form)}>Sign in</button>
      <button onClick={() => register(form)}>Sign up</button>
    </div>
  );
};
