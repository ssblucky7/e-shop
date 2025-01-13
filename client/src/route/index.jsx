import { createBrowserRouter } from "react-router-dom"; // Import the createBrowserRouter function
import App from "../App";
import Home from "../pages/home"; // Import the Home component
import SearchPage from "../pages/SearchPage"; // Import the SearchPage component
import Login from '../pages/Login'
import Register from '../pages/Register'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path : "search",
                element : <SearchPage/>
            },
            {
                path : 'login',
                element : <Login/>
            },
            {
                path : 'register',
                element : <Register/>
            }
       ]
    }

])

export default router;