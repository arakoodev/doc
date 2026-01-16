import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

function BaseUrlLink({href, children, ...props}: {href: string; children: React.ReactNode; [key: string]: any}) {
	const resolvedHref = href.startsWith("/") ? useBaseUrl(href) : href;
	return (
		<a href={resolvedHref} {...props}>
			{children}
		</a>
	);
}

export function Footer() {
	const currentYear = new Date().getFullYear();
	
	return (
		<footer className='bg-st-dark border-t-2 border-st-red py-12 relative overflow-hidden'>
            {/* Retro Grid Background for Footer */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{
                     backgroundImage: 'linear-gradient(rgba(255, 42, 77, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 42, 77, 0.3) 1px, transparent 1px)',
                     backgroundSize: '30px 30px'
                 }} 
            />
            
			<div className='container-custom relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-12'>
                
                {/* Brand / Copyright */}
				<div className='flex flex-col gap-4 text-center md:text-left'>
                    <div className="group relative inline-block">
                        <h2 className='text-3xl font-stranger text-st-red tracking-widest uppercase mb-0 group-hover:text-white transition-colors'>
                            ARAKOO
                        </h2>
                        <span className="text-xs font-terminal text-st-neon tracking-[0.5em] block group-hover:animate-pulse">
                            RESEARCH
                        </span>
                    </div>
					<p className='text-sm text-gray-500 font-terminal mt-2'>
						{`© ${currentYear} SANDEEP SRINIVASA. ALL RIGHTS RESERVED.`}
                        <br/>
                        <span className="text-xs opacity-50">SYSTEM VERSION 9.0.1</span>
					</p>
				</div>

                {/* Contact / Social */}
				<div className='flex flex-col gap-6 text-center md:text-right'>
					<h3 className='text-sm font-terminal font-bold text-st-neon uppercase tracking-[0.2em] mb-2 border-b border-st-neon/30 pb-2 inline-block md:inline'>
                        Comms Link
                    </h3>
                    
                    <div className="flex gap-6 justify-center md:justify-end">
                        <a href='https://github.com/arakoodev' className='text-gray-400 hover:text-st-neon transition-colors transform hover:scale-110'>
                            <FaGithub size={24} />
                        </a>
                        <a href='https://x.com/sandeep_srinivasa' className='text-gray-400 hover:text-st-neon transition-colors transform hover:scale-110'>
                            <FaTwitter size={24} />
                        </a>
                        <a href='mailto:founders@arakoo.com' className='text-gray-400 hover:text-st-neon transition-colors transform hover:scale-110'>
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                    
                    <div className="flex flex-col gap-1 text-xs font-terminal text-gray-500">
                        <a href="/privacy" className="hover:text-st-red hover:underline decoration-st-red underline-offset-4">PRIVACY_PROTOCOL</a>
                    </div>
				</div>
			</div>
            
            {/* Scanline overlay for footer only */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-10" />
		</footer>
	);
}
