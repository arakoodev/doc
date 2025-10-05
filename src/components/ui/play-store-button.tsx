import React from "react";
import {twMerge} from "tailwind-merge";

export function PlayStoreButton({ bg_color }: { bg_color?: string }) {
	return (
		<a
			href="https://play.google.com/store/apps/details?id=com.arakoo.web"
			target="_blank"
			rel="noreferrer"
		>
			<div
				className={twMerge(
					"bg-brand-border border border-brand-border relative top-[2px] rounded-md w-auto inline-block text-center group",
					bg_color
				)}
			>
				<div className="relative text-center w-auto bg-brand-accent-100 text-brand-base rounded-md text-sm md:text-base font-medium border border-brand-border px-4 py-2 md:px-6 md:py-3 -translate-y-1 hover:-translate-y-1.5 active:-translate-y-0.5 mx-[-1px] flex items-center gap-3 md:gap-5 transition-all duration-150 cursor-pointer">
					<span className="font-matter">Download on Play Store</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						className="size-5 md:size-6 transition-transform duration-200 group-hover:translate-x-1"
					>
						<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
						<path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
			</div>
		</a>
	);
}

export default PlayStoreButton;
