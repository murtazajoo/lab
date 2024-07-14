export default function Widal() {
    return (
        <div className="mt-10 border p-3">
            <div className="flex">
                <h1 className="text-xl mr-3">WIDAL:</h1>
                <select>
                    <option value={"Significant"}>Significant</option>
                    <option value={"Insignificant"}>Insignificant</option>
                    <option value={"Slightly Significant"}>
                        Slightly Significant
                    </option>
                </select>
            </div>
            <div className="w-[200mm] mx-auto flex mt-10">
                <div className="flex justify-center items-center flex-col">
                    <div className="flex justify-between ">
                        TO:{" "}
                        <input
                            className="pl-4"
                            type="text"
                            defaultValue={"1:"}
                        />
                    </div>
                    <div className="flex justify-between ">
                        TH:{" "}
                        <input
                            className="pl-4"
                            type="text"
                            defaultValue={"1:"}
                        />
                    </div>
                    <div className="flex justify-between ">
                        AH:{" "}
                        <input
                            className="pl-4"
                            type="text"
                            defaultValue={"1:"}
                        />
                    </div>{" "}
                    <div className="flex justify-between ">
                        BH:{" "}
                        <input
                            className="pl-4"
                            type="text"
                            defaultValue={"1:"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
