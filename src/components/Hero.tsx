import React from "react"
import Image from "next/image"
export default function Hero() {
	return (
		<article className="out-container" id="hero">
			<div className="flex relative self-center justify-center flex-wrap">
				<Image
					priority
					height={180}
					width={180}
					alt="profile-pic"
					src="/profile.png"
					className="mx-28 h-36 w-36 sm:w-48 sm:h-48 text-large rounded-full"
				/>
			</div>
			<div className="flex flex-col self-center">
				<div className="block text-xl sm:text-2xl">Hi there 👋</div>
				<div className="font-bold text-3xl sm:text-5xl ">
					I&apos;m NAGARAJAN R J
				</div>
				<div className="font-semibold text-2xl sm:text-3xl">
					Software Developer
				</div>
				<p>
					Welcome to my portfolio page! I&apos;m an aspiring software
					developer dedicated to develop innovative and efficient
					products. Passionate about learning new technologies and
					gaining knowledge.
				</p>
			</div>
		</article>
	)
}
