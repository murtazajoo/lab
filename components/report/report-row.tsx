import { TableCell, TableRow } from "@/components/ui/table";
import useTestReportStore from "@/lib/store/testStore";
import { cn } from "@/lib/utils";
import { BoldIcon, Trash } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export default function ReportRow({
    res,
    index,
}: {
    index: number;
    res: {
        test_name: string;
        result: number;
        unit: string;
        normal_range: string;
        bold: boolean;
    };
}) {
    const { test_report, updateTestReportResult } = useTestReportStore(
        (state) => state
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        const newResult = test_report.result.map((res, i) =>
            i === index ? { ...res, [name]: value } : res
        );
        updateTestReportResult(newResult);
    };

    const removeRow = () => {
        if (!confirm("Are you sure you want to delete this row?")) return;
        const newResult = test_report.result.filter((_, i) => i !== index);
        updateTestReportResult(newResult);
    };

    const boldResult = () => {
        const newResult = test_report.result.map((res, i) =>
            i === index ? { ...res, bold: !res.bold } : res
        );
        updateTestReportResult(newResult);
    };

    return (
        <TableRow className="group relative w-[200mm]">
            <TableCell className="font-medium p-0 ">
                <input
                    name="test_name"
                    className="w-[40mm]"
                    value={res.test_name}
                    onChange={handleChange}
                />
            </TableCell>
            <TableCell className=" p-3">
                <input
                    name="result"
                    placeholder="0"
                    className={cn("w-[40mm]", { "font-extrabold": res.bold })}
                    value={res.result}
                    onChange={handleChange}
                />
            </TableCell>
            <TableCell className=" p-3">
                {" "}
                <input
                    name="unit"
                    className="w-[40mm]"
                    value={res.unit}
                    onChange={handleChange}
                />
            </TableCell>
            <TableCell className="text-right p-3">
                <input
                    name="normal_range"
                    className="w-[40mm] text-right"
                    value={res.normal_range}
                    onChange={handleChange}
                />
            </TableCell>
            <p className="hidden group-hover:flex gap-1 justify-end absolute right-0 opacity-5 hover:opacity-100  top-1/2 -translate-y-1/2">
                <Button
                    variant={"destructive"}
                    className=" hover:opacity-100"
                    size={"icon"}
                    onClick={removeRow}
                >
                    <Trash size={15} className="p-0" />
                </Button>
                <Button
                    size={"icon"}
                    variant={"default"}
                    className=" hover:opacity-100"
                    onClick={boldResult}
                >
                    <BoldIcon />
                </Button>
            </p>
        </TableRow>
    );
}
