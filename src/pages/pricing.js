import React, { useRef, useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MDXContent from '@theme/MDXContent';

import PricingCard from '../components/PricingCard/pricingCard';
import ComparePlans from '../components/Plans/ComparePlans';
import Faq from '../components/Faq';
import PricingHead from "../markdown/pricing/pricing.mdx"
import Easy from "../markdown/pricing/easy.mdx"
import Cards from "../markdown/pricing/cards.mdx"
import CardsHeading from "../markdown/pricing/cardsHeading.mdx"
import Cta from "../markdown/pricing/cta.mdx"
import RequestFeature from "../markdown/pricing/requestFeature.mdx"
import CostControl from "../markdown/pricing/CostControl.mdx"
import ComparePlansHead from "../markdown/pricing/comparePlansHead.mdx"
export default function Pricing() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <main className='min-h-screen'>
          <PricingHead />
          <PricingCard />
         
          <div className='py-20 pb-40 px-4 items-center text-center sm:px-6 lg:px-8'>
            <Easy />
          </div>
          
          <CardsHeading />
          <div className='grid lg:grid-cols-3 gap-4 mb-16 px-10'>
            <div className="bg-white dark:bg-neutral-800 rounded-[4px]">
              <Cards />
              
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-[4px]">
              <Cards />
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-[4px]">
              <Cards />              
            </div>
          </div>
          <RequestFeature />
          <div className='px-14 pb-32'>
            <div className="grid lg:grid-cols-2 gap-8 items-center mt-12 lg:mt-8 max-w-6xl mx-auto">
              <CostControl />
            </div>
          </div>
          <div className='px-20'>
            <div className='text-center'>
              <ComparePlansHead />
            </div>
            <ComparePlans />
          </div>
          <Faq />

          <div className="border-solid border-neutral-800 bg-scale-200 grid grid-cols-12 items-center gap-4 border-0 border-t border-b  py-32 text-center px-16">
                <Cta />
          </div>
        </main>
      </Layout>
    </div>
  );
}
