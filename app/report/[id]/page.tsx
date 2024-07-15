"use client";
import ReportCardHolder from "@/components/report-card-holder";
import ReportCard from "@/components/report/report-card";
import ReportHeader from "@/components/report/report-header";
import { getReport } from "@/lib/firebase/firebase";
import useTestReportStore from "@/lib/store/testStore";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Report() {
    const { id } = useParams();
    const { test_report, updateTestReport } = useTestReportStore(
        (state) => state
    );
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const fetchReport = async () => {
            setLoading(true);
            try {
                const res = await getReport(id as string);
                if (res) {
                    updateTestReport(res);
                }
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };
        fetchReport();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (!test_report) {
        return <p>Report not found </p>;
    }

    return (
        <ReportCardHolder>
            <ReportHeader />
            <ReportCard templateID={test_report.temp_id} />
        </ReportCardHolder>
    );
}
