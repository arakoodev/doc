import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
// import { MDXProvider } from '@mdx-js/react';
// import { MDXRenderer } from '@docusaurus/mdx';
import MDXContent from '@theme/MDXContent';

import HomeContent, {frontMatter} from '../markdown/home.mdx';

import InstallBox from '../components/installBox';
// import Benchmark from '../components/bookmark';
import TabPanel from '../components/Tab';
// import Quotes from '../components/blog/quotes';
import CodeTabPanel from "../components/codeTab"
import CodeTabPanel2 from "../components/codeTab2"
import VersionsSection from '../components/VersionsSection';


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
          className="px-4 md:px-4 xl:px-14  flex w-full flex-row items-center justify-center   pt-[5rem] pb-4 md:pb-[5rem]  text-indigo-950 lg:pt-16 xl:pt-[6rem] lg:pb-[8rem] bg-bgLight dark:bg-bgLight"
        >
          <main className="mx-auto my-0 flex w-full flex-col items-center  xl:gap-8   lg:max-w-[var(--max-width)] lg:flex-row lg:justify-between">
            <div className="lg:w-3/5">
              <h1 className="mt-0 text-[26pt] font-medium font-Quicksand leading-none text-indigo-950 md:text-[32pt] lg:text-[38pt] xl:text-[4em] uppercase">
                {frontMatter.title}
              </h1>
              <p className="text-[1.3rem] leading-normal dark:text-neutral-300">
                {frontMatter.desc}
              </p>
              <div className="flex flex-col gap-4 ">
                <InstallBox code={frontMatter.code} source={frontMatter.link} version={frontMatter.version}/>
              </div>
            </div>
            <div className="w-full flex-0 lg:w-1/2 md:flex-2 xl:flex-1 flex flex-col ">
              {/* <Benchmark /> */}

              <TabPanel TabpanelValue={frontMatter.Tabpanel} />
            </div>
          </main>
        </div>
        <div className=' px-8 py-16 lg:px-40 md:py-20'>
          <MDXContent >
            <HomeContent />
          </MDXContent>
        </div>
      </Layout>
    </div>
  );
}