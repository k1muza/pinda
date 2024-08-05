import React from 'react';
import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import router from './router'; // Import the router you setup

function App() {
    return (
        <>
            <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
        </>
    );
}

export default App;
