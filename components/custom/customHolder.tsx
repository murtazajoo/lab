import Link from "next/link";
import React from "react";
import ReportCardHolder from "../report-card-holder";
import ReportHeader from "../report/report-header";
import { Button } from "../ui/button";

export default function CustomHolder({
    children,
    temopName,
}: {
    children: React.ReactNode;
    temopName: string;
}) {
    return (
        <div className="bg-black text-white flex justify-center items-center flex-col">
            <div className="w-[210mm] flex justify-between">
                <Link href={"/"}>
                    <Button variant={"link"} className="text-white ">
                        Go Back
                    </Button>
                </Link>

                <h2>
                    <span className="text-7xl uppercase">{temopName}</span>{" "}
                    Template
                </h2>
            </div>
            <ReportCardHolder>
                <ReportHeader />
                {children}
                <div className="h-10"></div>
            </ReportCardHolder>
        </div>
    );
}
