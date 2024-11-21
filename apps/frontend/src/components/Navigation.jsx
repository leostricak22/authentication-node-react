import {Form, NavLink, useRouteLoaderData} from "react-router-dom";

export default function Navigation() {
    const token = useRouteLoaderData('root');

    return (
        <nav>
            <div className="navLeft">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                    Home
                </NavLink>
                <NavLink to="/fetch-routes" className={({ isActive }) => isActive ? "active" : ""}>
                    Fetch routes
                </NavLink>
                {
                    token &&
                    <NavLink to="/login-info" className={({ isActive }) => isActive ? "active" : ""}>
                        Login info
                    </NavLink>
                }
            </div>
            <div className="navRight">
                {
                    !token && (
                        <NavLink to="/auth?mode=login" className="authLink">
                            Authentication
                        </NavLink>
                    )
                }
                {
                    token &&
                    <Form className="authForm" action="/logout" method="post">
                        <button className="auth">
                            Logout
                        </button>
                    </Form>
                }
            </div>
        </nav>);
}