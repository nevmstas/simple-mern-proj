import React, { useState, useContext } from "react";
import { useHttp } from "../../hooks/http.hook";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
export const CreatePage = () => {
  const history = useHistory();
  const { request } = useHttp();
  const auth = useContext(AuthContext);
  const [link, setLink] = useState("");
  const pressHandler = async (event) => {
    console.log(auth.token);
    if (event.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          { from: link },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );
        history.push(`/detail/${data.link._id}`);
      } catch (e) {}
    }
  };
  return (
    <div>
      <h1>CreatePage</h1>
      <label htmlFor="link">Put link</label>
      <input
        placeholder="put link"
        type="text"
        id="link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        onKeyPress={pressHandler}
      />
    </div>
  );
};
