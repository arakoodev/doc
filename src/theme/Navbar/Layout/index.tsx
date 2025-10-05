import React, {useState, useEffect, type ReactNode} from "react";
import clsx from "clsx";
import {useThemeConfig} from "@docusaurus/theme-common";
import {useHideableNavbar, useNavbarMobileSidebar} from "@docusaurus/theme-common/internal";
import {translate} from "@docusaurus/Translate";
import {useLocation} from "@docusaurus/router";
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar";
import type {Props} from "@theme/Navbar/Layout";

import styles from "./styles.module.css";

function NavbarBackdrop(props) {
	return <div role='presentation' {...props} className={clsx("navbar-sidebar__backdrop", props.className)} />;
}

export default function NavbarLayout({children}: Props): ReactNode {
	const {
		navbar: {hideOnScroll, style},
	} = useThemeConfig();
	const mobileSidebar = useNavbarMobileSidebar();
	const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll);
	const location = useLocation();

	// Check if current page is home page
	const isHomePage = location.pathname === "/" || location.pathname === "";

	// Add state for scroll detection
	const [isScrolled, setIsScrolled] = useState(false);

	// Add scroll effect
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 80) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			ref={navbarRef}
			aria-label={translate({
				id: "theme.NavBar.navAriaLabel",
				message: "Main",
				description: "The ARIA label for the main navigation",
			})}
			className={clsx(
				"navbar",
				"navbar--fixed-top",
				styles.navbarCustom, // Add a custom class for transitions
				hideOnScroll && [styles.navbarHideable, !isNavbarVisible && styles.navbarHidden],
				{
					"navbar--dark": style === "dark",
					"navbar--primary": style === "primary",
					"navbar-sidebar--show": mobileSidebar.shown,
				},
				// Apply background color and shadow based on scroll state
				isScrolled ? styles.navbarScrolled : styles.navbarTransparent
				// Apply max-width style for home page
			)}
		>
			<div className={`w-full ${isHomePage ? "container-custom md:h-[70px]" : ""}`}>{children}</div>
			<NavbarBackdrop onClick={mobileSidebar.toggle} />
			<NavbarMobileSidebar />
		</nav>
	);
}
