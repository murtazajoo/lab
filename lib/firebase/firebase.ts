import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { TestReportStore } from "../store/testStore";
import { db } from "./firbaseConfig";

export const addReport = async (report: any): Promise<string> => {
    const reportRef = doc(collection(db, "reports"));
    try {
        if (report.name == "") return "";
        const t = await setDoc(reportRef, report);
        console.log("Document written with ID: ", reportRef.id);
        return reportRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        return "";
    }
};

export const getReport = async (
    id: string
): Promise<TestReportStore["test_report"] | null> => {
    const docRef = doc(db, "reports", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data();
        const r = {
            ...data,
            collected_on: new Date(data.collected_on.seconds * 1000),
            reported_on: new Date(data.reported_on.seconds * 1000),
            patient_id: id,
        };
        return r as TestReportStore["test_report"];
    } else {
        console.log("No such document!");
        return null;
    }
};
