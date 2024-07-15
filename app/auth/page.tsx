"use client";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase/firbaseConfig";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export default function Login() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { push } = useRouter();

    useEffect(() => {
        if (user) {
            push("/admin");
        }
    }, [user, loading]);

    return (
        <div className="min-h-screen grid place-content-center ">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {user && <p>Welcome, {user.user.displayName}</p>}
            <Button onClick={() => signInWithGoogle()}>
                Login with Google
            </Button>
        </div>
    );
}
