import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const LinksPage = () => {
  const auth = useContext(AuthContext);

  const logoutHandler = () =>{
    try{
      auth.logout()
    }catch(e){}
  }

  return (
    <div>
      <button onClick={logoutHandler}>
        Logout
      </button>
      <h1>LinksPage</h1>
    </div>
  );
};

export default LinksPage;
