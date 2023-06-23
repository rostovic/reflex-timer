// import classes from "./App.module.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./HomePage";
import ReflexGame from "./ReflexGame";

const App = () => {
  const AuthRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [],
    },
    {
      path: "/reflex-game",
      element: <ReflexGame />,
      children: [],
    },
    {
      path: "/*",
      element: <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={AuthRouter} />;
};

export default App;
