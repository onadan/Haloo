import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Join from "./views/Join";
import Game from "./views/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);

export default router;
