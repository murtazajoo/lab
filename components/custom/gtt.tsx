import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function GTT() {
    return (
        <div>
            <Table className="w-[200mm] mx-auto">
                <TableHeader>
                    <TableRow>
                        <TableHead>Test Name</TableHead>
                        <TableHead>Patient Value</TableHead>
                        <TableHead>Unit</TableHead>
                        <TableHead>Normal</TableHead>
                        <TableHead>Impaired</TableHead>
                        <TableHead>Diabetic</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="group relative w-[200mm]">
                        <TableCell className="font-medium p-0 ">
                            Blood Sugar [F]
                        </TableCell>
                        <TableCell className=" p-3">
                            <input
                                name="result"
                                className="w-[30mm]"
                                type="text"
                                defaultValue={0}
                            />
                        </TableCell>
                        <TableCell className="font-medium p-0 w-[25mm] "></TableCell>
                        <TableCell className=" p-3">
                            <input
                                name="result"
                                className="w-[25mm]"
                                type="text"
                                defaultValue={"60 - 105"}
                            />
                        </TableCell>
                        <TableCell className=" p-3">
                            <input
                                name="result"
                                className="w-[25mm]"
                                type="text"
                                defaultValue={"105 - 126"}
                            />
                        </TableCell>
                        <TableCell className=" p-3">
                            <input
                                name="result"
                                className="w-[25mm]"
                                type="text"
                                defaultValue={">126"}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={5}>
                            AFTER TAKING 75 GRAM OF ORAL GULCOSE SOLUTION
                        </TableCell>
                    </TableRow>
                    <TableRow className="group relative w-[200mm]">
                        <TableCell className="font-medium p-0 ">
                            Blood Sugar [1Hrs]
                        </TableCell>
                        <TableCell className=" p-3">
                            <input
                                name="result"
                                className="w-[25mm]"
                                type="text"
                                defaultValue={0}
                            />
                        </TableCell>
                        <TableCell className="font-medium p-0 w-[25mm] ">
                            MGS/DL
                        </TableCell>
                        <TableCell className=" p-3">
                            <input
                                name="result"
                                className="w-[25mm]"
                                type="text"
                                defaultValue={" < 180"}
                            />
                        </TableCell>

                        <TableCell className=" p-3">
                            <input
                                name="result"
                                className="w-[25mm]"
                                type="text"
                                defaultValue={" > 200"}
                            />
                        </TableCell>
                        <TableCell className=" p-3">
                            <input
                                name="result"
                                className="w-[25mm]"
                                type="text"
                            />
                        </TableCell>
                    </TableRow>

                    <TableRow className="group relative w-[200mm]">
                        <TableCell className="font-medium p-0 w-[60mm]">
                            Blood Sugar [2Hrs]
                        </TableCell>
                        <TableCell className=" p-3">
                            <input
                                name="result"
                                className="w-[25mm]"
                                type="text"
                                defaultValue={0}
                            />
                        </TableCell>
                        <TableCell className="font-medium p-0 w-[25mm] ">
                            MGS/DL
                        </TableCell>
                        <TableCell className=" p-3">
                            <input
                                name="result"
                                className="w-[25mm]"
                                type="text"
                                defaultValue={" < 140"}
                            />
                        </TableCell>
                        <TableCell className=" p-3">
                            <input
                                name="result"
                                className="w-[25mm]"
                                type="text"
                                defaultValue={"140 - 200"}
                            />
                        </TableCell>

                        <TableCell className=" p-3">
                            <input
                                name="result"
                                className="w-[25mm]"
                                type="text"
                                defaultValue={">200"}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
