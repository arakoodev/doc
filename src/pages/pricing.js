import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import PricingCard from '../components/pricingCard';
import ComparePlans from '../components/ComparePlans';
import Faq from '../components/Faq';
import Dropdown from '../components/dropdown';

export default function Pricing() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <main>
          <div className="relative z-10 py-16 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl space-y-2 lg:max-w-none">
                <h1 className="text-brand-900 text-base">Pricing</h1>
                <h2 className="h1">Predictable pricing, no surprises</h2>
                <p className="p text-lg ">Start building for free, collaborate with a team, then neutral to millions of users</p>
              </div>
            </div>
          </div>
          <div>
            <PricingCard />
          </div>
          <div className='py-20 pb-40 px-4 items-center text-center sm:px-6 lg:px-8'>
            <button className='rounded bg-neutral-800 outline-0 cursor-pointer focus-visible:outline-4 focus-visible:outline-offset-1 -visible:outline-neutral-700 px-4 py-[.5em] font-regular transition ease-out duration-200  outline-none hover:bg-emerald-400 text-white  shadow-neutral-900  hover:border-emerald-600 dark:shadow-neutral-900  shadow-sm text-ms leading-4  m-0 border-0
            '>Compare Plans</button>
          </div>
          <div className="text-center"><h2 className="text-scale-1200 text-3xl">Easily customizable add-ons</h2><p className="text-scale-1100 mt-4 mb-8 lg:mb-16 text-lg">Level up your Supabase experience with add-ons.</p></div>
          <div className='grid lg:grid-cols-3 gap-4 mb-16 px-10'>
            <div className="bg-white dark:bg-neutral-800 rounded-[4px]">
              <div className="overflow-hidden rounded-lg">
                <img className="w-full" src="https://supabase.com/images/pricing/addons-compute-hero.png" alt="Compute Addon" />
              </div>
              <div className="px-8 py-4">
                <p className="text-xs text-neutral-900 dark:text-neutral-500 m-0">Starts from $5</p>
                <div className="flex items-center gap-2 mt-2">
                  <img src="https://supabase.com/images/pricing/compute-upgrade.svg" alt="Compute Upgrade" />
                  <span className="text-sm text-neutral-100">Optimized Compute</span>
                </div>
                <p className="mt-2 text-neutral-900 dark:text-neutral-400 text-xs min-h-[40px] lg:min-h-[50px] lg:max-w-[290px]">
                  Increase the capability of your database only for what you need.
                </p>
                <div className="flex items-center justify-between mt-4 mb-4">
                  <a href="https://supabase.com/docs/guides/platform/compute-add-ons" className=''>

                    <button
                      className="text-neutral-200 bg-neutral-800 hover:bg-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-300 font-medium rounded px-2.5 py-1 mr-1 font-medium ring-[.5px] ring-neutral-500 border-0 text-xs dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:ring-neutral-500 dark:border-neutral-500 "
                      type="button"
                    >
                      <span className="truncate">Documentation</span>
                    </button>
                  </a>
                  <p className="text-emerald-500 text-xs hover:underline m-0">See Pricing breakdown</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-[4px]">
              <div className="overflow-hidden rounded-lg">
                <img className="w-full" src="https://supabase.com/images/pricing/addons-compute-hero.png" alt="Compute Addon" />
              </div>
              <div className="px-8 py-4">
                <p className="text-xs text-neutral-900 dark:text-neutral-500 m-0">Starts from $5</p>
                <div className="flex items-center gap-2 mt-2">
                  <img src="https://supabase.com/images/pricing/compute-upgrade.svg" alt="Compute Upgrade" />
                  <span className="text-sm text-neutral-100">Optimized Compute</span>
                </div>
                <p className="mt-2 text-neutral-900 dark:text-neutral-400 text-xs min-h-[40px] lg:min-h-[50px] lg:max-w-[290px]">
                  Increase the capability of your database only for what you need.
                </p>
                <div className="flex items-center justify-between mt-4 mb-4">
                  <a href="https://supabase.com/docs/guides/platform/compute-add-ons" className=''>

                    <button
                      className="text-neutral-200 bg-neutral-800 hover:bg-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-300 font-medium rounded px-2.5 py-1 mr-1 font-medium ring-[.5px] ring-neutral-500 border-0 text-xs dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:ring-neutral-500 dark:border-neutral-500 "
                      type="button"
                    >
                      <span className="truncate">Documentation</span>
                    </button>
                  </a>
                  <p className="text-emerald-500 text-xs hover:underline m-0">See Pricing breakdown</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-[4px]">
              <div className="overflow-hidden rounded-lg">
                <img className="w-full" src="https://supabase.com/images/pricing/addons-compute-hero.png" alt="Compute Addon" />
              </div>
              <div className="px-8 py-4">
                <p className="text-xs text-neutral-900 dark:text-neutral-500 m-0">Starts from $5</p>
                <div className="flex items-center gap-2 mt-2">
                  <img src="https://supabase.com/images/pricing/compute-upgrade.svg" alt="Compute Upgrade" />
                  <span className="text-sm text-neutral-100">Optimized Compute</span>
                </div>
                <p className="mt-2 text-neutral-900 dark:text-neutral-400 text-xs min-h-[40px] lg:min-h-[50px] lg:max-w-[290px]">
                  Increase the capability of your database only for what you need.
                </p>
                <div className="flex items-center justify-between mt-4 mb-4">
                  <a href="https://supabase.com/docs/guides/platform/compute-add-ons" className=''>

                    <button
                      className="text-neutral-200 bg-neutral-800 hover:bg-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-300 font-medium rounded px-2.5 py-1 mr-1 font-medium ring-[.5px] ring-neutral-500 border-0 text-xs dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:ring-neutral-500 dark:border-neutral-500 "
                      type="button"
                    >
                      <span className="truncate">Documentation</span>
                    </button>
                  </a>
                  <p className="text-emerald-500 text-xs hover:underline m-0">See Pricing breakdown</p>
                </div>
              </div>
            </div>

          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center text-center">
            <span className="text-neutral-300 text-neutral-200">Got something you'd like to see here?</span>
            <a target="_blank" href="https://github.com/supabase/supabase/discussions/categories/feature-requests">
              <button className="rounded bg-neutral-800 outline-0 cursor-pointer focus-visible:outline-4 focus-visible:outline-offset-1 -visible:outline-neutral-700 px-4 py-[.5em] font-regular transition ease-out duration-200  outline-none hover:bg-emerald-400 text-white  shadow-neutral-900  hover:border-emerald-600 dark:shadow-neutral-900  shadow-sm text-ms leading-4  m-0 border-0" type="button">
                <span className="truncate">Request a feature</span>
              </button>
            </a>
          </div>

          <div className='px-14 pb-32'>
            <div className="grid lg:grid-cols-2 gap-8 items-center mt-12 lg:mt-8 max-w-6xl mx-auto">
              <div>
                <span className="bg-brand-500 text-brand-1100 rounded-md bg-opacity-30 inline-block dark:bg-neutral-800 dark:text-neutral-200 py-0.5 px-2 text-xs mt-2">Available for Pro plan</span>
                <h2 className="text-neutral-200 text-4xl mt-4">Cost control with spend caps</h2>
                <p className="mt-3 text-neutral-400 lg:max-w-lg">
                  The Pro tier has a usage quota included and a spend cap turned on by default. If you need to go beyond the inclusive limits, simply switch off your spend cap to pay for additional usage and scale seamlessly. Note that your project will run into restrictions if you have the spend cap enabled and exhaust your quota.
                </p>
              </div>
              <div>
                <div className="">
                  <img className="w-full" src="https://supabase.com/images/pricing/spend-cap.png" />
                </div>
              </div>

            </div>
          </div>

          <div className="text-center">
            <h2 className="text-neutral-200 text-3xl my-20 sm:my-0" id="compare-plans">
              Compare Plans
            </h2>
            <p className="text-neutral-300 mt-4 mb-8 lg:mb-16 text-lg">
              Start with a hobby project, collaborate with a team, and scale to millions of users.
            </p>
          </div>

          <ComparePlans/>
          <div className="
        bg-scale-200 grid grid-cols-12 items-center gap-4 border-t py-32 text-center
         px-16
      "><div className="col-span-12"><h2 className="h2"><span className="text-scale-900">Build in a weekend,</span><span className="text-scale-1200 dark:text-white"> scale to millions</span></h2></div><div className="col-span-12 mt-4"><a href="https://app.supabase.com/"><button className=" relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   bg-brand-fixed-1100 hover:bg-brand-fixed-1000 text-white bordershadow-brand-fixed-1000 hover:bordershadow-brand-fixed-900 dark:bordershadow-brand-fixed-1000 dark:hover:bordershadow-brand-fixed-1000 focus-visible:outline-brand-600  shadow-sm text-sm px-4 py-2 text-white" type="button"><span className="truncate">Start your project</span></button></a></div></div>
        
        {/* <Faq /> */}

        <Dropdown />
        </main>
      </Layout>
    </div>
  );
}
