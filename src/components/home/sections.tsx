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
					<h1 className='font-matter text-4xl leading-tight sm:text-5xl lg:text-6xl'>StringCost: The ERP for Enterprise AI.</h1>
					<p className='text-base text-brand-text-secondary sm:text-lg'>A revenue-first framework for designing, deploying, and monetizing intelligent agents. Stop taking months to go live. Start shipping profitable AI.</p>
					<div className='flex flex-wrap gap-2 pt-1'>
						{accentTags.map((tag) => (
							<span key={tag.label} className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tag.color}`}>
								{tag.label}
							</span>
						))}
					</div>
				</div>
				<div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
					<a
						href='https://www.google.com/search?q=https://stringcost.com/demo'
						className={primaryButton}
					>
						Schedule a Strategic Demo
					</a>
					<a
						href='https://www.google.com/search?q=https://stringcost.com/contact'
						className={secondaryButton}
					>
						Talk to an Expert
					</a>
				</div>
			</div>
		</section>
	);
}

export function TrilemmaSection() {
	return (
		<section id='trilemma' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-8 py-16 sm:py-20'>
				<div className='max-w-3xl'><h2 className='text-3xl font-matter font-semibold sm:text-4xl'>The AI Agent Trilemma is Stalling Your Go-to-Market.</h2></div>
				<p className='max-w-3xl text-sm text-brand-text-secondary sm:text-base'>Enterprises are struggling to launch AI agents because they are caught between three conflicting demands. Getting one right often means sacrificing the others.</p>
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
							<p className='text-sm text-brand-text-secondary'>Your finance & product teams need to accurately meter usage and implement flexible billing without underbilling customers or overcharging them—a problem that kills margins and trust.</p>
						</article>
					</div>
				</div>
				<p className='max-w-3xl text-sm text-brand-text-secondary sm:text-base'>Solving this trilemma forces teams into months of building brittle, internal billing workarounds, delaying revenue and innovation.</p>
			</div>
		</section>
	);
}

export function RevenueFirstSection() {
	return (
		<section id='framework' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom py-16 sm:py-20'>
				<div className='grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start'>
					<div className='space-y-6'>
						<h2 className='text-3xl font-matter font-semibold sm:text-4xl'>We Solved It by Putting Revenue First.</h2>
						<p className='text-sm text-brand-text-secondary sm:text-base'>StringCost is the first framework that solves AI agent design by going revenue, costs, and billing first. Metering and monetization aren&apos;t bolted on after launch—they become core primitives of the agent itself.</p>
						<div className='grid gap-4 sm:grid-cols-2'>
							<div className='rounded-2xl border border-brand-accent-100 bg-brand-accent-100/30 p-5 shadow-sm'>
								<p className='text-xs uppercase tracking-[0.25em] text-brand-text-muted'>Ledgers, not logs</p>
								<p className='mt-3 text-sm text-brand-text-secondary'>Every action is captured as a financial transaction—complete with cost, owner, and entitlement metadata.</p>
							</div>
							<div className='rounded-2xl border border-brand-accent-200 bg-brand-accent-200/30 p-5 shadow-sm'>
								<p className='text-xs uppercase tracking-[0.25em] text-brand-text-muted'>Revenue primitives</p>
								<p className='mt-3 text-sm text-brand-text-secondary'>Usage, pricing, and margins become configurable primitives that ship with your agent logic on day one.</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-5 rounded-2xl border border-brand-accent-300 bg-brand-accent-300/25 p-6 shadow-sm'>
						<div>
							<p className='text-xs uppercase tracking-[0.3em] text-brand-text-muted'>Revenue-first blueprint</p>
							<p className='mt-3 text-sm text-brand-text-secondary'>Our architecture treats your agent&apos;s operations as a financial transaction ledger, giving you an unbreakable source of truth for your AI business.</p>
						</div>
						<ul className='space-y-3 text-sm text-brand-text-secondary'>
							<li className='flex items-start gap-3'>
								<span className='mt-1 inline-block size-2 rounded-full bg-brand-accent-100' />
								Full auditability per step, tool, and cost center.
							</li>
							<li className='flex items-start gap-3'>
								<span className='mt-1 inline-block size-2 rounded-full bg-brand-accent-200' />
								Multi-tenant, usage-based pricing with margin protection baked in.
							</li>
							<li className='flex items-start gap-3'>
								<span className='mt-1 inline-block size-2 rounded-full bg-brand-accent-300' />
								Finance-ready exports that map directly into Stripe and your ERP.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export function SystemSection() {
	return (
		<section id='system' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-10 py-16 sm:py-20'>
				<div className='max-w-3xl space-y-3'>
					<h2 className='text-3xl font-matter font-semibold sm:text-4xl'>An End-to-End System for Profitable AI Operations</h2>
					<p className='text-sm text-brand-text-secondary sm:text-base'>StringCost provides a cohesive set of primitives that transforms your agent&apos;s logic into a fully instrumented, deployable, and billable asset.</p>
				</div>
				<div className='grid gap-6 lg:grid-cols-3'>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-100 bg-brand-surface p-6 shadow-sm'>
						<span className='text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-muted'>01</span>
						<h3 className='text-lg font-matter font-semibold'>Design for Revenue with Billable Primitives</h3>
						<p className='text-sm text-brand-text-secondary'>Our Inngest-like developer experience keeps your team shipping. Every `step` wraps logic and turns it into a traceable, auditable, billable event.</p>
						<div className='cli-window p-4'>
							<pre className='text-xs sm:text-sm'>
{`// Every step is a line item on a future invoice.
const thought = await step({
  name: "Analyze User Intent",
  actionType: "llm_call"
}, ...);

const dbResult = await step({
  name: "Query Customer DB",
  actionType: "tool_use"
}, ...);`}
							</pre>
						</div>
					</article>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-300 bg-brand-accent-300/15 p-6 shadow-sm'>
						<span className='text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-muted'>02</span>
						<h3 className='text-lg font-matter font-semibold'>Deploy with Confidence on Vercel</h3>
						<p className='text-sm text-brand-text-secondary'>Leverage Vercel&apos;s Build Output API to deploy custom agent runtimes with serverless scale. Your MCP API wrappers ship as optimized, independent functions.</p>
					</article>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-200 bg-brand-accent-200/25 p-6 shadow-sm'>
						<span className='text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-muted'>03</span>
						<h3 className='text-lg font-matter font-semibold'>Integrate Seamlessly with Your Financial Stack</h3>
						<p className='text-sm text-brand-text-secondary'>Native Stripe utilities power real-time usage tracking, subscription gating, and instant invoice generation—tying every agent action straight into revenue.</p>
					</article>
				</div>
			</div>
		</section>
	);
}

export function SourceOfTruthSection() {
	return (
		<section id='teams' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-8 py-16 sm:py-20'>
				<div className='max-w-3xl space-y-3'>
					<h2 className='text-3xl font-matter font-semibold sm:text-4xl'>The Single Source of Truth for Your AI Business</h2>
					<p className='text-sm text-brand-text-secondary sm:text-base'>Every team gets the visibility and control they need without rebuilding billing infrastructure from scratch.</p>
				</div>
				<div className='overflow-hidden rounded-2xl border border-brand-overlay/70 bg-brand-surface shadow-sm'>
					<div className='grid divide-y divide-brand-border/60 md:grid-cols-3 md:divide-y-0 md:divide-x'>
						<article className='flex flex-col gap-3 p-6'>
							<span className='inline-flex w-fit items-center rounded-full bg-brand-accent-100/70 px-3 py-1 text-xs font-semibold text-brand-text-secondary'>Product</span>
							<h3 className='text-sm font-semibold text-brand-text-primary'>For Product Teams</h3>
							<p className='text-sm text-brand-text-secondary'>Go to market with complex, usage-based pricing models in days, not quarters. Experiment with billing per-action, per-thought, or per-tool.</p>
						</article>
						<article className='flex flex-col gap-3 p-6'>
							<span className='inline-flex w-fit items-center rounded-full bg-brand-accent-300/70 px-3 py-1 text-xs font-semibold text-white'>Engineering</span>
							<h3 className='text-sm font-semibold text-brand-text-primary'>For Engineering Teams</h3>
							<p className='text-sm text-brand-text-secondary'>Build any agent imaginable with a Next.js-native DX while the framework handles billing, observability, and compliance-grade audit trails.</p>
						</article>
						<article className='flex flex-col gap-3 p-6'>
							<span className='inline-flex w-fit items-center rounded-full bg-brand-accent-200/80 px-3 py-1 text-xs font-semibold text-brand-text-primary'>Finance &amp; Ops</span>
							<h3 className='text-sm font-semibold text-brand-text-primary'>For Finance &amp; Ops</h3>
							<p className='text-sm text-brand-text-secondary'>Eliminate billing errors with a perfect record of every billable action. Sync usage to Stripe for invoices your customers—and auditors—can trust.</p>
						</article>
					</div>
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
					<h2 className='text-3xl font-matter font-semibold sm:text-4xl'>Stop Building Billing Workarounds. Start Shipping Profitable Agents.</h2>
					<p className='text-sm text-brand-text-secondary sm:text-base'>Schedule a demo to see how StringCost&apos;s revenue-first approach helps you launch enterprise AI agents faster and more profitably.</p>
					<div className='flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row'>
						<a href='https://www.google.com/search?q=https://stringcost.com/demo' className={primaryButton}>
							Schedule a Demo
						</a>
						<a href='https://www.google.com/search?q=https://stringcost.com/docs' className={tertiaryButton}>
							View Technical Docs
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
