import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthContext } from "./contexts/authContext.jsx";

import LoginPage from "./pages/loginPage.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AppLayout from "./components/AppLayout.jsx";
import ConsultantsPage from "./pages/consultantsPage.jsx";
import { ConsultantsProvider } from "./contexts/consultantsContext.jsx";

import Error from "./components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/:admin",
    errorElement: <Error />,
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="consultants" replace />,
      },
      {
        path: "consultants",
        element: (
          <ConsultantsProvider>
            <ConsultantsPage />
          </ConsultantsProvider>
        ),
      },
      // {
      //   path: "nurses",
      //   element: <NursesPage />,
      // },
    ],
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
