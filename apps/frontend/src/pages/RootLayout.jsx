import {Outlet, useLoaderData, useSubmit} from "react-router-dom";
import Navigation from "../components/Navigation";
import React, {useEffect} from "react";
import {getTokenDuration} from "../util/auth";

export default function RootLayout() {
    const token = useLoaderData();
    const submit = useSubmit();

    useEffect(() => {
        if (!token)
            return;

        if(token === "EXPIRED") {
            submit(null, {action: "/logout", method: "POST"});
            return;
        }

        const tokenDuration = getTokenDuration();
        console.log(tokenDuration)

        setTimeout(() => {
            submit(null, {action: "/logout", method: "POST"});
        }, tokenDuration);

    }, [token, submit]);

    return (
        <>
            <Navigation />
            <main className="container">
                <Outlet />
            </main>
        </>
    );
};