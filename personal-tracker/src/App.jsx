import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./layout/AppLayout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import Todo from "./pages/Todo/Todo";
import Learning from "./pages/Learning/Learning";
import VersePage from "./pages/Verse/VersePage";
import NotesPage from "./pages/Notes/NotesPage";
import SadhnaPage from "./pages/Sadhna/SadhnaPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "./store/reducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/todo", element: <Todo /> },
        // { path: "/learning", element: <Learning /> },
        { path: "/verse", element: <VersePage /> },
        { path: "/notes", element: <NotesPage /> },
        { path: "/sadhna", element: <SadhnaPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
