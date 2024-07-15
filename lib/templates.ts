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
        test_type: "Blood Sugar",
        results: [
            {
                test_name: "BLOOD SUGAR [F]",
                result: 0,
                bold: false,
                unit: "Mg/dl",
                normal_range: "70-110",
            },
            {
                test_name: "Blood Sugar [PP]",
                result: 0,
                bold: false,
                unit: "Mg/dl",
                normal_range: "70-140",
            },
            {
                test_name: "BLOOD SUGAR [R]",
                result: 0,
                bold: false,
                unit: "Mg/dl",
                normal_range: "70-140",
            },
        ],
    },
    {
        id: 3,
        test_type: "Uric Acid",
        results: [
            {
                test_name: "Uric Acid",
                result: 5.82,
                bold: false,
                unit: "Mg/dl",
                normal_range: "3 - 7",
            },
        ],
    },
    {
        id: 4,
        test_type: "KFT New",
        results: [
            {
                test_name: "Blood Urea",
                result: 21.24,
                unit: "Mg/dl",
                normal_range: "15 - 50",
                bold: false,
            },
            {
                test_name: "Sr. Creatinine",
                result: 0.76,
                unit: "Mg/dl",
                normal_range: "0.5 - 1.5",
                bold: false,
            },
        ],
    },
    {
        id: 5,
        test_type: "Lipid Profile",
        results: [
            {
                test_name: "Sr. Triglycerides",
                result: 0,
                unit: "Mg/dl",
                normal_range: "40 - 165",
                bold: false,
            },
            {
                test_name: "Sr. Cholesterol",
                result: 0,
                unit: "Mg/dl",
                normal_range: "120 - 230",
                bold: false,
            },
            {
                test_name: "LDL",
                result: 0,
                unit: "Mg/dl",
                normal_range: "-190",
                bold: false,
            },
            {
                test_name: "HDL Cholesterol",
                result: 0,
                unit: "Mg/dl",
                normal_range: "30 - 100",
                bold: false,
            },
            {
                test_name: "VLDL",
                result: 0,
                unit: "Mg/dl",
                normal_range: "20 - 40",
                bold: false,
            },
        ],
    },
    {
        id: 6,
        test_type: "U Pro",
        results: [
            {
                test_name: "Total Value",
                result: 0,
                unit: "ml/24 Hrs",
                normal_range: "800 - 2000 ml/24 Hrs",
                bold: false,
            },
            {
                test_name: "Total Protein",
                result: 0,
                unit: "mg/24 Hrs",
                normal_range: "30 - 150 mg/24 Hrs",
                bold: false,
            },
        ],
    },
];
export default TEMPLATES;
