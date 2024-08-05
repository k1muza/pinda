import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { requireAuth } from './utils/requireAuth';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <div>Error!</div>,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        loader: requireAuth,  // Guard this route
    }
]);

export default router;
