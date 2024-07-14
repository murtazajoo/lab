"use server";

export async function CheckPassCode(passCode: String) {
    if (passCode === "1234") {
        return true;
    } else {
        return false;
    }
}
