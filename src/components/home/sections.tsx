import React from "react";

const buttonBase = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-matter font-semibold transition-colors duration-150";
const primaryButton = `${buttonBase} bg-[#210F26] text-white hover:bg-[#0D0D0D]`;
const secondaryButton = `${buttonBase} border border-brand-accent-300 text-brand-text-secondary hover:bg-brand-accent-100/60`;
const tertiaryButton = `${buttonBase} border border-transparent text-brand-text-secondary hover:text-brand-text-primary`;

const accentTags = [
	{label: "Revenue-first", color: "bg-brand-accent-100 text-brand-text-secondary"},
	{label: "Audit-ready", color: "bg-brand-accent-200 text-brand-text-primary"},
	{label: "Agent-native", color: "bg-brand-accent-300 text-white"},
];

export function HeroSection() {
	return (
		<section id='overview' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-8 py-24 sm:py-28'>
				<span className='text-xs uppercase tracking-[0.3em] text-brand-text-muted'>SAP for AI Agents</span>
				<div className='flex flex-col gap-4 max-w-3xl'>
					<h1 className='font-matter text-4xl leading-tight sm:text-5xl lg:text-6xl'>StringCost: Think SAP for AI Agents.</h1>
					<p className='text-base text-brand-text-secondary sm:text-lg'>A revenue-first framework that creates a <strong className='text-brand-text-primary'>double-entry ledger</strong> for every agent operation. Stop building on shallow proxies. Start building on a true system of record for your AI business.</p>
					<div className='flex flex-wrap gap-2 pt-1'>
						{accentTags.map((tag) => (
							<span key={tag.label} className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tag.color}`}>
								{tag.label}
							</span>
						))}
					</div>
				</div>

				{/* a16z Outcome-Based Pricing Callout */}
				<div className='max-w-3xl rounded-2xl border border-brand-accent-300 bg-brand-accent-300/10 p-6 shadow-sm'>
					<div className='flex flex-col gap-4'>
						<div className='flex items-start gap-3'>
							<div className='flex-shrink-0'>
								<img src='/img/a16z-logo.svg' alt='a16z' className='h-8 w-auto' />
							</div>
							<div className='flex-1'>
								<p className='text-sm font-semibold text-brand-text-primary sm:text-base'>
									<a href='https://a16z.com/newsletter/december-2024-enterprise-newsletter-ai-is-driving-a-shift-towards-outcome-based-pricing/' target='_blank' rel='noopener noreferrer' className='hover:underline'>
										Andreessen Horowitz just declared:
									</a>
								</p>
								<p className='mt-2 text-sm italic text-brand-text-secondary sm:text-base'>
									<em>&ldquo;AI is driving a shift towards <span className='relative inline-block'>
										<span className='relative z-10'>outcome-based pricing</span>
										<svg className='absolute -bottom-0.5 left-0 w-full h-2 z-0' viewBox='0 0 200 8' preserveAspectRatio='none'>
											<path d='M3,5 Q40,3 80,5 T195,6' stroke='#EF4444' strokeWidth='2' fill='none' strokeLinecap='round' opacity='0.7' />
										</svg>
									</span>. Software is becoming labor.&rdquo;</em>
								</p>
							</div>
						</div>
						<div className='border-l-4 border-brand-accent-200 pl-4'>
							<p className='text-base font-semibold text-brand-text-primary sm:text-lg'>
								But where is the infrastructure for outcome-based <span className='relative inline-block'>
									<span className='relative z-10'>billing &amp; accounting</span>
									<svg className='absolute -bottom-1 left-0 w-full h-3 z-0' viewBox='0 0 300 12' preserveAspectRatio='none'>
										<path d='M5,8 Q50,4 100,6 T200,7 T295,9' stroke='#EF4444' strokeWidth='2.5' fill='none' strokeLinecap='round' opacity='0.8' />
									</svg>
								</span>?
							</p>
							<p className='mt-2 text-sm text-brand-text-secondary'>
								This <span className='line-through'>not a <strong>payments</strong> problem</span>, but an <strong>accounting</strong> problem that leads to catastrophic failure. The future is outcome based...but the tools to build it don&apos;t exist.
								<br />
								<span className='relative inline-block mt-2 font-semibold text-brand-text-primary text-base sm:text-lg'>
									Until now.
									<svg className='absolute -inset-2 w-[calc(100%+20px)] h-[calc(100%+20px)]' viewBox='0 0 100 40' preserveAspectRatio='none'>
										<path d='M5,20 Q8,8 25,5 T75,8 Q92,10 95,20 Q92,30 75,32 T25,35 Q8,32 5,20' stroke='#10B981' strokeWidth='2.5' fill='none' strokeLinecap='round' strokeLinejoin='round' opacity='0.8' />
									</svg>
								</span>
							</p>
						</div>
					</div>
				</div>

				<div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
					<a
						href='https://calendar.app.google/hjN2HkZBLJMtSuku7'
						className={primaryButton}
					>
						Schedule a Strategic Demo
					</a>
					<a
						href='https://calendar.app.google/hjN2HkZBLJMtSuku7'
						className={secondaryButton}
					>
						Contact Sales
					</a>
				</div>
			</div>
		</section>
	);
}

export function RootCauseSection() {
	return (
		<section id='rootcause' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-8 py-16 sm:py-20'>
				<div className='max-w-3xl'><h2 className='text-3xl font-matter font-semibold sm:text-4xl'>The Root Cause: A New Cost Paradigm</h2></div>
				<p className='max-w-3xl text-sm text-brand-text-secondary sm:text-base'>Why is monetizing AI agents so difficult? Because the financial models that powered the last decade of SaaS are fundamentally broken in the world of Generative AI.</p>
				<div className='flex flex-col md:flex-row gap-6 items-center'>
					<article className='flex-1 flex flex-col gap-4 p-6 rounded-2xl border border-brand-overlay/60 bg-brand-surface shadow-sm'>
						<div className='flex items-center gap-3'>
							<span className='inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700'>OLD</span>
							<h3 className='text-lg font-matter font-semibold text-brand-text-primary'>SaaS APIs</h3>
						</div>
						<div className='space-y-4 text-sm text-brand-text-secondary'>
							<div>
								<p className='font-semibold text-brand-text-primary mb-1'>Predictable, Per-Call Cost</p>
								<p>API calls have a fixed, amortizable compute cost. The size of the JSON payload has a negligible impact on the price.</p>
							</div>
							<div>
								<p className='font-semibold text-brand-text-primary mb-1'>Billed by the Request</p>
								<p>The billable event is the API call itself.</p>
							</div>
						</div>
					</article>

					<div className='flex items-center justify-center'>
						<div className='rounded-full bg-brand-accent-200 text-brand-text-primary w-12 h-12 flex items-center justify-center text-sm font-bold'>
							VS
						</div>
					</div>

					<article className='flex-1 flex flex-col gap-4 p-6 rounded-2xl border border-brand-accent-300 bg-brand-accent-300/15 shadow-sm'>
						<div className='flex items-center gap-3'>
							<span className='inline-flex items-center rounded-full bg-brand-accent-300 px-3 py-1 text-xs font-semibold text-white'>NEW</span>
							<h3 className='text-lg font-matter font-semibold text-brand-text-primary'>Agentic APIs</h3>
						</div>
						<div className='space-y-4 text-sm text-brand-text-secondary'>
							<div>
								<p className='font-semibold text-brand-text-primary mb-1'>Variable, Computational Cost</p>
								<p>An agent&apos;s cost is directly tied to the <em>&ldquo;work&rdquo;</em> it performs. It&apos;s a metered, computational resource, not a fixed endpoint.</p>
							</div>
							<div>
								<p className='font-semibold text-brand-text-primary mb-1'>Billed by the Computation</p>
								<p>The billable events are the <strong className='text-brand-text-primary'>input tokens</strong>, <strong className='text-brand-text-primary'>output tokens</strong>, the <strong className='text-brand-text-primary'>number of thoughts</strong>, and every <strong className='text-brand-text-primary'>downstream tool call</strong> the agent makes.</p>
							</div>
						</div>
					</article>
				</div>
				<p className='max-w-3xl text-sm text-brand-text-secondary sm:text-base'>This creates a <strong className='text-brand-text-primary'>massive accounting problem</strong> that traditional billing systems cannot solve. Trying to price a variable, multi-step agentic workflow like a simple API call forces you to either guess—and consistently <span className='relative inline-block'>
					<strong className='relative z-10 text-brand-text-primary'>underbill or overcharge</strong>
					<svg className='absolute -bottom-0.5 left-0 w-full h-2 z-0' viewBox='0 0 250 8' preserveAspectRatio='none'>
						<path d='M3,5 Q50,3 100,5 T245,6' stroke='#EF4444' strokeWidth='2' fill='none' strokeLinecap='round' opacity='0.7' />
					</svg>
				</span> your customers—or build a complex, brittle accounting system from scratch.</p>
			</div>
		</section>
	);
}

export function TrilemmaSection() {
	return (
		<section id='trilemma' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-8 py-16 sm:py-20'>
				<div className='max-w-3xl'><h2 className='text-3xl font-matter font-semibold sm:text-4xl'>The AI Agent Trilemma is Stalling Your Go-to-Market.</h2></div>
				<p className='max-w-3xl text-sm text-brand-text-secondary sm:text-base'>This new cost paradigm creates a trilemma for enterprises, forcing a choice between three conflicting demands. Getting one right often means sacrificing the others.</p>
				<div className='overflow-hidden rounded-2xl border border-brand-overlay/60 bg-brand-surface shadow-sm'>
					<div className='grid divide-y divide-brand-border/60 text-left md:grid-cols-3 md:divide-y-0 md:divide-x'>
						<article className='flex flex-col gap-3 p-6'>
							<span className='inline-flex w-fit items-center rounded-full bg-brand-accent-100 px-3 py-1 text-xs font-semibold text-brand-text-secondary'>Flexibility</span>
							<h3 className='text-sm font-semibold text-brand-text-primary'>Engineering</h3>
							<p className='text-sm text-brand-text-secondary'>Your engineers need to build powerful, custom agents with complex logic (Tree-of-Thought, custom loops, chained tool use) to solve real business problems.</p>
						</article>
						<article className='flex flex-col gap-3 p-6'>
							<span className='inline-flex w-fit items-center rounded-full bg-brand-accent-300 px-3 py-1 text-xs font-semibold text-white'>Scalability</span>
							<h3 className='text-sm font-semibold text-brand-text-primary'>Platform</h3>
							<p className='text-sm text-brand-text-secondary'>Your platform team needs to deploy these agents globally and reliably on scalable, serverless infrastructure without getting locked into a proprietary, black-box runtime.</p>
						</article>
						<article className='flex flex-col gap-3 p-6'>
							<span className='inline-flex w-fit items-center rounded-full bg-brand-accent-200 px-3 py-1 text-xs font-semibold text-brand-text-primary'>Profitability</span>
							<h3 className='text-sm font-semibold text-brand-text-primary'>Business</h3>
						<p className='text-sm text-brand-text-secondary'>Your finance & product teams need to accurately meter usage and implement flexible billing without <strong className='text-brand-text-primary'>underbilling customers or overcharging them</strong>—a problem that kills margins and trust.</p>
						</article>
					</div>
				</div>
				<p className='max-w-3xl text-sm text-brand-text-secondary sm:text-base'>Solving this trilemma forces teams into months of brittle, internal billing workarounds—delaying revenue and innovation.</p>
			</div>
		</section>
	);
}

export function RevenueFirstSection() {
	return (
		<section id='framework' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom py-16 sm:py-20'>
				<div className='space-y-8'>
					<div className='max-w-3xl space-y-4'>
						<h2 className='text-3xl font-matter font-semibold sm:text-4xl'>The Double-Entry Ledger for AI Agent Operations</h2>
						<blockquote className='border-l-4 border-brand-accent-200 bg-brand-surface/50 pl-5 py-4 italic text-brand-text-secondary rounded-r-lg'>
							<p className='text-sm sm:text-base'>Simple token counters and API proxies are failing. They see the token count and total bill from your model provider, but they <span className='relative inline-block'>
								<strong className='relative z-10 text-brand-text-primary'>can&apos;t tell you the profitability of a single agent run</strong>
								<svg className='absolute -bottom-0.5 left-0 w-full h-2 z-0' viewBox='0 0 400 8' preserveAspectRatio='none'>
									<path d='M3,5 Q80,3 160,5 T395,6' stroke='#EF4444' strokeWidth='2' fill='none' strokeLinecap='round' opacity='0.7' />
								</svg>
							</span>.</p>
						</blockquote>
					</div>
					<div className='space-y-6'>
						<div className='flex flex-col lg:flex-row gap-6 items-center'>
							<div className='flex-1 rounded-2xl border border-brand-accent-100 bg-brand-accent-100/20 p-6 shadow-sm w-full'>
								<h3 className='text-lg font-matter font-semibold text-brand-text-primary'>Deep Runtime Inspection</h3>
								<p className='mt-3 text-sm text-brand-text-secondary'>StringCost isn&apos;t a library that invades your code; it&apos;s a <span className='relative inline-block'>
									<strong className='relative z-10 text-brand-text-primary'>runtime-aware control plane</strong>
									<svg className='absolute -bottom-0.5 left-0 w-full h-2 z-0' viewBox='0 0 250 8' preserveAspectRatio='none'>
										<path d='M3,5 Q50,3 100,5 T245,6' stroke='#10B981' strokeWidth='2' fill='none' strokeLinecap='round' opacity='0.7' />
									</svg>
								</span> that intelligently inspects your agent&apos;s traffic. We integrate at the network level using a <span className='relative inline-block'>
									<strong className='relative z-10 text-brand-text-primary'>secure, signed-URL architecture</strong>
									<svg className='absolute -bottom-0.5 left-0 w-full h-2 z-0' viewBox='0 0 270 8' preserveAspectRatio='none'>
										<path d='M3,5 Q50,3 100,5 T265,6' stroke='#10B981' strokeWidth='2' fill='none' strokeLinecap='round' opacity='0.7' />
									</svg>
								</span>. Your code calls our Gateway run this request through an <span className='relative inline-block'>
									<strong className='relative z-10 text-brand-text-primary'>asynchronous deep prompt inspection engine</strong>
									<svg className='absolute -bottom-0.5 left-0 w-full h-2 z-0' viewBox='0 0 380 8' preserveAspectRatio='none'>
										<path d='M3,5 Q70,3 140,5 T375,6' stroke='#10B981' strokeWidth='2' fill='none' strokeLinecap='round' opacity='0.7' />
									</svg>
								</span>, using a meta-classifier to understand the business intent of the action without adding a single millisecond of latency to your user&apos;s request.</p>
							</div>
							<div className='flex items-center justify-center'>
								<div className='rounded-full bg-brand-accent-300 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold'>
									+
								</div>
							</div>
							<div className='flex-1 rounded-2xl border border-brand-accent-200 bg-brand-accent-200/20 p-6 shadow-sm w-full'>
								<h3 className='text-lg font-matter font-semibold text-brand-text-primary'>Every Action is a Ledger Entry</h3>
								<p className='mt-3 text-sm text-brand-text-secondary'>Automatic instrumentation is the core of this ledger. Our Local Sidecar and asynchronous classifier automatically record every discrete computational action—whether it&apos;s an LLM call or an external tool—as a distinct line item with two sides:</p>
								<ul className='mt-3 space-y-2 text-sm text-brand-text-secondary'>
									<li className='flex items-start gap-2'>
										<span className='mt-1 inline-block size-1.5 rounded-full bg-brand-accent-200' />
										<span><strong className='text-brand-text-primary'>Cost Side (Debits):</strong> The tokens you paid your provider, the price of the tool call, and the compute time.</span>
									</li>
									<li className='flex items-start gap-2'>
										<span className='mt-1 inline-block size-1.5 rounded-full bg-brand-accent-200' />
										<span><strong className='text-brand-text-primary'>Revenue Side (Credits):</strong> The billable event for your customer based on your pricing model for that specific action.</span>
									</li>
								</ul>
							</div>
						</div>
						<div className='flex items-center justify-center'>
							<svg className='w-8 h-8 text-brand-accent-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
							</svg>
						</div>
						<div className='max-w-3xl mx-auto rounded-2xl border border-brand-accent-300 bg-brand-accent-300/15 p-6 shadow-sm'>
							<p className='text-sm text-brand-text-secondary'>The result is a perfect, auditable, real-time <strong className='text-brand-text-primary'>P&amp;L for every single agent run</strong>. You can finally answer critical business questions: <em>&ldquo;Which agents are most profitable?&rdquo;</em>, <em>&ldquo;Which tools are driving the most cost?&rdquo;</em>, and <em>&ldquo;What is the true margin on our AI features?&rdquo;</em></p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function SystemSection() {
	return (
		<section id='system' className='bg-gradient-to-br from-[#210F26] to-[#3D1F4A] text-white'>
			<div className='container-custom flex flex-col gap-10 py-16 sm:py-20'>
				<div className='text-center max-w-4xl mx-auto space-y-4'>
					<h2 className='text-3xl font-matter font-semibold sm:text-4xl lg:text-5xl'>Your Single Financial Endpoint for your Entire AI Deployment</h2>
					<p className='text-base text-white/80 sm:text-lg'>Zero-time Integration. No SDK. 250+ Providers, 1 API.</p>
					<p className='text-sm font-light italic text-white/70 mt-2'>Account for your usage of OpenAI, Anthropic, Google Gemini, Cohere, Groq, and hundreds more through a single, unified, OpenAI-compatible proxy</p>
				</div>
				
				<div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-4 sm:p-8">
					<img src="/img/financial-architecture.svg" alt="StringCost Financial Architecture" className="w-full h-auto rounded-lg" />
				</div>

				
			</div>
		</section>
	);
}

export function SourceOfTruthSection() {
	return (
		<section id='ledger' className='bg-brand-base text-brand-text-primary overflow-hidden relative'>
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,193,215,0.15),transparent_50%)]'></div>
			<div className='container-custom flex flex-col gap-10 py-16 sm:py-20 relative z-10'>
				<div className='flex flex-col lg:flex-row gap-10 items-start'>
					<div className='lg:w-1/2 space-y-6'>
						<div className='inline-block px-4 py-2 rounded-full bg-brand-accent-100 text-brand-text-secondary text-xs font-semibold uppercase tracking-wider'>
							Double-Entry Accounting
						</div>
						<h2 className='text-3xl font-matter font-semibold sm:text-4xl lg:text-5xl leading-tight'>A True Ledger, Not Just a Token Counter</h2>
						<p className='text-lg text-brand-text-secondary'>Your AI bill is a black box. StringCost gives you X-ray vision.</p>
						<p className='text-base text-brand-text-secondary border-l-4 border-brand-accent-300 pl-6 py-2'>While other proxies just count total tokens, we provide a <strong className='text-brand-text-primary'>double-entry ledger</strong> for every agent run. Our asynchronous background worker inspects every prompt to give you a true P&L statement for your AI.</p>
					</div>
					<div className='lg:w-1/2 space-y-6'>
						<div className='relative p-6 rounded-2xl bg-gradient-to-br from-brand-accent-100/50 to-transparent border-l-4 border-brand-accent-100 shadow-lg'>
							<div className='absolute -left-8 top-8 w-12 h-12 rounded-full bg-brand-accent-100 flex items-center justify-center text-brand-text-primary font-bold shadow-md'>⚡</div>
							<h3 className='text-lg font-matter font-bold mb-2'>Zero-Latency Accounting</h3>
							<p className='text-sm text-brand-text-secondary'>Our <code className='text-xs bg-white px-2 py-1 rounded border border-brand-accent-100'>Event Collector</code> logs the raw event instantly and returns the response to your user with zero delay.</p>
						</div>
						<div className='relative p-6 rounded-2xl bg-gradient-to-br from-brand-accent-300/20 to-transparent border-l-4 border-brand-accent-300 shadow-lg'>
							<div className='absolute -left-8 top-8 w-12 h-12 rounded-full bg-brand-accent-300 flex items-center justify-center text-white font-bold shadow-md'>⚙️</div>
							<h3 className='text-lg font-matter font-bold mb-2'>Asynchronous Classification</h3>
							<p className='text-sm text-brand-text-secondary'>A background <code className='text-xs bg-white px-2 py-1 rounded border border-brand-accent-300'>Worker</code> (polling every 200ms) calls a meta-classifier to tag every request with an <code className='text-xs bg-white px-2 py-1 rounded border border-brand-accent-300'>action_type</code> (e.g., <em>synthesis</em>, <em>tool_selection</em>, <em>evaluation</em>).</p>
						</div>
						<div className='relative p-6 rounded-2xl bg-gradient-to-br from-brand-accent-200/30 to-transparent border-l-4 border-brand-accent-200 shadow-lg'>
							<div className='absolute -left-8 top-8 w-12 h-12 rounded-full bg-brand-accent-200 flex items-center justify-center text-brand-text-primary font-bold shadow-md'>💡</div>
							<h3 className='text-lg font-matter font-bold mb-2'>Know Your &ldquo;Why&rdquo;</h3>
							<p className='text-sm text-brand-text-secondary'>Finally, you can answer critical business questions. What&apos;s the P&L of your Tree-of-Thought agent? Are &ldquo;evaluation&rdquo; steps costing more than &ldquo;synthesis&rdquo; steps? StringCost gives you the answers.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function AccountingSection() {
	return (
		<section id='security' className='bg-gradient-to-b from-brand-accent-100/20 via-white to-brand-accent-200/10 text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-12 py-16 sm:py-20'>
				<div className='text-center max-w-3xl mx-auto space-y-4'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200'>
						<span className='text-2xl'>🔒</span>
						<span className='text-xs font-bold text-red-600 uppercase tracking-wider'>Security First</span>
					</div>
					<h2 className='text-3xl font-matter font-semibold sm:text-4xl lg:text-5xl'>Unbreakable Security: No More Static API Keys</h2>
					<p className='text-base text-brand-text-secondary sm:text-lg'>Stop embedding <code className='text-xs bg-red-50 border border-red-200 px-2 py-1 rounded text-red-600 font-mono'>sk-xxx</code> keys in your agents, clients, or servers. Our architecture is built on a <strong>dynamic, signed-URL model</strong> that makes key leakage impossible.</p>
				</div>
				<div className='relative max-w-5xl mx-auto w-full'>
					<div className='absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent-100 via-brand-accent-300 to-brand-accent-200 transform -translate-y-1/2 hidden lg:block'></div>
					<div className='grid gap-8 lg:gap-12 lg:grid-cols-3 relative'>
						<article className='flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-white border-2 border-brand-accent-100 shadow-lg relative'>
							<div className='w-20 h-20 rounded-full bg-gradient-to-br from-brand-accent-100 to-brand-accent-200 flex items-center justify-center text-brand-text-primary font-black text-3xl shadow-lg ring-4 ring-white z-10'>
								1
							</div>
							<h3 className='text-lg font-matter font-bold'>Request a One-Time URL</h3>
							<p className='text-sm text-brand-text-secondary'>Your application asks the <code className='text-xs bg-brand-accent-100 px-2 py-1 rounded font-mono'>Control Plane</code> for permission to run a call.</p>
						</article>
						<article className='flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-white border-2 border-brand-accent-300 shadow-lg relative'>
							<div className='w-20 h-20 rounded-full bg-gradient-to-br from-brand-accent-300 to-[#210F26] flex items-center justify-center text-white font-black text-3xl shadow-lg ring-4 ring-white z-10'>
								2
							</div>
							<h3 className='text-lg font-matter font-bold'>Get a Signed URL</h3>
							<p className='text-sm text-brand-text-secondary'>The <code className='text-xs bg-brand-accent-100 px-2 py-1 rounded font-mono'>Control Plane</code> returns a short-lived, single-use signed URL that contains the encrypted credentials and user context.</p>
						</article>
						<article className='flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-white border-2 border-brand-accent-200 shadow-lg relative'>
							<div className='w-20 h-20 rounded-full bg-gradient-to-br from-brand-accent-200 to-brand-accent-100 flex items-center justify-center text-brand-text-primary font-black text-3xl shadow-lg ring-4 ring-white z-10'>
								3
							</div>
							<h3 className='text-lg font-matter font-bold'>Call the Gateway</h3>
							<p className='text-sm text-brand-text-secondary'>Your agent uses this temporary URL to call the <code className='text-xs bg-brand-accent-100 px-2 py-1 rounded font-mono'>Gateway</code>. Our system validates the signature, checks for replay attacks, and proxies the call.</p>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}

export function BYOKSection() {
	return (
		<section id='byok' className='bg-gradient-to-br from-brand-accent-100/30 via-brand-base to-brand-accent-200/20 text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-10 py-16 sm:py-20'>
				<div className='max-w-3xl space-y-3'>
					<h2 className='text-3xl font-matter font-semibold sm:text-4xl'>The Enterprise Feature You&apos;ve Been Waiting For: &ldquo;Bring Your Own Key&rdquo; (BYOK)</h2>
					<p className='text-sm text-brand-text-secondary sm:text-base'>Stop subsidizing your customers&apos; AI usage. StringCost is built for B2B, allowing your users to provide their <em>own</em> provider keys.</p>
				</div>
				<div className='grid gap-6 lg:grid-cols-3'>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-100 bg-white p-6 shadow-sm'>
						<h3 className='text-lg font-matter font-semibold'>Client-Provided Keys</h3>
						<p className='text-sm text-brand-text-secondary'>Let your customers enter their own OpenAI, Gemini, or Anthropic keys.</p>
					</article>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-300 bg-white p-6 shadow-sm'>
						<h3 className='text-lg font-matter font-semibold'>Secure &amp; Temporary Storage</h3>
						<p className='text-sm text-brand-text-secondary'>We encrypt their key at rest using <code className='text-xs bg-brand-accent-100 px-2 py-1 rounded'>pgcrypto</code> and set a configurable TTL (e.g., 1 hour).</p>
					</article>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-200 bg-white p-6 shadow-sm'>
						<h3 className='text-lg font-matter font-semibold'>Automatic Cleanup</h3>
						<p className='text-sm text-brand-text-secondary'>Our <code className='text-xs bg-brand-accent-100 px-2 py-1 rounded'>pg_cron</code> job automatically and permanently deletes expired keys. You get all the benefits of BYOK without the risk or liability.</p>
					</article>
				</div>
			</div>
		</section>
	);
}

export function DeploymentSection() {
	return (
		<section id='deployment' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-10 py-16 sm:py-20'>
				<div className='max-w-3xl space-y-3'>
					<h2 className='text-3xl font-matter font-semibold sm:text-4xl'>Built for Enterprise Scale &amp; Data Control</h2>
					<p className='text-sm text-brand-text-secondary sm:text-base'>StringCost is not a simple SaaS tool; it&apos;s a production-grade stack designed for serious enterprise deployment. You get the control of an on-premise solution with the flexibility of the cloud.</p>
				</div>
				<div className='grid gap-6 lg:grid-cols-2'>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-100 bg-brand-surface p-6 shadow-sm'>
						<h3 className='text-lg font-matter font-semibold'>Your Cloud, Your Data</h3>
						<p className='text-sm text-brand-text-secondary'>Run the high-performance <strong>Gateway</strong> and <strong>Control Plane</strong> in your own Kubernetes cluster. This ensures your sensitive prompts, keys, and AI responses never leave your network, giving you maximum security and compliance.</p>
					</article>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-300 bg-brand-accent-300/15 p-6 shadow-sm'>
						<h3 className='text-lg font-matter font-semibold'>Flexible Hybrid Model</h3>
						<p className='text-sm text-brand-text-secondary'>Use our powerful, managed <strong>Classifier</strong> service in our cloud, or deploy the entire stack—including the <code className='text-xs bg-brand-accent-100 px-2 py-1 rounded'>Worker</code>—within your own VPC. The choice is yours.</p>
					</article>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-200 bg-brand-accent-200/25 p-6 shadow-sm'>
						<h3 className='text-lg font-matter font-semibold'>Kubernetes-Native</h3>
						<p className='text-sm text-brand-text-secondary'>Our system is a production-grade, K8s-native application, packaged with <strong>Helm</strong> for easy, repeatable deployment to any certified Kubernetes cluster, whether it&apos;s GKE, EKS, AKS, or self-hosted.</p>
					</article>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-100 bg-brand-surface p-6 shadow-sm'>
						<h3 className='text-lg font-matter font-semibold'>Idempotent &amp; Safe Deployments</h3>
						<p className='text-sm text-brand-text-secondary'>We ensure your infrastructure is always in a reliable state. Database migrations are built to run automatically as Kubernetes Jobs before any service starts, guaranteeing your deployments are safe, idempotent, and roll back cleanly.</p>
					</article>
				</div>
			</div>
		</section>
	);
}

export function FinalCtaSection() {
	return (
		<section id='demo' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-6 py-20 text-center sm:py-24'>
				<div className='mx-auto flex max-w-3xl flex-col gap-4 rounded-3xl border border-brand-accent-100 bg-brand-surface p-10 shadow-sm'>
					<h2 className='text-3xl font-matter font-semibold sm:text-4xl'>Get the Control You Need and the Scalability You Deserve.</h2>
					<p className='text-sm text-brand-text-secondary sm:text-base'>Stop building brittle, insecure, and non-monetizable AI apps. Start building on a true enterprise-grade control plane.</p>
					<div className='flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row'>
						<a href='https://calendar.app.google/hjN2HkZBLJMtSuku7' className={primaryButton}>
							Schedule a Demo
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
