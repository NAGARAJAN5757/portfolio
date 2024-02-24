import {Button, Divider, Chip, Link} from "@nextui-org/react"
import React from "react"
import Image from "next/image"

export default function Projects() {
	const projects = [
		{
			title: "All in One PDF Manager",
			Image: "/pdfLogo.png",
			description:
				"It is a pdf manager which is useful to merge, remove, split the pdf pages. It is very useful in day to day life. It is made with Java Swing and Apache PDF-BOX. Java Swing is used for GUI and APACHE PDF-BOX is used for pdf processing.",
			technologies: ["JAVA SWING", "APACHE PDF BOX"],
			link: "https://github.com/NAGARAJAN5757/ALL-IN-ONE-PDF",
		},
		{
			title: "Stylish QRCODE Generator",
			Image: "/qrLogo.png",
			description:
				"A colorful QR CODE Generator which is used to create stylish QRCodes for links, text datas, etc. It is created using HTML, CSS and JS. It uses Stylish QRcode Library for styling qrcodes.",
			technologies: ["HTML", "CSS", "JAVASCRIPT"],
			link: "https://github.com/NAGARAJAN5757/qrcodegenerator",
		},
		{
			title: "Movies World",
			Image: "/mvLogo.png",
			description:
				"This is a NextJS project which is used to gather information from OMDB api and delivers it with amazing UI using shadcn ui and tailwindcss.",
			technologies: ["NEXTJS", "TAILWINDCSS", "TYPESCRIPT"],
			link: "https://github.com/NAGARAJAN5757/Movies-World",
		},
	]

	return (
		<section className="out-container" id="projects">
			<div className="inner-container">
				<div className="text-2xl pb-4 text-center flex justify-center">
					Projects
				</div>
				{projects.map((project, index) => {
					return (
						<div
							key={index}
							className="dark:bg-[#18181B] bg-[#FFFFFF] flex flex-col rounded-lg mt-2"
						>
							<div className="flex justify-center p-4">
								{project.title}
							</div>
							<Divider />
							<div className="flex flex-col sm:flex-row">
								<div className="flex justify-center">
									<Image
										src={project.Image}
										alt="pdf"
										width={120}
										height={120}
										className="w-[50vw] h-[25%] sm:w-[35vw] sm:h-[30vh] p-4"
									/>
								</div>
								<p className="flex self-center p-4">
									{project.description}
								</p>
							</div>
							<Divider />
							<div className="p-3 flex justify-around flex-wrap md:flex-nowrap">
								<Button
									size="md"
									color="primary"
									as={Link}
									href={project.link}
									target="_blank"
								>
									View Source Code
								</Button>
								<div className="flex pt-2 gap-4">
									{project.technologies.map(
										(technology, index) => {
											return (
												<Chip key={index} color="secondary" size="sm">
													{technology}
												</Chip>
											)
										}
									)}
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}
