import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/auth";

const NavBar = () => {
  const auth = useAuth();
  return (
    <div>
      <h3>{auth.userEmail !== null  ? `Current User: ${auth.userEmail}` : `Need an email`}</h3>
      <Link to="/">Home</Link>
      <Link to="/register">Registration Form</Link>
      <Link to="/login">Login Form</Link>
      <button onClick={()=>{
        auth.logout()
      }}>Logout</button>
    </div>
  );
};

export default NavBar;
