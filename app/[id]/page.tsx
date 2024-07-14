"use client";
import ReportCard from "@/components/report/report-card";
import { Button } from "@/components/ui/button";
import useTestReportStore from "@/lib/store/testStore";
import TEMPLATES from "@/lib/templates";
import { Printer } from "lucide-react";
import Link from "next/link";

import { useParams } from "next/navigation";
// import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
export default function Home() {
    const { id } = useParams();
    const { addRow } = useTestReportStore((state) => state);
    const printRef: any = useRef();
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

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
            <main
                ref={printRef}
                className="h-[11.69in]  text-black w-[8.27in] border  pt-[5cm] px-[2.95mm]  bg-white "
            >
                <ReportCard templateID={id as string} />
                {/* 
                <QRCodeSVG
                    value={
                        "https://picturesofpeoplescanningsdfghdfghdfghfghfghfghfghdfghfghfghfghfghfghfghfghghfghfggfhddhdhgqrcodes.tumblr.com/"
                    }
                    size={128}
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    level={"L"}
                    includeMargin={true}
                /> */}
            </main>
            <div className="flex gap-2 justify-end w-[210mm] py-3 ">
                <Button onClick={addRow} variant={"secondary"}>
                    Add Row
                </Button>
                <Button onClick={handlePrint} variant={"default"}>
                    <Printer />
                    Print
                </Button>
            </div>
        </div>
    );
}
