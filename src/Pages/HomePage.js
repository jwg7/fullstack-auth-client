import { useState } from "react";
import { useAuth } from "../Hooks/auth";
import { useEffect } from "react";

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

///////////////////////////////////////////

const HomePage = () => {
  const [message, setMessage] = useState("");
  const auth = useAuth();

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch(`${urlEndpoint}/users/message`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken,
        },
      });
      const result = await response.json();
      setMessage(result.message);
    };
    if (auth.userToken !== null) {
      fetchMessage()
    }
    if (auth.userToken === null) {
        setMessage('')
    }
}, [auth.userToken])

  return (
    <div>
      <h1>Fullstack Auth Home Page</h1>
      <h3>{message}</h3>
    </div>
  );
};

/////////////////////////////////////////////

export default HomePage;
