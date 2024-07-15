import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function RF() {
    const [rf, setRef] = useState([
        {
            test_name: "RHEUMATOID FACTOR (RF)   ",
            options: ["Positive", "Negative", "Positive-Titer"],
        },
        {
            test_name: "C-REACTIVE PROTIEN (CRP)",
            options: ["Positive", "Negative", "Positive-Titer"],
        },
        {
            test_name: "ESR WINTROBES METHOD",
            options: [],
        },
    ]);
    function removeRow(i: number) {
        setRef(rf.filter((_, index) => index !== i));
    }
    return (
        <div>
            <Table className="w-[200mm] mx-auto">
                <TableHeader>
                    <TableRow>
                        <TableHead>Test Name</TableHead>
                        <TableHead>Result</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rf.map((res, i) => (
                        <TableRow className="group relative w-[200mm]" key={i}>
                            <TableCell className="font-medium p-0 ">
                                {res.test_name}
                            </TableCell>
                            <TableCell className=" p-3">
                                <div className="flex">
                                    <select name="result" className="w-fit">
                                        {res.options.map((option, i) => (
                                            <option key={i}>{option}</option>
                                        ))}
                                    </select>
                                    <input type="text" />
                                </div>
                            </TableCell>
                            <p className="hidden group-hover:flex gap-1 justify-end absolute right-0 opacity-5 hover:opacity-100  top-1/2 -translate-y-1/2">
                                <Button
                                    variant={"destructive"}
                                    className=" hover:opacity-100"
                                    size={"icon"}
                                    onClick={() => removeRow(i)}
                                >
                                    <Trash size={15} className="p-0" />
                                </Button>
                            </p>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
