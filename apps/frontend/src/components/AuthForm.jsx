import {Form, Link, useActionData, useNavigation, useSearchParams} from "react-router-dom";

export default function AuthForm() {
    const data = useActionData();
    const navigation = useNavigation();

    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';
    const isSubmitting = navigation.state === 'submitting';

    return (
        <>
            <Form method="post">
                <h1>{isLogin ? "Login" : "Sign up"}</h1>
                {
                    data && data.errors &&
                    <ul className="error-list">
                        {Object.values(data.errors).map((message, index) => (
                            <li className="error" key={index}>{message}</li>
                        ))}
                    </ul>
                }
                <label>Email</label>
                <input id="email" name="email" type="text" placeholder="Email"/>
                <label>Password</label>
                <input id="password" name="password" type="password" placeholder="Password"/>
                <button disabled={isSubmitting}>{isSubmitting ? "Submitting..." : (isLogin ? "Login" : "Sign up")}</button>
                <Link className="no-account" to={`?mode=${isLogin ? "signup" : "login"}`}>
                    {
                        isLogin ? "Don't have an account?" : "Already have an account?"
                    }
                </Link>
            </Form>
        </>
    );
}