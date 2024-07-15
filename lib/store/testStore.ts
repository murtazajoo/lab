import { create } from "zustand";

export interface TestReportStore {
    test_report: {
        id: number;
        temp_id: string;
        name: string;
        sex: string;
        age: string;
        r_o: string;
        patient_id: string;
        collected_on: Date;
        reported_on: Date;
        r_lab_no: string;
        ref_by_doc: string;
        result: {
            test_name: string;
            result: number;
            unit: string;
            normal_range: string;
            bold: boolean;
        }[];
    };
    updateTestReport: (newTestReport: TestReportStore["test_report"]) => void;
    updateTestReportResult: (
        newResult: TestReportStore["test_report"]["result"]
    ) => void;
    addRow: (test: {
        test_name: string;
        result: number;
        unit: string;
        normal_range: string;
        bold: boolean;
    }) => void;
}

const useTestReportStore = create<TestReportStore>((set) => ({
    test_report: {
        id: 1,
        name: "",
        temp_id: "",
        sex: "",
        age: "",
        r_o: "",
        patient_id: "",
        collected_on: new Date(),
        reported_on: new Date(),
        r_lab_no: "",
        ref_by_doc: "",
        result: [],
    },
    updateTestReport: (newTestReport) => set({ test_report: newTestReport }),
    updateTestReportResult: (newResult) =>
        set((state) => ({
            test_report: { ...state.test_report, result: newResult },
        })),
    addRow: (test: {
        test_name: string;
        result: number;
        unit: string;
        normal_range: string;
        bold: boolean;
    }) =>
        set((state) => ({
            test_report: {
                ...state.test_report,
                result: [...state.test_report.result, test],
            },
        })),
}));

export default useTestReportStore;
