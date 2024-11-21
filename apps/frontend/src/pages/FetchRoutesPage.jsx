export default function FetchRoutesPage() {
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
                        <td><a href="#">/api/unprotected-route</a></td>
                    </tr>
                    <tr>
                        <td>Login user</td>
                        <td><a href="#">/api/protected-route</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}