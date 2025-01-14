
const GenderCheckbox = ({ selectedGender, onCheckboxChange }: { selectedGender: string, onCheckboxChange: (gender: "male" | "female") => void }) => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-text">Male</span>
                    <input
                        onChange={() => onCheckboxChange("male")}
                        type="checkbox"
                        checked={selectedGender === "male"}
                        className="checkbox border-slate-900" />
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-text">Female</span>
                    <input
                        onChange={() => onCheckboxChange("female")}
                        type="checkbox"
                        checked={selectedGender === "female"}
                        className="checkbox border-slate-900" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox