import ErrorPage from "@pages/_notFound";
import App from "@/App";
import Home from "@pages/home"
import About from "@/pages/about";
import { createBrowserRouter } from "react-router-dom";
import { useTransition } from "@/components/PageTransition";

const router  = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
          path: "/",
          element: <Home />,
          loader: useTransition
        },
        {
          path: "/about",
          element: <About />,
          loader: useTransition
        }
    ]
}]);

export default router