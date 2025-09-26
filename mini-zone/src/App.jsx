import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./ui/AppLayout/AppLayout";
import Homepage from "./pages/home/Homepage";

import { loader as productLoaders } from "./pages/home/Homepage";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [{ path: "/", element: <Homepage />, loader: productLoaders }],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
