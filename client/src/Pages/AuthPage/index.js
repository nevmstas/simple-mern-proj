import React, { useEffect, useContext } from "react";
import { AuthForm } from "./AuthForm";
import { useHttp } from "../../hooks/http.hook";
import { AuthContext } from "../../context/AuthContext";
const AuthPage = () => {
  const auth = useContext(AuthContext);
  const { loading, error, request, clearError } = useHttp();

  const registerHandler = async (form) => {
    try {
      const data = await request("/api/auth/register", "POST", form);
    } catch (e) {}
  };

  const loginHandler = async (form) => {
    try {
      const data = await request("/api/auth/login", "POST", form);
      auth.login(data.token, data.userId);
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
