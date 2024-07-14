import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";

export default function Stool() {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Stool Examination</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Colour</TableCell>
                        <TableCell>
                            <input type="text" defaultValue={"Yellowish"} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Consistency</TableCell>
                        <TableCell>
                            <input type="text" defaultValue={"Semisolid"} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell> Blood</TableCell>
                        <TableCell>
                            <input type="text" defaultValue={"Absent"} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell> Mucus</TableCell>
                        <TableCell>
                            <input type="text" defaultValue={"Absent"} />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <div className="text-xl opacity-90  bold border-t pt-5  ">
                Microscopic Examination:
                <input
                    type="text"
                    className="text-base px-2 underline opacity-100"
                    defaultValue={"No Ova or Cyst seen"}
                />
            </div>
        </div>
    );
}
