import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
// import { MDXProvider } from '@mdx-js/react';
// import { MDXRenderer } from '@docusaurus/mdx';
import MDXContent from '@theme/MDXContent';

import HomeContent, { frontMatter } from '../markdown/home.mdx';

import InstallBox from '../components/installBox';
import Benchmark from '../components/bookmark';
import TabPanel from '../components/Tab';
import Quotes from '../components/blog/quotes';
import CodeTabPanel from "../components/codeTab"
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
        description="Description will go into a meta tag in <head />">
        <Head>
          <title>{frontMatter.title}</title>
        </Head>
        <div
          id="homepage"
          className="px-4 md:px-4 xl:px-14  flex w-full flex-row items-center justify-center   pt-[5rem] pb-[5rem] text-indigo-950 md:pt-[6rem] md:pb-[8rem] bg-bgLight dark:bg-bgLight"
        >
          <main className="mx-auto my-0 flex w-full flex-col items-center gap-8 md:max-w-screen-sm lg:max-w-[var(--max-width)] lg:flex-row lg:justify-between">
            <div className="lg:w-3/5">
              <h1 className="mt-0 text-[26pt] font-medium font-Quicksand leading-none text-indigo-950 md:text-[32pt] lg:text-[38pt] xl:text-[4em] uppercase">
                {frontMatter.title}
              </h1>
              <p className="text-[1em] w-2/4 py-16  leading-normal dark:text-neutral-300">
                {frontMatter.desc}
              </p>
              <div className='flex gap-4'>
                <button className='rounded-full bg-indigo-950 px-8 text-white p-3 outline-0 border-0'>• get Started</button>
                <button className='rounded-full border-solid bg-bgLight border-indigo-950 px-8 text-indigo-950 p-3 outline-0 border'>• Learn More</button>
              </div>
            </div>
            <div className="w-full flex-0 lg:flex-1">
              {/* <Benchmark /> */}

              <TabPanel TabpanelValue={frontMatter.Tabpanel} />
              <div className='pt-4'><VersionsSection /></div>
              <div className="flex flex-col gap-4 py-4">
                <InstallBox code={frontMatter.code} source={frontMatter.link} version={frontMatter.version} />
              </div>
            </div>
          </main>
        </div>
        <div className='second section px-4 md:px-4 xl:px-20 flex flex-col gap-4 font-mono bg-bgLight text-black'>
          <div className='text-center'>lorem ipsum.md</div>
          <div className='border border-dotted border-black p-6 px-2 '>
            <p className='m-0'>title : lorem ipsum</p>
            <p className='m-0'>author : dummy</p>
            <p className='m-0'>description : this block is Yaml frontmatter</p>
          </div>

          <div>
            <h3 className='text-indigo-800 text-3xl'># Lorem Ipsum</h3>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.</p>
          </div>
          <div>
            <h3 className='text-indigo-800 text-3xl'>## Example Text</h3>
            <p>a common form of <i>lorem ipsum</i> reads : </p>
            <blockquote class="p-4 my-4 border-l-4 border-gray-300 text-black bg-zinc-200 dark:border-gray-500 ">
              <p class="font-medium leading-relaxed ">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
            </blockquote>
          </div>
        </div>

        <div className='third section bg-zinc-800 text-white px-4 md:px-4 xl:px-14 py-24   text-center '>
          <div className=' max-w-xl mx-auto flex flex-col justify-center gap-12 items-center'>
            <h3 className='text-red-600 text-4xl'>Open and Free Community <br /> <span className='text-white'>Based Software</span></h3>
  
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, rerum voluptatibus non repudiandae modi fugiat tempore quidem in aut magni temporibus, obcaecati natus illo tempora quas minus at magnam error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestias culpa maxime cumque sequi quis sapiente optio commodi, tempore officiis ab consequatur ex tempora, dolore, voluptatibus ea id? Ipsam, tempore!</p>
            <div className='flex gap-4'>
              <button className='border border-solid bg-zinc-800 border-white p-4'>Github</button>
              <button className='border border-solid bg-zinc-800 border-white p-4'>Chat</button>
            </div>
         </div>
        </div>

        <div className='Fourth bg-bgLight text-black section px-4 md:px-4 xl:px-14 py-16 '>
          <h3 className='text-center font-semibold text-4xl mb-16'>How it Works</h3>
          <div className='flex gap-4'>
            <div className='flex flex-col w-1/2 justify-around'>
              <div>
                <h4 className='text-indigo-700 font-normal uppercase text-2xl'>get set up</h4>
                <p>using your cli or the phyton packate to install horzon</p>
                <p>provide yout api keys and thatrs it yove all set to create your first projects and task</p>
              </div>
              <div >
                <h4 className='text-indigo-700 font-normal uppercase text-2xl'>Create your task</h4>
                <p>using your cli or the phyton packate to install horzon</p>
                <p>provide yout api keys and thatrs it yove all set to create your first projects and task</p>
              </div>
            </div>

              {/* in the middle here add "1" with circular border, and a horizontal line to the bottom */}

            <div className='flex flex-col items-center relative'>
              <div className="flex items-center justify-center bg-bgLight rounded-full h-16 w-16 border border-indigo-700 border-solid mb-4">
                <span className="text-2xl">1</span>
              </div>
              <div className="flex items-center justify-center z-10 absolute top-[20em] bg-bgLight rounded-full h-16 w-16 border border-indigo-700 border-solid mb-4">
                <span className="text-2xl">2</span>
              </div>
              <hr className="border-b absolute top-10 border-zinc-700 border-solid h-3/4 w-px bg-zinc-400 " />
              <hr className="border-b absolute top-10 border-zinc-700 border-solid h-[1em] w-px bg-indigo-700 " />

            </div>

            <div className=' flex flex-col gap-16 w-1/2'>
              <div className=''>
                <CodeTabPanel />
              </div>
              <div>
                <CodeTabPanel />
              </div>
            </div>
          </div>
        </div>
        <div className='dark:bg-bgLight dark:text-black px-8 py-16 lg:px-40 md:py-20'>
          <MDXContent >
            <HomeContent />
          </MDXContent>
        </div>
      </Layout>
    </div>
  );
}
