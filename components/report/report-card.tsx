import useTestReportStore from "@/lib/store/testStore";
import TEMPLATES from "@/lib/templates";
import { useEffect } from "react";
import ReportResult from "./report-result";

export default function ReportCard({ templateID }: { templateID: string }) {
    const { updateTestReportResult } = useTestReportStore((state) => state);

    useEffect(() => {
        const templateData = TEMPLATES.find(
            (t) => t.id === parseInt(templateID)
        );
        if (!templateData) return;
        updateTestReportResult(templateData.results);
    }, []);

    return (
        <div className="relative ">
            <ReportResult />
        </div>
    );
}
