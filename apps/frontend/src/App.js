import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AuthenticationPage from "./pages/AuthenticationPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index : true,
                element: <HomePage />
            },
            {
                path: 'auth',
                element: <AuthenticationPage />,
            },
        ]
    }
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;
