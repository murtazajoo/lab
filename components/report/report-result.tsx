import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import useTestReportStore from "@/lib/store/testStore";
import ReportRow from "./report-row";
export default function ReportResult() {
    const { test_report, updateTestReportResult } = useTestReportStore(
        (state) => state
    );

    return (
        <div className="mt-10 ">
            <Table className="w-[200mm] mx-auto">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Test Name</TableHead>
                        <TableHead>Result</TableHead>
                        <TableHead>Unit</TableHead>
                        <TableHead className="text-right pr-0">
                            Normal Range
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {test_report.result.length > 0 &&
                        test_report.result.map((res, i) => (
                            <ReportRow
                                index={i}
                                res={res}
                                key={res.normal_range}
                            />
                        ))}
                </TableBody>
            </Table>
        </div>
    );
}
