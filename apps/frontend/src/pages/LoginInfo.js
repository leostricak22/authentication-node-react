import {useRouteLoaderData} from "react-router-dom";

export default function LoginInfo() {
    const token = useRouteLoaderData('root');

    return (
        <div>
            <h1>Login Information</h1>
            <p>Token: <pre>{token}</pre></p>
        </div>
    );
}