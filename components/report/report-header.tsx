import useTestReportStore from "@/lib/store/testStore";
import React from "react";
import DatePicker from "../ui/date-picker";

export default function ReportHeader() {
    const { test_report, updateTestReport } = useTestReportStore(
        (state) => state
    );

    const {
        name,
        age,
        collected_on,
        reported_on,
        r_lab_no,
        ref_by_doc,
        r_o,
        sex,
        patient_id,
    } = test_report;

    const handleHeaderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        updateTestReport({ ...test_report, [name]: value });
    };

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        updateTestReport({ ...test_report, [name]: value });
    };
    const handleDateChange = (
        date: Date,
        type: "reported_on" | "collected_on"
    ) => {
        updateTestReport({ ...test_report, [type]: date });
    };

    const handleReportDateChange = (date: Date) => {
        handleDateChange(date, "reported_on");
    };

    const handleCollectedDateChange = (date: Date) => {
        handleDateChange(date, "collected_on");
    };

    return (
        <div className="flex justify-between text-sm border p-2">
            <div className="w-1/2">
                <div className="flex gap-2 font-bold ">
                    <p className="w-28 flex justify-between">
                        Name <span>:</span>
                    </p>
                    <input
                        value={name}
                        onChange={handleHeaderChange}
                        type="text"
                        name="name"
                        id=""
                    />
                </div>
                <div className="flex gap-2 ">
                    <p className="w-28 flex justify-between">
                        SEX <span>:</span>
                    </p>
                    <select name="sex" onChange={handleSelectChange}>
                        <option value="M">M</option>
                        <option value="F">F</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="flex gap-2 ">
                    <p className="w-28 flex justify-between">
                        Age <span>:</span>
                    </p>
                    <input
                        value={age}
                        onChange={handleHeaderChange}
                        type="number"
                        maxLength={100}
                        name="age"
                    />
                </div>
                <div className="flex gap-2 ">
                    <p className="w-28 flex justify-between">
                        R/O <span>:</span>
                    </p>
                    <input
                        type="text"
                        name="r_o"
                        value={r_o}
                        onChange={handleHeaderChange}
                    />
                </div>
                {/* <div className="flex gap-2 ">
                    <p className="w-28 flex justify-between text-xs">
                        Report-Id <span>:</span>
                    </p>
                    <input
                        type="text"
                        name="patient_id"
                        value={patient_id}
                        className="min-w-[70mm]"
                        onChange={handleHeaderChange}
                    />
                </div> */}
            </div>
            <div className="w-1/2">
                <div className="flex gap-2 ">
                    <p className="w-28 flex justify-between">
                        Collected on <span>:</span>
                    </p>
                    <DatePicker
                        onChange={handleCollectedDateChange}
                        defaultDate={collected_on}
                    />
                </div>
                <div className="flex gap-2 ">
                    <p className="w-28 flex justify-between">
                        Reported on <span>:</span>
                    </p>
                    <DatePicker
                        onChange={handleReportDateChange}
                        defaultDate={reported_on}
                    />
                </div>
                <div className="flex gap-2 ">
                    <p className="w-28 flex justify-between">
                        R.LAB.NO. <span>:</span>
                    </p>
                    <input
                        type="text"
                        defaultValue={2345852}
                        name="r_lab_no"
                        className="italic"
                    />
                </div>
                <div className="flex gap-2 ">
                    <p className="w-28 flex justify-between">
                        Ref. by Doc. <span>:</span>
                    </p>
                    <input
                        type="text"
                        name="ref_by_doc"
                        value={ref_by_doc}
                        onChange={handleHeaderChange}
                    />
                </div>
            </div>
        </div>
    );
}
