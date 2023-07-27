// src/components/ResearchPaper.js
import React from 'react';
import MDXContent from '@theme/MDXContent';
import Research, {frontMatter as research} from "../markdown/home/research.md"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
const ResearchPaper = () => {
    const {} = research
    return (
        <div className="flex text-[#3E3E59] flex-col md:grid grid-cols-2 gap-14 py-10 px-4 lg:w-[85%] text-sm  mx-auto">
            {console.log(research)}
            <div className='w-full'>
                <p className='text-head font-Quicksand mb-4 text-sm font-semibold uppercase'>[ &nbsp; The Research Paper &nbsp; ]</p>
                <h1 className="text-2xl text-[#23262F] font-Quicksand font-bold mb-4">Prompting Is Programming: A Query Language For Large Language Models</h1>

                <div className='flex gap-4 font-Quicksand   text-[#083040]'>
                    <p className="font-normal ">
                        <span className='text-[#687E87] font-light'>Accepted at </span> 
                        ACM SIGPLAN PLDI'23
                    </p>
                    <p className="font-normal">
                        <FontAwesomeIcon icon="fa-regular fa-flag" className='mr-2' />
                        SRIlab 
                        <span className='text-[#687E87] font-light'> ETH Zurich, Switzerland</span> 
                    </p> 
               </div>
                <hr className='border-b border-solid border-[#E6E8EC] my-2 mb-4'/>
                <div className=" font-Quicksand flex font-light  items-center gap-4 mb-6"> 
                    <span className="mr-0">by</span>  
                    <span className='flex   items-center gap-2'>
                        <img src="/img/avatar1.png"  /> 
                        <strong className='font-normal'>Luca Beurer Kellner </strong>
                    </span>
                    <span className='flex items-center gap-2'>
                        <img src="/img/avatar2.png"  /> 
                        <strong className='font-normal'>Marc Fischer </strong> 
                    </span>
                    <span className='flex items-center gap-2'>
                        <img src="/img/avatar3.png"  /> 
                        <strong className='font-normal'>Martin Vechev</strong>
                    </span>
                </div>

                <div className="leading-6">
                 <MDXContent >
                     <Research />
                 </MDXContent>
               </div>
            </div>
            <div className='w-full'>
                <h2 className="text-2xl font-Quicksand text-head font-semibold mb-4">Experimental Results</h2>
                <p className='text-head'>Compared to standard decoding using 🤗 Transformers' generate() function, LMQL allows for high-level control and requires less tokens to be processed.</p>
               <div className='flex flex-col gap-4'>
                    <img src="/svg/research/cot.svg" alt="" />
                    <p className='text-center font-semibold text-[#23262F]'>Chain-Of-Thought reasoning with LMQL vs. standard decoding.</p>
                    <img src="/svg/research/interactive.svg" alt="" />
                    <p>Query statistics of using LMQL for interactive language model querying vs. standard decoding.</p>
                    <a
                        href="https://example.com/full-paper.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        // className="text-blue-500 font-semibold hover:underline"
                    >
                        <img src="/svg/research/read.svg" alt="" />
                        {/* Read full paper */}
                    </a>
               </div>
            </div>
            
          
        </div>
    );
};

export default ResearchPaper;
