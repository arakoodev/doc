import React, { useRef, useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MDXContent from '@theme/MDXContent';

import PricingCard from '../components/PricingCard/index';
import ComparePlans from '../components/Plans/ComparePlans';
import Faq from '../components/Faq';
import Cards from '../components/cards';

import {frontMatter as HeadPricing } from "../markdown/pricing/pricing.md"
import {frontMatter as cardsHeading } from "../markdown/pricing/cardsHeading.mdx"
import {frontMatter as Easy} from "../markdown/pricing/easy.mdx"
import {frontMatter as Cardsvalue} from "../markdown/pricing/cards.mdx"
import {frontMatter as Cta} from "../markdown/pricing/cta.mdx"
import {frontMatter as RequestFeature} from "../markdown/pricing/requestFeature.mdx"
import {frontMatter as CostControl} from "../markdown/pricing/CostControl.mdx"
import {frontMatter as ComparePlansHead} from "../markdown/pricing/comparePlansHead.mdx"
import {frontMatter as PricingCardValue} from "../markdown/pricing/pricingCard.md"

export default function Pricing() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <main className='min-h-screen'>

          <div className="relative z-10 py-16 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl space-y-2 lg:max-w-none">
                <h1 className="text-emerald-600 text-base">{HeadPricing.title}</h1>
                <h2 className="h1">{HeadPricing.tagline}</h2>
                <p className="p text-lg">{HeadPricing.description}</p>
              </div>
            </div>
          </div>
          <PricingCard Free={PricingCardValue.Free} Pro={PricingCardValue.Pro} Enterprise={PricingCardValue.Enterprise}/>
         
          <div className='py-20 pb-40 px-4 items-center text-center sm:px-6 lg:px-8'>
            <button className='rounded bg-neutral-800 outline-0 cursor-pointer focus-visible:outline-4 focus-visible:outline-offset-1 -visible:outline-neutral-700 px-4 py-2 font-regular transition ease-out duration-200  outline-none hover:bg-emerald-400 text-white  shadow-neutral-900  hover:border-emerald-600 dark:shadow-neutral-900  shadow-sm text-ms leading-4  m-0 border-0'>
              {Easy.title}
            </button>
          </div>
          
          <div className="pb-8 text-center">
            <h2 className="text-neutral-400 text-3xl">{cardsHeading.title}</h2>
            <p className="text-scale-1100 mt-4 mb-16 text-lg">{cardsHeading.desc}</p>
          </div>
          <div className='grid lg:grid-cols-3 gap-4 mb-16 px-10'>
            <div className="bg-white dark:bg-neutral-800 rounded-[4px]">
              <Cards hero={Cardsvalue.Free.hero} desc={Cardsvalue.Free.desc} start={Cardsvalue.Free.start} head={Cardsvalue.Free.head} cta={Cardsvalue.Free.cta} />
              
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-[4px]">
              <Cards hero={Cardsvalue.Pro.hero} desc={Cardsvalue.Pro.desc} start={Cardsvalue.Pro.start} head={Cardsvalue.Pro.head} cta={Cardsvalue.Pro.cta} />
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-[4px]">
              <Cards hero={Cardsvalue.Enterprise.hero} desc={Cardsvalue.Enterprise.desc} start={Cardsvalue.Enterprise.start} head={Cardsvalue.Enterprise.head} cta={Cardsvalue.Enterprise.cta} />           
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 justify-center text-center">
            <span className="text-neutral-200">{RequestFeature.title}
            </span>
            <a target="_blank" href="https://github.com/supabase/supabase/discussions/categories/feature-requests">
              <button className="rounded bg-neutral-800 outline-0 cursor-pointer focus-visible:outline-4 focus-visible:outline-offset-1 -visible:outline-neutral-700 px-4 py-[.5em] font-regular transition ease-out duration-200  outline-none hover:bg-emerald-400 text-white  shadow-neutral-900  hover:border-emerald-600 dark:shadow-neutral-900  shadow-sm text-ms leading-4  m-0 border-0" type="button">
                <span className="truncate">{RequestFeature.button}
                </span>
              </button>
            </a>
          </div>

          <div className='px-14 pb-32'>
            <div className="grid lg:grid-cols-2 gap-8 items-center mt-12 lg:mt-8 max-w-6xl mx-auto">
              <div>
                <span className="bg-emerald-500 text-emerald-1100 rounded-md bg-opacity-30 inline-block dark:bg-neutral-800 dark:text-neutral-200 py-0.5 px-2 text-xs mt-2">{CostControl.available}</span>
                <h2 className="text-neutral-200 text-4xl mt-4">{CostControl.title}</h2>
                <p className="mt-3 text-neutral-400 lg:max-w-lg">
                  {CostControl.desc}
                </p>
              </div>
              <div>
                <div className="">
                  <img className="w-full" src={CostControl.img} />
                </div>
              </div>

            </div>
          </div>

          <div className='px-20'>
            <div className='text-center'>
              <h2 className="text-neutral-200 text-3xl my-6 sm:my-0" id="compare-plans">
                {ComparePlansHead.title}
              </h2>
              <p className="text-neutral-400 mt-4 mb-4 lg:mb-16 text-lg">\
                {ComparePlansHead.desc}
              </p>
            </div>

            <ComparePlans />
          </div>
          <Faq />

          <div className="border-solid border-neutral-800 bg-scale-200 grid grid-cols-12 items-center gap-4 border-0 border-t border-b  py-32 text-center px-16">
                <div className="col-span-12">
                  <h2 className="font-medium">
                    <span className="text-neutral-400">{Cta.title}</span>
                <span className="text-neutral-400 dark:text-white">{Cta.span}</span>
                  </h2>
                </div>
                <div className="col-span-12 mt-4"><a href="https://app.supabase.com/">
                  <button className=" relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   bg-emerald-700 hover:bg-emerald-600 shadow-emerald-900 hover:bordershadow-emerald-fixed-900 dark:shadow-emerald-900 dark:hover:shadow-emerald-900 focus-visible:outline-emerald-800 border-0 shadow-sm text-sm px-4 py-2 text-white" type="button">
                <span className="truncate">{Cta.cta}</span>
                  </button>
                </a>
                </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
