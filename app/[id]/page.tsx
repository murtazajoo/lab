"use client";
import ReportCardHolder from "@/components/report-card-holder";
import ReportCard from "@/components/report/report-card";
import ReportHeader from "@/components/report/report-header";
import { Button } from "@/components/ui/button";
import useTestReportStore from "@/lib/store/testStore";
import TEMPLATES from "@/lib/templates";
import Link from "next/link";

import { useParams } from "next/navigation";
// import { QRCodeSVG } from "qrcode.react";
export default function Home() {
    const { id } = useParams();
    const { addRow } = useTestReportStore((state) => state);

    return (
        <div className="bg-black text-white flex justify-center items-center flex-col">
            <div className="w-[210mm] flex justify-between">
                <Link href={"/"}>
                    <Button variant={"link"} className="text-white ">
                        Go Back
                    </Button>
                </Link>

                <h2>
                    <span className="text-7xl uppercase">
                        {" "}
                        {
                            TEMPLATES.find(
                                (t) => t.id === parseInt(id as string)
                            )?.test_type
                        }
                    </span>{" "}
                    Template
                </h2>
            </div>
            <ReportCardHolder>
                <ReportHeader />
                <ReportCard templateID={id as string} />
            </ReportCardHolder>
            <div className="flex gap-2 justify-end w-[210mm] py-3 ">
                <Button onClick={addRow} variant={"secondary"}>
                    Add Row
                </Button>
            </div>
        </div>
    );
}
