import {useState} from "react";
import {getAuthToken} from "../util/auth";

export default function FetchRoutesPage() {
    const [status, setStatus] = useState(null);
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchRoute = async (route) => {
        setLoading(true);

        try {
            console.log(process.env.REACT_APP_API_URL+route);
            const response = await fetch(process.env.REACT_APP_API_URL+route, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + getAuthToken()
                }
            });
            const data = await response.json();

            setResponse(data);
            setStatus(response.status);
        } catch (error) {
            setResponse(error);

        }

        setLoading(false);
    }

    return (
        <div className="fetch-routes-container">
            <h1>Fetch routes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Route description</th>
                        <th>Route URL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Check if user is authenticated</td>
                        <td><p onClick={() => fetchRoute("/test/unprotected-route")} className="link">/test/unprotected-route</p></td>
                    </tr>
                    <tr>
                        <td>Login user</td>
                        <td><p onClick={() => fetchRoute("/test/protected-route")} className="link">/test/protected-route</p></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <h2>Response</h2>
                <pre>{response === null ? "Click on a link to get a response." : loading ? "Loading..." : ("Message\t" + response?.message + " \nStatus\t" + status)}</pre>
            </div>
        </div>
    );
}