import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

function BaseUrlLink({href, children, ...props}: {href: string; children: React.ReactNode; [key: string]: any}) {
	const resolvedHref = href.startsWith("/") ? useBaseUrl(href) : href;
	return (
		<a href={resolvedHref} {...props}>
			{children}
		</a>
	);
}

// JSON object containing footer links
const footerLinks = {
  necessary: [
    {
      label: "Privacy",
      href: "/privacy",
    },
    {
      label: "Twitter",
      href: "https://x.com/arakoo",
    },
    {
      label: "Github",
      href: "https://github.com/arakoodev/stringcost",
    },
  ],
};

export function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='bg-brand-base py-16 text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-12 md:flex-row md:justify-between'>
				<div className='flex flex-col gap-4'>
					<span className='text-2xl font-semibold tracking-wide'>StringCost</span>
					<p className='max-w-xs text-sm text-brand-text-muted'>
						{`© ${currentYear} Arakoo Inc. All rights reserved.`}
					</p>
				</div>

				<div className='flex flex-col gap-4 max-w-sm'>
					<h3 className='text-sm font-semibold uppercase tracking-[0.2em] text-brand-text-muted'>Contact</h3>
					<p className='text-sm text-brand-text-muted'>
						For technical documentation, partnership inquiries, or investor information please reach out.
					</p>
					<a href='mailto:founders@arakoo.com' className='text-sm font-medium text-brand-accent-200 hover:underline'>
						founders@arakoo.com
					</a>
				</div>

				<div className='flex flex-col gap-4'>
					<h3 className='text-sm font-semibold uppercase tracking-[0.2em] text-brand-text-muted'>Necessary links</h3>
					<div className='flex flex-col gap-2 text-sm text-brand-text-secondary'>
						{footerLinks.necessary.map((link, index) => (
							<BaseUrlLink key={index} href={link.href} className='hover:text-brand-text-primary'>
								{link.label}
							</BaseUrlLink>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
