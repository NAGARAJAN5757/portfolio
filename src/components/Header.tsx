import React from "react"
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from "@nextui-org/react"

export default function App() {
	const menuItems = [
		{
			id: "#hero",
			item: "About me",
		},
		{
			id: "#education",
			item: "Education",
		},
		{
			id: "#skills",
			item: "Skills",
		},
		{
			id: "#projects",
			item: "Projects",
		},
	]
	return (
		<Navbar position="static">
			<NavbarBrand>
				<p className="font-bold text-inherit">NAGARAJAN R J</p>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{menuItems.map((menuItem, index) => {
					return (
						<NavbarItem key={index}>
							<Link color="foreground" href={menuItem.id}>
								{menuItem.item}
							</Link>
						</NavbarItem>
					)
				})}
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Button
						as={Link}
						download={"nagacv"}
						color="primary"
						variant="flat"
						href="/nagarajanrj_cv.pdf"
					>
						Download CV
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	)
}
