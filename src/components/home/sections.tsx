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
								<h3 className='text-lg font-matter font-semibold text-brand-text-primary'>Deep Framework Integration</h3>
								<p className='mt-3 text-sm text-brand-text-secondary'>StringCost isn&apos;t a language-level library; it&apos;s a <span className='relative inline-block'>
									<strong className='relative z-10 text-brand-text-primary'>compile-time harness for your framework</strong>
									<svg className='absolute -bottom-0.5 left-0 w-full h-2 z-0' viewBox='0 0 300 8' preserveAspectRatio='none'>
										<path d='M3,5 Q60,3 120,5 T295,6' stroke='#10B981' strokeWidth='2' fill='none' strokeLinecap='round' opacity='0.7' />
									</svg>
								</span>. We integrate directly into the build and deployment lifecycle. For our first target, Next.js, we use deep framework-level tools like the <span className='relative inline-block'>
									<strong className='relative z-10 text-brand-text-primary'>Vercel Build Output API</strong>
									<svg className='absolute -bottom-0.5 left-0 w-full h-2 z-0' viewBox='0 0 220 8' preserveAspectRatio='none'>
										<path d='M3,5 Q50,3 100,5 T215,6' stroke='#10B981' strokeWidth='2' fill='none' strokeLinecap='round' opacity='0.7' />
									</svg>
								</span> to package your agents and their instrumentation together, ensuring perfect compatibility and control over the deployment environment.</p>
							</div>
							<div className='flex items-center justify-center'>
								<div className='rounded-full bg-brand-accent-300 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold'>
									+
								</div>
							</div>
							<div className='flex-1 rounded-2xl border border-brand-accent-200 bg-brand-accent-200/20 p-6 shadow-sm w-full'>
								<h3 className='text-lg font-matter font-semibold text-brand-text-primary'>Every Step is a Ledger Entry</h3>
								<p className='mt-3 text-sm text-brand-text-secondary'>Our <code className='text-xs bg-brand-accent-100 px-2 py-0.5 rounded'>step</code> primitive is the core of this ledger. It forces every discrete computational action to be recorded as a distinct line item with two sides:</p>
								<ul className='mt-3 space-y-2 text-sm text-brand-text-secondary'>
									<li className='flex items-start gap-2'>
										<span className='mt-1 inline-block size-1.5 rounded-full bg-brand-accent-200' />
										<span><strong className='text-brand-text-primary'>Cost Side (Debits):</strong> The tokens you paid, the price of the tool call, and the compute time.</span>
									</li>
									<li className='flex items-start gap-2'>
										<span className='mt-1 inline-block size-1.5 rounded-full bg-brand-accent-200' />
										<span><strong className='text-brand-text-primary'>Revenue Side (Credits):</strong> The billable event for your customer based on your pricing model.</span>
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
  actionType: "llm_call",
  unitCost: 0.001
}, ...);

const dbResult = await step({
  name: "Query Customer DB",
  actionType: "tool_use",
  unitCost: 0.005
}, ...);`}
							</pre>
						</div>
					</article>
					<article className='flex flex-col gap-5 rounded-2xl border border-brand-accent-300 bg-brand-accent-300/15 p-6 shadow-sm'>
						<span className='text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-muted'>02</span>
						<h3 className='text-lg font-matter font-semibold'>Deploy with Confidence on Vercel</h3>
						<p className='text-sm text-brand-text-secondary'>Stop choosing between flexibility and scalability. Leverage Vercel&apos;s Build Output API to ship custom runtimes with serverless performance.</p>
						<div className='cli-window p-4'>
							<pre className='text-xs sm:text-sm'>
{`// vercel.json — full control of the build.
{
  "buildCommand": "node build.js",
  "outputDirectory": ".vercel/output",
  "framework": null
}`}
							</pre>
						</div>
						<div className='cli-window p-4'>
							<pre className='text-xs sm:text-sm'>
{`// build.js — package tools as optimized functions.
class VercelCustomBuilder {
  async build() {
    await this.buildMCPFunctions(); // API wrappers
    await this.buildAgentFunctions(); // Agent logic
  }
}`}
							</pre>
						</div>
					</article>
					<article className='flex flex-col gap-5 rounded-2xl border border-brand-accent-200 bg-brand-accent-200/25 p-6 shadow-sm'>
						<span className='text-xs font-semibold uppercase tracking-[0.3em] text-brand-text-muted'>03</span>
						<h3 className='text-lg font-matter font-semibold'>Integrate Seamlessly with Your Financial Stack</h3>
						<p className='text-sm text-brand-text-secondary'>Native Stripe utilities power real-time usage tracking, subscription gating, and invoice automation—tying every agent action straight into revenue.</p>
						<div className='cli-window p-4'>
							<pre className='text-xs sm:text-sm'>
{`// lib/framework.ts — automatically track usage.
import { trackUsage } from '@/lib/stringcost/server';

