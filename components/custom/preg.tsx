import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function Preg() {
    const preg = [
        {
            test_name: "HEPATITIS B SURFACE ANTIGEN [HBSAG]  ",
            options: ["Positive", "Negative"],
        },
        {
            test_name: "HUMAN IMMUNO DEFICIENCY VIRUS [HIV]",
            options: ["Positive", "Negative"],
        },
        {
            test_name: "HEPATITIS C VIRUS [HCV] ",
            options: ["Positive", "Negative"],
        },
        {
            test_name: "VENEREAL DISEASE R. L. [VDRL]  ",
            options: ["Reactive", "Non-Reactive"],
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
                    {preg.map((res, i) => (
                        <TableRow className="group relative w-[200mm]" key={i}>
                            <TableCell className="font-medium p-0 ">
                                {res.test_name}
                            </TableCell>
                            <TableCell className=" p-3">
                                <select name="result" className="w-[40mm]">
                                    {res.options.map((option, i) => (
                                        <option key={i}>{option}</option>
                                    ))}
                                </select>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
