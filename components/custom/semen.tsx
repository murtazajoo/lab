import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";

export default function SemenExam() {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Semen Examination</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Colour</TableCell>
                        <TableCell>
                            <input type="text" defaultValue={"White"} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Reaction</TableCell>
                        <TableCell>
                            <input type="text" defaultValue={"Alkaline"} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell> Quantity</TableCell>
                        <TableCell>
                            <input type="text" defaultValue={"3ml"} />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <div className=" opacity-90  bold border-y pt-10  ">
                Microscopic Examination:
            </div>

            <div className=" opacity-90  bold  pt-5  ">
                Total Supermatazoa count:
                <input
                    type="text"
                    className="text-base px-2 underline opacity-100"
                    defaultValue={"90 million"}
                />
            </div>
            <Table className="mt-10">
                <TableHeader>
                    <TableRow>
                        <TableHead>Mortality</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Active Mortal</TableCell>
                        <TableCell>
                            <input type="text" defaultValue={"75%"} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Non Mortal</TableCell>
                        <TableCell>
                            <input type="text" defaultValue={"15%"} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell> Slugish</TableCell>
                        <TableCell>
                            <input type="text" defaultValue={"10%"} />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <div className=" opacity-90  bold border-t pt-5  ">
                Leucocytes:
                <input
                    type="text"
                    className="text-base px-2 underline opacity-100"
                    defaultValue={"15-20"}
                />
            </div>
        </div>
    );
}
