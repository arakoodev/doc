import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
// import { MDXProvider } from '@mdx-js/react';
// import { MDXRenderer } from '@docusaurus/mdx';
import MDXContent from '@theme/MDXContent';

import HomeContent from './home.mdx';

import InstallBox from '../components/installBox';
import Benchmark from '../components/bookmark';
import TabPanel from '../components/Tab';



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
        description="Description will go into a meta tag in <head />">
        <Head>
          <title>arako - A Fast All-in-One JavaScript Runtime</title>
        </Head>
        <div
          id="homepage"
          className="px-4 md:px-4 xl:px-24  flex w-full flex-row items-center justify-center bg-neutral-900  pt-[5rem] pb-[5rem] text-neutral-100 md:pt-[6rem] md:pb-[8rem]"
        >
          <main className="mx-auto my-0 flex w-full flex-col items-center gap-8 md:max-w-screen-sm lg:max-w-[var(--max-width)] lg:flex-row lg:justify-between">
            <div className="lg:w-3/5">
              <h1 className="mt-0 text-[26pt] font-extrabold leading-none dark:text-neutral-50 md:text-[32pt] lg:text-[38pt] xl:text-[40pt]">
                Bun is a fast all-in-one JavaScript runtime
              </h1>
              <p className="text-[1.3rem] leading-normal dark:text-neutral-300">
                Run, test, transpile, and bundle JavaScript &amp; TypeScript projects — all in Bun. Bun is a new JavaScript runtime built for speed and ease of use.
              </p>
              <div className="flex flex-col gap-4 ">
                <InstallBox code={`curl -fsSL https://bun.sh/install{' '} | bash`} source={"https://bun.sh/install"}/>
              </div>
            </div>
            <div className="w-full flex-0 lg:flex-1">
                {/* <Benchmark /> */}
              <TabPanel YoutubeVideoId={"cOv1GoWVcY4"}/>
              {/* <img src="/img/homepage.png" alt="Bun homepage" /> */}
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
