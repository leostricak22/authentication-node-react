import {useRouteLoaderData} from "react-router-dom";

export default function HomePage() {
    const token = useRouteLoaderData('root');

    return (
        <div className="homepage-container">
            <h1>Home Page</h1>
            <div className="description">
                <p>Welcome to the home page.</p>
                <p>This project is an example of a simple token authentication using React.js for frontend and Node.js for backend.</p>
                <br/>
                <p>User is currently <b>{token ? "logged in" : "logged out"}.</b></p>
            </div>
        </div>
    );
}