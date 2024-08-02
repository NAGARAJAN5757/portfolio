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
import ThemeSwitch from "./ThemeMode"
import { menuItems } from "@/data/data"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    console.log(isMenuOpen)

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={() => {
                setIsMenuOpen(!isMenuOpen)
            }}
            shouldHideOnScroll
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit">NAGARAJAN R J</p>
                </NavbarBrand>
            </NavbarContent>

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
                <NavbarItem className="cursor-pointer">
                    <ThemeSwitch />
                </NavbarItem>
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
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {menuItem.item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}
