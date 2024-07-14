import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function RF() {
    const rf = [
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
    ];
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
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
