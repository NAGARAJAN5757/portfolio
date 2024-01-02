import {GithubIcon, LinkedinIcon} from "lucide-react"
import React from "react"

export default function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className="mt-4 flex p-4 justify-around">
			<div>&copy; Copyright {year} NAGARAJAN R J</div>
			<div className="flex gap-4 relative bottom-1">
				<a
					href="https://www.linkedin.com/in/nagarajan-r-j-76a94a217"
					target="_blank"
				>
					<LinkedinIcon />
				</a>
				<a href="https://github.com/NAGARAJAN5757" target="_blank">
					<GithubIcon />
				</a>
			</div>
		</footer>
	)
}
