import React, { useEffect } from "react";
import { AuthForm } from "./AuthForm";
import { useHttp } from "../../hooks/http.hook";
const AuthPage = () => {
  const { loading, error, request, clearError } = useHttp();

  const registerHandler = async (form) => {
    try {
      const data = await request("/api/auth/register", "POST", form);
      console.log(data);
    } catch (e) {}
  };

  const loginHandler = async (form) => {
    try {
      const data = await request("/api/auth/login", "POST", form);
      console.log(data);
    } catch (e) {}
  };

  useEffect(() => {
    setTimeout(clearError, 3000);
  }, [error]);

  return (
    <div>
      <h1>Auth</h1>
      <AuthForm register={registerHandler} login={loginHandler} />
      {error ? <h3>{error}</h3> : null}
    </div>
  );
};

export default AuthPage;
