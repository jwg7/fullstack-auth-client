import { useState } from "react";
import { useAuth } from "../Hooks/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Fullstack Auth Login Page</h1>
      <label>Email: </label>
      <input
        type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      ></input>
      <label>Password: </label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></input>
      <h3>{loginMessage}</h3>
      <button
        onClick={async () => {
          const loginResult = await auth.login(email, password);
          if (loginResult.success) {
            navigate("/");
          }
          if (!loginResult.success) {
            setLoginMessage(loginResult.message);
          }
        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default LoginPage;
