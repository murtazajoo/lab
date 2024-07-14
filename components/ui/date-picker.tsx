import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useEffect, useState } from "react";
export default function DatePicker({
    onChange,
    defaultDate,
}: {
    onChange: (date: Date) => void;
    defaultDate?: Date;
}) {
    const [date, setDate] = useState<Date>();

    useEffect(() => {
        if (defaultDate) {
            onChange(defaultDate);
        }
    }, [defaultDate]);

    useEffect(() => {
        if (date) {
            onChange(date);
        }
    }, [date]);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <p
                    className={cn(
                        "w-[280px] p-0  justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </p>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}
