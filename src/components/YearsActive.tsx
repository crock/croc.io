import * as React from "react"
import moment from "moment"

interface YearsActiveProps {
	startDate: string | number
	endDate?: string | number | null | undefined
}

const YearsActive = ({ startDate, endDate = null }: YearsActiveProps) => {
	const startYear = moment(startDate, "YYYYMMDD").format("YYYY")
	const endYear = endDate
		? moment(endDate, "YYYYMMDD").format("YYYY")
		: "Present"
	const startMonth = moment(startDate, "YYYYMMDD").format("MMM")
	const endMonth = endDate ? moment(endDate, "YYYYMMDD").format("MMM") : null

	return (
		<div className="flex flex-row flex-nowrap justify-end items-center">
			<div className="text-xs font-light uppercase text-black dark:text-white">
				<span>{startMonth}</span>
				{` `}
				<span>{startYear}</span>
			</div>
			<span className="mx-1 text-black dark:text-white">{`-`}</span>
			<div className="text-xs font-light uppercase text-black dark:text-white">
				{endMonth ? <span>{endMonth}</span> : null}
				{` `}
				{endYear ? <span>{endYear}</span> : null}
			</div>
		</div>
	)
}

export default YearsActive
