import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactUsPage from "./pages/Contactus";
import LayoutPage from "./pages/Layout";
import SignIn from "./pages/Signinpage";
import SignUpPage from "./pages/Signuppage"; // Corrected spelling
import { Provider } from "react-redux";
import store from "./features/store";
import DetailPage from "./pages/Detailpage";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Create router
const router = createBrowserRouter([
  {
    element: <LayoutPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/contact", element: <ContactUsPage /> },
      { path: "/description/:id", element: <DetailPage /> },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />, // Corrected spelling
  },
  {
    path: "/sign-up",
    element: <SignUpPage />, // Corrected spelling
  },
]);

// Main App component
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
