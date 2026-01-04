import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContext } from "./contexts/authContext.jsx";

import LoginPage from "./pages/loginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  );
}
export default App;
