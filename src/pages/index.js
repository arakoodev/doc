import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
// import { MDXProvider } from '@mdx-js/react';
// import { MDXRenderer } from '@docusaurus/mdx';
// import MDXContent from '@theme/MDXContent';
import GetStartedButtonSvg from "../../static/svg/getStatedHome.svg"

import HomeContent, {frontMatter} from '../markdown/home/home.mdx';

// import InstallBox from '../components/installBox';
// import Benchmark from '../components/bookmark';
import TabPanel from '../components/Tab';
// import Quotes from '../components/blog/quotes';
// import CodeTabPanel from "../components/codeTab"
// import CodeTabPanel2 from "../components/codeTab2"
// import VersionsSection from '../components/VersionsSection';
import FeaturesSection from "../components/FeaturesSection";
import APISection from '../components/APISection';
import ResearchPaper from '../components/ResearchPaper';
import HowTo from '../components/HowTo';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
      {/* <a href="/blog/bun-v0.5.9" className="">
        <div className="flex h-10 w-full flex-row items-center  justify-center bg-neutral-900 text-center text-neutral-200">
          <p className="duration-100 group-hover:scale-105 m-0">
            Bun v0.5.9 is now available →
          </p>
        </div>
      </a> */}
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="SERVERLESS, COMPRESSION AND CACHE FOR GPT & LLM">
        <Head>
          <title>{frontMatter.title}</title>
        </Head>
        <div

          id="homepage"
          className="px-4 md:px-4 xl:px-14  flex w-full flex-col items-center justify-center   pt-[7rem] pb-4 md:pb-[5rem]  text-indigo-950 md:pt-52 lg:pb-[8rem] bg-white dark:bg-bgLight bg-[url('/img/backgroundPattern.png')]"
        >
          <main className="mx-auto my-0 flex  w-full flex-col items-center  gap-8   lg:max-w-[var(--max-width)] lg:justify-between">
            <div className="flex items-center flex-col text-center mb-12 lg:mb-0">
              <h1 className="mt-0 mb-8 text-[26pt]  font-semibold font-Quicksand leading-none text-head md:text-[32pt] lg:text-[38pt] xl:text-[3.5em] ">
                {frontMatter.title[0]}
                <br />
                {frontMatter.title[1]}

              </h1>
              <p className="text-[1.3rem] leading-normal text-gray-400">
                {frontMatter.desc}
              </p>


              <a className='pt-4' href={frontMatter.button[1]}>

                <GetStartedButtonSvg/>
              </a>
            </div>
            <div className="flex flex-col w-[80%]">
              {/* <Benchmark /> */}

              <TabPanel TabpanelValue={frontMatter.Tabpanel} />
            </div>
          </main>
        </div>
       <div className='py-24 bg-bgLight'>
          <APISection data={frontMatter.Api} />
       </div>
        <div>
          <FeaturesSection/>
        </div>
        <div className='bg-bgLight py-24'>
          <ResearchPaper/>
        </div>
        <div className='px-4 py-24'>
         
          <HowTo props={frontMatter.How} />
        </div>
        {/* <div className=' px-8 py-16 lg:px-40 md:py-20'>
          <MDXContent >
            <HomeContent />
          </MDXContent>
        </div> */}
      </Layout>
    </div>
  );
}
