import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AuthenticationPage, {action as authAction} from "./pages/AuthenticationPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import FetchRoutesPage from "./pages/FetchRoutesPage";
import {action as logoutAction} from "./pages/Logout";
import {checkAuthLoader, tokenLoader} from "./util/auth";
import LoginInfo from "./pages/LoginInfo";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        id: "root",
        loader: tokenLoader,
        children: [
            {
                index : true,
                element: <HomePage />
            },
            {
                path: 'auth',
                element: <AuthenticationPage />,
                action: authAction
            },
            {
                path: 'fetch-routes',
                element: <FetchRoutesPage />
            },
            {
                path: 'login-info',
                element: <LoginInfo />,
                loader: checkAuthLoader
            },
            {
                path: 'logout',
                action: logoutAction
            }
        ]
    }
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;
