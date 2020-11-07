import React from "react";
import { AuthForm } from "./AuthForm";
import { useHttp } from "../../hooks/http.hook";
const AuthPage = () => {
  const { loading, error, request } = useHttp();

  const registerHandler = async (form)=>{
    try{
      const data = await request('/api/auth/register', 'POST', {form})
      console.log(data)
    }catch(e){
      
    }
  }
  return (
    <div>
      <h1>Auth</h1>
      <AuthForm register={registerHandler}/>
    </div>
  );
};

export default AuthPage;
