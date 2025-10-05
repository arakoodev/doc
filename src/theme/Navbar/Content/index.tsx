import React, {type ReactNode} from "react";
import {useThemeConfig, ErrorCauseBoundary} from "@docusaurus/theme-common";
import {splitNavbarItems, useNavbarMobileSidebar} from "@docusaurus/theme-common/internal";
import NavbarItem, {type Props as NavbarItemConfig} from "@theme/NavbarItem";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarSearch from "@theme/Navbar/Search";

import styles from "./styles.module.css";

function useNavbarItems() {
	// TODO temporary casting until ThemeConfig type is improved
	return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({items}: {items: NavbarItemConfig[]}): ReactNode {
	return (
		<>
			{items.map((item, i) => (
				<ErrorCauseBoundary
					key={i}
					onError={error =>
						new Error(
							`A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
							{cause: error}
						)
					}
				>
					<NavbarItem {...item} />
				</ErrorCauseBoundary>
			))}
		</>
	);
}

function NavbarContentLayout({left, right}: {left: ReactNode; right: ReactNode}) {
	return (
		<div className='navbar__inner '>
			<div className='navbar__items'>{left}</div>
			<div className='navbar__items navbar__items--right'>{right}</div>
		</div>
	);
}

export default function NavbarContent(): ReactNode {
	const mobileSidebar = useNavbarMobileSidebar();

	const items = useNavbarItems();
	const [leftItems, rightItems] = splitNavbarItems(items);

	const searchBarItem = items.find(item => item.type === "search");

	return (
		<NavbarContentLayout
			left={
				// TODO stop hardcoding items?
				<div className='flex items-center h-[44px] md:h-auto w-full '>
					<div className='min-w-[160px]'>
						<NavbarLogo />
					</div>

					<div className='flex items-center justify-center w-full'>
						<NavbarItems items={leftItems} />
					</div>
					{!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
				</div>
			}
			right={
				// TODO stop hardcoding items?
				// Ask the user to add the respective navbar items => more flexible
				<>
<NavbarItems items={rightItems} />
<div className="hidden md:inline-block relative group mr-4">
  <div className="bg-brand-border rounded-md absolute inset-0 translate-y-[2px]"></div>
  <a
    href="https://calendar.app.google.com/UCdRbHAHJYTwUEgF6"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full hover:no-underline"
  >
    <button className="relative px-4 py-0.5 md:px-6 md:py-2 text-brand-black-100 text-sm lg:text-base font-matter font-medium bg-brand-accent-100 rounded-md transition-transform duration-150 -translate-y-1 group-hover:-translate-y-1.5 active:-translate-y-0.5 cursor-pointer border-[1.5px] border-brand-accent-200 w-full">
      Get Started
    </button>
  </a>
</div>

					{/* <NavbarColorModeToggle className={styles.colorModeToggle} /> */}
					{!searchBarItem && (
						<NavbarSearch>
							<SearchBar />
						</NavbarSearch>
					)}
				</>
			}
		/>
	);
}
