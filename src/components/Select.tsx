import React from "react"

interface OptionObject {
		key?: string | number
		label?: string | number
}

interface SelectProps {
	label?: string
	options?: Array<OptionObject>
	value?: string | number
}

const Select = ({ label, options, value }: SelectProps) => {
	return (
		<label className="select" htmlFor={label}>
			<span className="text-secondary">{label}</span>
			<select id={label}>
				{options?.map((i:OptionObject, k:number) => (
					<option value={i.key || 0}>{i.label}</option>
				))}
			</select>
		</label>
	)
}

export default Select