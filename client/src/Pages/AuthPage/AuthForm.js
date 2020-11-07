import React, { useState } from "react";

export const AuthForm = () => {
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
        type="text"
        name="password"
        onChange={changeHandler}
      />
      <button>Sign in</button>
      <button>Sign up</button>
    </div>
  );
};
