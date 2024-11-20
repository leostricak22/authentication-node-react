import {Outlet} from "react-router-dom";
import Navigation from "../components/Navigation";
import React from "react";

export default function RootLayout() {
    return (
        <>
            <Navigation />
            <main className="container">
                <Outlet />
            </main>
        </>
    );
};