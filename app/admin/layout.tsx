"use client";

import { auth } from "@/lib/firebase/firbaseConfig";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        if (error) {
            console.error(error);
        }
    }, [error]);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: </p>;
    }
    if (!user) {
        return <p>Not logged in</p>;
    }

    return <>{children};</>;
}
