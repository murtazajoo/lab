"use client";

import TEMPLATES from "@/lib/templates";
import Link from "next/link";

export default function Home() {
    const custom = [
        {
            name: "Pregnancy",
            url: "preg-profile",
        },
        {
            name: "Widal",
            url: "widal",
        },
        {
            name: "GTT",
            url: "gtt",
        },
        {
            name: "RF",
            url: "rf",
        },
        {
            name: "Stool Exam",
            url: "stool",
        },
        {
            name: "Semen Exam",
            url: "semen",
        },
    ];
    return (
        <div className="bg-black text-white flex justify-center items-center min-h-screen flex-col">
            <h1 className="p-10 text-7xl uppercase">Choose Template</h1>
            <div className="grid grid-cols-4">
                {TEMPLATES.map((template) => (
                    <Link href={`/${template.id} `} key={template.id}>
                        <div className="flex justify-center items-center border w-32 aspect-square hover:bg-white hover:text-black duration-500 hover:text-xl">
                            {" "}
                            {template.test_type}{" "}
                        </div>
                    </Link>
                ))}

                {custom.map((template) => (
                    <Link href={`/${template.url} `} key={template.url}>
                        <div className="flex justify-center items-center border w-32 aspect-square hover:bg-white hover:text-black duration-500 hover:text-xl">
                            {" "}
                            {template.name}{" "}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