class BillingManager {
  async record(event) {
    await trackUsage({
      userId: this.userId,
      featureId: event.actionType,
      usage: Math.round(event.cost * 1000) || 1,
    });
  }
}`}
							</pre>
						</div>
						<div className='cli-window p-4'>
							<pre className='text-xs sm:text-sm'>
{`// middleware.ts — protect premium features.
import { checkEntitlement } from '@/lib/stringcost/server';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/premium-agents')) {
    const { hasAccess } = await checkEntitlement({ /* ... */ });
    if (!hasAccess) {
      return NextResponse.redirect(new URL('/pricing', request.url));
    }
  }
}`}
							</pre>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}

export function SourceOfTruthSection() {
	return (
		<section id='teams' className='bg-gradient-to-br from-brand-accent-100/30 via-brand-base to-brand-accent-200/20 text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-10 py-16 sm:py-20'>
				<div className='text-center max-w-3xl mx-auto space-y-4'>
					<h2 className='text-3xl font-matter font-semibold sm:text-4xl'>Built for Every Team in Your Organization</h2>
					<p className='text-sm text-brand-text-secondary sm:text-base'>Every team gets the visibility and control they need without rebuilding billing infrastructure from scratch.</p>
				</div>
				<div className='grid gap-6 lg:grid-cols-3'>
					<article className='relative flex flex-col gap-4 p-8 rounded-3xl bg-gradient-to-br from-brand-accent-100/40 to-white border-2 border-brand-accent-100 shadow-lg hover:shadow-xl transition-shadow'>
						<div className='flex items-center gap-3 mb-2'>
							<div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center'>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
									<line x1="18" y1="20" x2="18" y2="10"></line>
									<line x1="12" y1="20" x2="12" y2="4"></line>
									<line x1="6" y1="20" x2="6" y2="14"></line>
								</svg>
							</div>
							<div>
								<span className='block text-xs uppercase tracking-wider text-brand-text-muted font-semibold'>Product</span>
								<h3 className='text-lg font-matter font-bold text-brand-text-primary'>For Product Teams</h3>
							</div>
						</div>
						<p className='text-sm text-brand-text-secondary leading-relaxed'>Go to market with complex, usage-based pricing models in days, not quarters. Experiment with billing per-action, per-thought, or per-tool.</p>
					</article>
					<article className='relative flex flex-col gap-4 p-8 rounded-3xl bg-gradient-to-br from-brand-accent-300/30 to-white border-2 border-brand-accent-300 shadow-lg hover:shadow-xl transition-shadow'>
						<div className='flex items-center gap-3 mb-2'>
							<div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center'>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
									<polyline points="16 18 22 12 16 6"></polyline>
									<polyline points="8 6 2 12 8 18"></polyline>
								</svg>
							</div>
							<div>
								<span className='block text-xs uppercase tracking-wider text-brand-text-muted font-semibold'>Engineering</span>
								<h3 className='text-lg font-matter font-bold text-brand-text-primary'>For Engineering Teams</h3>
							</div>
						</div>
						<p className='text-sm text-brand-text-secondary leading-relaxed'>Build any agent imaginable with a Next.js-native DX while the framework handles billing, observability, and compliance-grade audit trails.</p>
					</article>
					<article className='relative flex flex-col gap-4 p-8 rounded-3xl bg-gradient-to-br from-brand-accent-200/40 to-white border-2 border-brand-accent-200 shadow-lg hover:shadow-xl transition-shadow'>
						<div className='flex items-center gap-3 mb-2'>
							<div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center'>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
									<line x1="12" y1="1" x2="12" y2="23"></line>
									<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
								</svg>
							</div>
							<div>
								<span className='block text-xs uppercase tracking-wider text-brand-text-muted font-semibold'>Finance & Ops</span>
								<h3 className='text-lg font-matter font-bold text-brand-text-primary'>For Finance & Ops</h3>
							</div>
						</div>
						<p className='text-sm text-brand-text-secondary leading-relaxed'>Eliminate billing errors with a perfect record of every billable action. Sync usage to Stripe for invoices your customers—and auditors—can trust.</p>
					</article>
				</div>
			</div>
		</section>
	);
}

export function AccountingSection() {
	return (
		<section id='accounting' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-10 py-16 sm:py-20'>
				<div className='max-w-3xl space-y-3'>
					<h2 className='text-3xl font-matter font-semibold sm:text-4xl'>Flexible Accounting for Any AI Business Model</h2>
					<p className='text-sm text-brand-text-secondary sm:text-base'>This double-entry approach unlocks any pricing strategy you can imagine.</p>
				</div>
				<div className='grid gap-6 lg:grid-cols-3'>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-100 bg-brand-surface p-6 shadow-sm'>
						<span className='inline-flex w-fit items-center rounded-full bg-brand-accent-100 px-3 py-1 text-xs font-semibold text-brand-text-secondary'>01 · Tiered</span>
						<h3 className='text-lg font-matter font-semibold text-brand-text-primary'>Tiered &amp; Hybrid Billing</h3>
						<p className='text-sm text-brand-text-secondary'>Assign different costs and prices to different actions. Charge more for premium tools or more powerful models.</p>
						<div className='cli-window-dark p-4'>
							<pre className='text-xs sm:text-sm' dangerouslySetInnerHTML={{__html: `<span class="code-comment">// Agent Code</span>
