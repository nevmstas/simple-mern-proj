import React, { useCallback, useContext, useState, useEffect } from "react";
import { Loader } from "../../Components/Loader";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import { LinksList } from "../../Components/LinksList";

const LinksPage = () => {
  const [links, setlinks] = useState([]);
  const { loading, request } = useHttp();
  const {token} = useContext(AuthContext);

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request("/api/link", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      console.log(fetched)
      setlinks(fetched);
    } catch (e) {}
  }, [token, request]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (loading) {
    return <Loader />;
  }
  return <>{!loading && <LinksList links={links} />}</>;
};

export default LinksPage;
