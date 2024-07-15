import { auth } from "@/lib/firebase/firbaseConfig";
import { addReport } from "@/lib/firebase/firebase";
import useTestReportStore from "@/lib/store/testStore";
import { Printer } from "lucide-react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useReactToPrint } from "react-to-print";
import { Button } from "./ui/button";
export default function ReportCardHolder({
    children,
}: {
    children: React.ReactNode;
}) {
    const { test_report, updateTestReport } = useTestReportStore(
        (state) => state
    );
    const printRef: any = useRef();
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });
    const handleSave = async () => {
        try {
            const id: string = await addReport(test_report);
            updateTestReport({
                ...test_report,
                patient_id: id,
            });
            //fake 1sec promise
            await new Promise((res) => {
                setTimeout(() => {
                    res("");
                }, 1000);
            });
            handlePrint();
        } catch (error) {
            console.error(error);
        }
    };
    const [user] = useAuthState(auth);
    return (
        <>
            <main
                ref={printRef}
                className="h-[11.69in] relative main-card text-black w-[8.27in] border    bg-white "
            >
                <p className="absolute right-20 bottom-36 opacity-50">
                    Signature
                </p>
                <Image
                    src={"/mid.png"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="absolute bottom-[60mm] opacity-50 right-0 object-cover w-[30mm] h-[160mm]"
                />
                <Image
                    src={"/head.png"}
                    alt=""
                    className="w-[210mm]"
                    width={1200}
                    height={1000}
                />
                <div className="h-2"></div>
                {children}
                <Image
                    src={"/foot.png"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="absolute bottom-0 w-[210mm]"
                />
                <div className="absolute bottom-24 left-2">
                    {test_report.patient_id && (
                        <QRCodeSVG
                            value={`https://smdiagnostics.vercel.app/report/${test_report.patient_id}`}
                            size={100}
                        />
                    )}
                </div>
            </main>
            {user && (
                <Button onClick={handleSave} variant={"default"}>
                    <Printer />
                    Save
                </Button>
            )}
        </>
    );
}
