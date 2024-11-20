import {Form, Link, useSearchParams} from "react-router-dom";

export default function AuthForm() {
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';

    return (
        <>
            <Form method="post">
                <h1>{isLogin ? "Login" : "Sign up"}</h1>
                <label>Email</label>
                <input id="email" name="email" type="text" placeholder="Email"/>
                <label>Password</label>
                <input id="password" name="password" type="password" placeholder="Password"/>
                <button>Login</button>
                <Link className="no-account" to={`?mode=${isLogin ? "signup" : "login"}`}>
                    {
                        isLogin ? "Don't have an account?" : "Already have an account?"
                    }
                </Link>
            </Form>
        </>
    );
}