// src/HowTo.js
import React from 'react';
import MDXContent from '@theme/MDXContent';
import Code4 from "../markdown/home/code4.md";
import Code5 from "../markdown/home/code5.md";
import QuickStart from "../../static/svg/howTo/QuickStart.svg"
import InstallBun from "../../static/svg/howTo/installBun.svg"
import Step1, { frontMatter as frontMatterStep1 } from "../markdown/home/step/step1.md"
import Step2, { frontMatter as frontMatterStep2 } from "../markdown/home/step/step2.md"
import Step3, { frontMatter as frontMatterStep3 } from "../markdown/home/step/step3.md"

const HowTo = (props) => {
    const { headings, desc, subtitle } = props.props
    return (
        <div className="my-8 max-w-screen-lg mx-auto">

            <div className='text-center mb-16'>
                <p className='text-head font-Quicksand font-semibold uppercase'>
                    {subtitle[0]}
                    &nbsp;&nbsp;&nbsp;
                    {subtitle[1]}
                    &nbsp;&nbsp;&nbsp;
                    {subtitle[2]}
                </p>
                <h1 className="mt-0 mb-6 text-[26pt] font-semibold font-Quicksand leading-none text-head md:text-[32pt] lg:text-[38pt] xl:text-[3.5em] ">
                    {headings}
                </h1>
                <p className="text-lg text-[#666666] mb-6 w-[80%] mx-auto">
                    {desc}
                </p>
            </div>

            <div className="relative flex-col flex gap-12 lg:gap-24">

                <StepCard
                    step={frontMatterStep1.step}
                    title={frontMatterStep1.title}
                    description={frontMatterStep1.description}
                >
                    <Step1 />
                </StepCard>
                <StepCard
                    step={frontMatterStep2.step}
                    title={frontMatterStep2.title}
                    description={frontMatterStep2.description}
                    reversed={true}
                >
                    <Step2 />
                </StepCard>
                <StepCard
                    step={frontMatterStep3.step}
                    title={frontMatterStep3.title}
                    description={frontMatterStep3.description}
                >
                    <Step3 />
                </StepCard>



                <div className='flex mx-auto gap-2 px-4 md:px-0 lg:gap-8'>
                    <a href='#' className='cursor-pointer'>
                        <QuickStart className='w-32 md:w-full' />

                    </a >

                    <a href='#' className='cursor-pointer'>
                        <InstallBun className='w-32 md:w-full' />
                    </a>

                </div>
            </div>
        </div>
    );
};

const StepCard = ({ step, title, description, reversed, children }) => {
    return (
        <div className={`flex px-4 md:px-0  relative items-center flex-col-reverse  ${reversed ? "md:flex-row-reverse" : "md:flex-row"}`}>
            <div className={`flex items-center HowCode w-full md:w-[45%] px-4 md:px-0 ${!reversed ? "" : "md:pl-4"} `}>
                <MDXContent>
                    {children}
                </MDXContent>;
            </div>
            <div className='hidden md:flex w-32'>
                <img src="/svg/howTo/center-line.svg" alt="" className='absolute top-0 left-[50%]' />
            </div>
            <div className={`bg-white flex  flex-col md:w-1/2 px-4 md:px-0 justify-center 
            ${reversed ? "" : "md:pl-4"}`}>
                <p className="text-sm uppercase text-orange-600 font-Quicksand font-semibold mb-4">
                 {step[0]}
                    &nbsp;&nbsp;&nbsp;
                 {step[1]}
                    &nbsp;&nbsp;&nbsp;
                 {step[2]}
                </p>
                <h2 className="text-2xl font-Quicksand font-semibold mb-2">{title}</h2>
                <p className='font-sans text-[#666666]'>{description}</p>
            </div>
        </div>
    );
};

export default HowTo;
