import React from "react"

export default function Skills() {
	const skills = [
		"Java",
		"C",
		"C++",
		"Python",
		"ReactJS",
		"NextJS",
		"Typescript",
		"TailwindCSS",
		"Mysql",
	]
	return (
		<section className="out-container" id="skills">
			<div className="in-container">
				<div className="text-2xl pb-4">Technical Proficiency</div>

				<ul className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-5 list-disc justify-center">
					{skills.map((skill, index) => {
						return (
							<li key={index} className="">
								<span className="pr-8 relative left-[-6px]">
									{skill}
								</span>
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	)
}
