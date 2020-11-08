import React, { useState } from "react";

export const AuthForm = ({register, login}) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    };
  return (
    <div>
      <label htmlFor="email" />
      <input
        placeholder="put email"
        type="text"
        name="email"
        onChange={changeHandler}
      />
      <input
        placeholder="put pass"
        type="password"
        name="password"
        onChange={changeHandler}
      />
      <button onClick={()=>login(form)}>Sign in</button>
      <button onClick={()=>register(form)}>Sign up</button>
    </div>
  );
};
