import React, { useState, useContext, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../Components/Loader";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import {LinkCard} from '../../Components/LinkCard'

const DetailsPage = () => {
  const { request, loading } = useHttp();
  const { token } = useContext(AuthContext);
  const [link, setLink] = useState(null);
  const linkId = useParams().id;

  const getLink = useCallback(async () => {
    try {
      const fetched = await request(`/api/link/${linkId}`, "GET", null, {
        Authorization: `Bearer ${token}`,
      });

      setLink(fetched);
    } catch (e) {}
  }, []);

  useEffect(() => {
    getLink()
  }, [])

  if(loading){
    return <Loader />
  }

  return (
    <>
      {!loading && link && <LinkCard link = {link}/>}
    </>
  );
};

export default DetailsPage;
