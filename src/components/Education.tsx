import React from "react"
import EduDetail from "./EduDetail"

export type EduDetail = {course: string; courseDetail: string}

export default function Education() {
	const eduDetails: EduDetail[] = [
		{
			course: "B.E Electronics and Communication Engineering",
			courseDetail:
				"2020 to 2024 at Velammal College of Engineering and Technology, Madurai, TamilNadu, India",
		},
		{
			course: "Higher Secondary Education",
			courseDetail:
				"2019 to 2020 at Sourashtra Higher Secondary School, Madurai, TamilNadu, India",
		},
		{
			course: "Secondary School Education",
			courseDetail:
				"2017 to 2018 at Sourashtra Higher Secondary School, Madurai, TamilNadu, India",
		},
	]

	return (
		<section className="out-container" id="education">
			<div className="in-container">
				<div className="text-2xl pb-4 flex justify-center">
					Education
				</div>
				<div className="flex justify-start flex-col">
					{eduDetails.map((eduDetail, index) => {
						return (
							<EduDetail
								key={index}
								index={index}
								eduDetail={eduDetail}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}
