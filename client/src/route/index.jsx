import { createBrowserRouter } from "react-router-dom"; // Import the createBrowserRouter function
import App from "../App";
import Home from "../pages/home"; // Import the Home component

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home/>,
            }
       ]
    }

])

export default router;