await step({
  name: "Basic Analysis",
  actionType: "llm_call",
  unitCost: 0.001
}, ...);

await step({
  name: "Premium Data Tool",
  actionType: "tool_use",
  unitCost: 0.050
}, ...);

<span class="code-comment">// Resulting Ledger</span>
<span class="code-comment">// DEBIT: Cost of gpt-4-turbo tokens</span>
<span class="code-comment">// CREDIT: $0.0010 revenue</span>
<span class="code-comment">// DEBIT: Cost of Premium Data API</span>
<span class="code-comment">// CREDIT: $0.0500 revenue</span>`}} />
						</div>
					</article>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-200 bg-brand-accent-200/25 p-6 shadow-sm'>
						<span className='inline-flex w-fit items-center rounded-full bg-brand-accent-200 px-3 py-1 text-xs font-semibold text-brand-text-primary'>02 · Dynamic</span>
						<h3 className='text-lg font-matter font-semibold text-brand-text-primary'>Dynamic &amp; Performance-Based Billing</h3>
						<p className='text-sm text-brand-text-secondary'>The price of a step can be calculated at runtime. Charge based on execution time, ensuring your margins are always protected.</p>
						<div className='cli-window-dark p-4'>
							<pre className='text-xs sm:text-sm' dangerouslySetInnerHTML={{__html: `<span class="code-comment">// Registering a tool with</span>
<span class="code-comment">// a dynamic cost function</span>
McpRegistry.register(
  'dataApi',
  '...',
  (metrics) => {
    <span class="code-comment">// Base fee + time-based markup</span>
    const timeCost = Math.floor(
      metrics.durationMs / 100
    ) * 0.005;
    return 0.01 + timeCost;
  }
);`}} />
						</div>
					</article>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-300 bg-brand-accent-300/15 p-6 shadow-sm'>
						<span className='inline-flex w-fit items-center rounded-full bg-brand-accent-300 px-3 py-1 text-xs font-semibold text-white'>03 · Outcome-Based</span>
						<h3 className='text-lg font-matter font-semibold text-brand-text-primary'>Outcome-Based Billing: Only Pay for Results</h3>
						<p className='text-sm text-brand-text-secondary'>Build ultimate trust with your customers. Since every step captures execution outcome, you can design billing models that only create a revenue entry for successful actions.</p>
						<div className='cli-window-dark p-4'>
							<pre className='text-xs sm:text-sm' dangerouslySetInnerHTML={{__html: `<span class="code-comment">// Your billing logic</span>
function processBillingEvent(event) {
  <span class="code-comment">// The COGS (debit) is always</span>
  <span class="code-comment">// recorded, but the revenue</span>
  <span class="code-comment">// (credit) is conditional</span>
  if (event.outcome === 'success') {
    chargeCustomer(
      event.userId,
      event.cost
    );
  }
}`}} />
						</div>
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
					<h2 className='text-3xl font-matter font-semibold sm:text-4xl'>Stop Building on Proxies. Start Building on a System of Record.</h2>
					<p className='text-sm text-brand-text-secondary sm:text-base'>Schedule a demo to see how StringCost&apos;s double-entry ledger can give you the financial control to ship profitable AI agents with confidence.</p>
					<div className='flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row'>
						<a href='https://calendar.app.google/hjN2HkZBLJMtSuku7' className={primaryButton}>
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
