const TEMPLATES: {
    id: number;
    test_type: string;
    results: {
        test_name: string;
        result: number;
        unit: string;
        normal_range: string;
        bold: false;
    }[];
}[] = [
    {
        id: 0,
        test_type: "Blank",
        results: [
            {
                test_name: "Test name",
                result: 0,
                unit: "unit",
                normal_range: "--",
                bold: false,
            },
        ],
    },
    {
        id: 1,
        test_type: "LFT",
        results: [
            {
                test_name: "Sr. bilirubin",
                result: 0,
                unit: "Mg/dl",
                normal_range: "0.2 - 1.5",
                bold: false,
            },
            {
                test_name: "Total protein",
                result: 0,
                bold: false,
                unit: "Mg/dl",
                normal_range: "6.0 - 8.0",
            },
            {
                test_name: "Albumin",
                result: 0,
                bold: false,
                unit: "Mg/dl",
                normal_range: "3.8 - 5.0",
            },
            {
                test_name: "Globulin",
                result: 0,
                bold: false,
                unit: "Mg/dl",
                normal_range: "2.3 - 3.5",
            },
            {
                test_name: "Alk.Phosphate",
                result: 0,
                bold: false,
                unit: "Mg/dl",
                normal_range: "80 - 306",
            },
            {
                test_name: "S.G.O.T",
                result: 0,
                bold: false,
                unit: "Mg/dl",
                normal_range: "05 - 40",
            },
            {
                test_name: "S.G.P.T",
                result: 0,
                bold: false,
                unit: "Mg/dl",
                normal_range: "08 - 50",
            },
        ],
    },
    {
        id: 2,
        test_type: "Blood Test",
        results: [
            {
                test_name: "Sr. Triglycerides",
                result: 0,
                bold: false,
                unit: "Mg/dl",
                normal_range: "40 - 165",
            },
            {
                test_name: "Sr. Cholesterol",
                result: 0,
                bold: false,
                unit: "Mg/dl",
                normal_range: "120 - 230",
            },
            {
                test_name: "Blood Sugar [F]",
                result: 0,
                bold: false,
                unit: "Mg/dl",
                normal_range: "70-110",
            },
            {
                test_name: "Hemoglobin",
                result: 0,
                bold: false,
                unit: "Gm%",
                normal_range: "11.5-14.5",
            },
        ],
    },
];
export default TEMPLATES;
