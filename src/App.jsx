import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { store } from "./store/store";
import { AdminLayout } from "./components/AdminLayout";
import { Homepage } from "./pages/Homepage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
