import React from 'react'

export default function DropDown({ options, label }) {
    return (
        <div>
            <label for={label} className="inline-block w-[35%]">{label}:</label>
            <select name={label} id={label} className="inline-block w-[60%]">
                {options.map(option => <option value={option} key={option}>{option}</option>)}
            </select>
        </div>
    )
}
