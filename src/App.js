import './App.css';
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import GlobalLayout from "./Layouts/GlobalLayout"
import HomePage from "./Pages/HomePage"
import LoginPage from "./Pages/LoginPage"
import RegistrationPage from "./Pages/RegistrationPage"


////////////////////////////////////////////////////////

function App() {

const router = createBrowserRouter([
  {
path: "/",
element: <GlobalLayout/>,
children: [
  {
    index: true,
    element: <HomePage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegistrationPage/>
  }
]
  }
])


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

/////////////////////////////////////////////

export default App;
