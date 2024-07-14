import { Printer } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "./ui/button";

export default function ReportCardHolder({
    children,
}: {
    children: React.ReactNode;
}) {
    const printRef: any = useRef();
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });
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
            </main>
            <Button onClick={handlePrint} variant={"default"}>
                <Printer />
                Print
            </Button>
        </>
    );
}
