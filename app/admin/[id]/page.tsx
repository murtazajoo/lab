"use client";
import ReportCardHolder from "@/components/report-card-holder";
import ReportCard from "@/components/report/report-card";
import ReportHeader from "@/components/report/report-header";
import { Button } from "@/components/ui/button";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";

import useTestReportStore from "@/lib/store/testStore";
import TEMPLATES from "@/lib/templates";
import TESTS from "@/lib/tests";
import Link from "next/link";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function Home() {
    const { id } = useParams();
    const { addRow } = useTestReportStore((state) => state);
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-black text-white flex justify-center items-center flex-col">
            <div className="w-[210mm] flex justify-between">
                <Link href={"/admin"}>
                    <Button variant={"link"} className="text-white ">
                        Go Back
                    </Button>
                </Link>

                <h2>
                    <span className="text-7xl uppercase">
                        {" "}
                        {
                            TEMPLATES.find(
                                (t) => t.id === parseInt(id as string)
                            )?.test_type
                        }
                    </span>{" "}
                    Template
                </h2>
            </div>
            <ReportCardHolder>
                <ReportHeader />
                <ReportCard templateID={id as string} />
            </ReportCardHolder>
            <div className="flex gap-2 justify-end w-[210mm] py-3 ">
                <Button variant={"secondary"} onClick={() => setOpen(!open)}>
                    Add Row
                </Button>
                <CommandDialog open={open} onOpenChange={setOpen}>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Settings">
                            {TESTS.map((test, i) => (
                                <CommandItem
                                    key={test.test_name}
                                    value={test.test_name}
                                    onSelect={() => {
                                        addRow(TESTS[i]);
                                        setOpen(false);
                                    }}
                                >
                                    {test.test_name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </CommandDialog>
            </div>
        </div>
    );
}
