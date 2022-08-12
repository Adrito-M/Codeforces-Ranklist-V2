export default function DropDown({ options, label, setter }) {
    return (
        <div>
            <label htmlFor={label} className="inline-block w-[35%]">{label}:</label>
            <select name={label} id={label} onChange={() => setter(event.target.value)} className="inline-block w-[60%]">
                {options.map(option => <option value={option} key={option}>{option}</option>)}
            </select>
        </div>
    )
}
