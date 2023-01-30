import React from "react"

export default function PayloadParameterInputPair({
	parameters,
	pairId,
	setParameterName,
	setParameterValue,
}) {
	const { name, value } = parameters

	return (
		<div className="grid grid-cols-2 gap-4 mt-2">
			<input
				type="text"
				defaultValue={""}
				value={name}
				onChange={(e) => setParameterName(pairId, e.target.value)}
				placeholder={`Parameter ${pairId}`}
				name={`parameter${pairId}`}
				id={`parameter${pairId}`}
			/>
			<input
				type="text"
				defaultValue={""}
				value={value}
				onChange={(e) => setParameterValue(pairId, e.target.value)}
				placeholder={`Value ${pairId}`}
				name={`value${pairId}`}
				id={`value${pairId}`}
			/>
		</div>
	)
}
