"use client"
import React from "react"
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react"

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

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
		<header>
			<Navbar onMenuOpenChange={setIsMenuOpen}>
				<NavbarContent>
					<NavbarMenuToggle
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						className="sm:hidden"
					/>
					<NavbarBrand>
						<p className="font-bold text-inherit">NAGARAJAN R J</p>
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent
					className="hidden sm:flex gap-4"
					justify="center"
				>
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
				<NavbarMenu>
					{menuItems.map((menuItem, index) => (
						<NavbarMenuItem key={index}>
							<Link
								color={"foreground"}
								className="w-full"
								href={menuItem.id}
								size="lg"
							>
								{menuItem.item}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</Navbar>
		</header>
	)
}
