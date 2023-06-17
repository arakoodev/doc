import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
// import { MDXProvider } from '@mdx-js/react';
// import { MDXRenderer } from '@docusaurus/mdx';
import MDXContent from '@theme/MDXContent';

import HomeContent, { frontMatter } from '../markdown/home/home.mdx';
import Code1 from '../markdown/home/code1.md';
import Code2 from '../markdown/home/code2.md';

import InstallBox from '../components/installBox';
// import Benchmark from '../components/bookmark';
import TabPanel from '../components/Tab';
// import Quotes from '../components/blog/quotes';
import CodeTabPanel from "../components/codeTab"
import CodeTabPanel2 from "../components/codeTab2"
import VersionsSection from '../components/VersionsSection';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
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
              <p className="text-[1em] xl:w-2/4 py-6 xl:py-16 m-0 leading-normal dark:text-neutral-300">
                {frontMatter.desc}
              </p>
              <div className='flex gap-4 pb-6'>
                <a href={frontMatter.git.link} className='rounded-full cursor-pointer hover:bg-bgLight hover:text-indigo-950  hover:border-indigo-950 border-solid hover:border bg-indigo-950 px-4 xl:px-8 text-white p-3 outline-0 border-0'>{frontMatter.git.title}</a>
                <a href={frontMatter.learn.link} className='rounded-full cursor-pointer border-solid bg-bgLight border-indigo-950 px-4 xl:px-8 text-indigo-950 p-3 outline-0 border hover:bg-indigo-950 hover:text-white  '>{frontMatter.learn.title}</a>
              </div>
            </div>
            <div className="w-full flex-0 lg:w-1/2 md:flex-2 xl:flex-1 flex flex-col ">
              {/* <Benchmark /> */}

              <TabPanel TabpanelValue={frontMatter.Tabpanel} />
              <div className='pt-12 md:pt-4 md:mx-10'><VersionsSection /></div>
              <div className="flex flex-col gap-4 py-4 md:mx-9">
                <InstallBox code={frontMatter.code} source={frontMatter.link} version={frontMatter.version} />
              </div>
            </div>
          </main>
        </div>


        <div className='third section bg-white text-black px-4 md:px-4 xl:px-14 py-24   text-center '>
          <div className=' max-w-xl mx-auto flex flex-col justify-center gap-12 items-center'>
            <h3 className=' text-4xl font-serif font-normal'>{frontMatter.Community.title} <br /> <span className=''>{frontMatter.Community.span}</span></h3>

            <p>{frontMatter.Community.desc}</p>
            <div className='flex gap-4'>
              <a href={frontMatter.Community.github.link} className='border border-solid text-black no-underline bg-white border-black p-4  hover:bg-indigo-950 hover:text-white hover:no-underline '>{frontMatter.Community.github.label}</a>
              <a href={frontMatter.Community.discord.link} className='border border-solid text-black no-underline hover:bg-indigo-950 hover:text-white hover:no-underline bg-white border-black p-4 '>{frontMatter.Community.discord.label}</a>
            </div>
          </div>
        </div>

        <div className="Fourth bg-bgLight text-black section px-4 md:px-4 xl:px-14 py-16">
          <h3 className="text-center font-normal font-serif text-5xl mb-16">{frontMatter.How.headings}</h3>
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="flex flex-col md:w-1/2 md:pr-16 justify-around mb-8 md:mb-0">
              <div className='text-sm'>
                <h4 className="font-serif font-normal uppercase text-xl md:text-3xl">{frontMatter.How.firstStep.title}</h4>
                <div className='text-sm'>
                  <p className='m-0'>{frontMatter.How.firstStep.description}</p>
                </div>
              </div>

              <div className='text-sm'>
                <h4 className="font-serif font-normal uppercase text-xl md:text-3xl">{frontMatter.How.secondStep.title}</h4>
                <div className='text-sm'>
                  <p className='m-0'>{frontMatter.How.secondStep.description}</p>
                </div>
              </div>
            </div>

            {/* in the middle here add "1" with circular border, and a horizontal line to the bottom */}

            <div className="hidden md:flex flex-col items-center relative ">
              <div className="flex items-center justify-center bg-bgLight rounded-full h-16 w-16 border border-indigo-700 border-solid mb-4">
                <span className="text-2xl">1</span>
              </div>
              <div className="flex items-center justify-center z-20 absolute top-[20em] bg-bgLight rounded-full h-16 w-16 border border-indigo-700 border-solid mb-4">
                <span className="text-2xl">2</span>
              </div>
              <hr className="border-b absolute top-10  bottom-[-2.5em] md:bottom-[-2.5em] left-1/2 transform -translate-x-1/2 md:translate-x-0 border-zinc-700 border-solid h-3/4 w-px bg-zinc-400" />
              <hr className="border-b absolute top-10  bottom-[-2.5em] md:bottom-[-2.5em] left-1/2 transform -translate-x-1/2 md:translate-x-0 border-zinc-700 border-solid h-[1em] z-10 w-px bg-indigo-700" />
            </div>

            <div className="flex flex-col md:gap-16 md:pl-10 md:w-1/2">
              <div className="">
                {/* <MDXContent>
                  <Code1 />
                </MDXContent> */}
                <CodeTabPanel />
              </div>
              <div>
               {/* <MDXContent>
                 <Code1/> 
               </MDXContent> */}
                <CodeTabPanel2 />
              </div>
            </div>
          </div>
        </div>

        <div className='dark:bg-white bg-white prose-h4:mb-3 prose-h4:font-normal prose-h4:text-xl dark:text-black px-8 py-16 lg:px-40 md:py-20 prose max-w-none prose-img:my-0 prose-img:mt-1 prose-headings:text-black prose-headings:text-semibold prose-headings:font-serif prose-code:bg-white prose-code:rounded-md prose-code:border-black prose-code:border prose-code:border-solid prose-p:text-normal  '>
          <MDXContent >
            <HomeContent />
          </MDXContent>
        </div>
      </Layout>
    </div>
  );
}
