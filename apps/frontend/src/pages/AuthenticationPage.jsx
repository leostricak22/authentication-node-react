export default function AuthenticationPage() {
    return (
        <>
            <form>
                <h1>Login</h1>
                <label>Username</label>
                <input type="text" placeholder="Email"/>
                <label>Email</label>
                <input type="password" placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
        </>
    );
}