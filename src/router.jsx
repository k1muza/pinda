import { createBrowserRouter, Navigate, redirect } from 'react-router-dom';
import { authProvider } from './auth';
import MainLayout from './layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { authLoader } from './utils/authLoader';
import { loginLoader } from './utils/loginLoader';


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard" />
            },
            {
                path: "login",
                element: <Login />,
                loader: loginLoader
            },
            {
                path: "register",
                element: <Register />,
                loader: loginLoader
            },
            {
                path: "dashboard",
                element: <Dashboard />,
                loader: authLoader,
            }
        ]
    },
    {
        path: "/logout",
        action: () => {
            authProvider.logout
            return redirect("/login");
        }
    }
]);

export default router;
