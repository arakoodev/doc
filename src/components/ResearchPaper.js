// src/components/ResearchPaper.js
import React from 'react';
import MDXContent from '@theme/MDXContent';
import Research, {frontMatter as research} from "../markdown/home/research.md"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
const ResearchPaper = () => {
    const { subtitle, title, authors, authorsImg, icon, conference, location, experiment } = research
    return (
        <div className="flex text-[#3E3E59] flex-col md:grid grid-cols-2 gap-14 py-10 px-4 lg:w-[85%] text-sm  mx-auto">
            
            <div className='w-full'>
                <p className='text-head font-Quicksand mb-4 text-sm font-semibold uppercase'>
                    {subtitle[0]} &nbsp; {subtitle[1]} &nbsp; {subtitle[2]}
                </p>
                <h1 className="text-2xl text-[#23262F] font-Quicksand font-bold mb-4">{title}</h1>

                <div className='flex gap-4 font-Quicksand   text-[#083040]'>
                    <p className="font-normal ">
                        <span className='text-[#687E87] font-light'>{conference[0]} </span> 
                        {conference[1]}
                    </p>
                    <p className="font-normal">
                        <FontAwesomeIcon icon={location[0]} className='mr-2' />
                        {location[1]} 
                        <span className='text-[#687E87] font-light'> {location[2]}</span> 
                    </p> 
               </div>
                <hr className='border-b border-solid border-[#E6E8EC] my-2 mb-4'/>
                <div className=" font-Quicksand flex font-light  items-center gap-4 mb-6"> 
                    // <span className="mr-0">by</span>  
                    // <span className='flex   items-center gap-2'>
                    //     <img src={authorsImg[0]}  /> 
                    //     <strong className='font-normal'>{authors[0]} </strong>
                    // </span>
                    // <span className='flex items-center gap-2'>
                    //     <img src={authorsImg[1]}  /> 
                    //     <strong className='font-normal'>{authors[1]}</strong> 
                    // </span>
                    // <span className='flex items-center gap-2'>
                    //     <img src={authorsImg[2]}  /> 
                    //     <strong className='font-normal'>{authors[2]}</strong>
                    // </span>
                </div>

                <div className="leading-6">
                 <MDXContent >
                     <Research />
                 </MDXContent>
               </div>
            </div>
            <div className='w-full'>
                <h2 className="text-2xl font-Quicksand text-head font-semibold ">{experiment.title}</h2>
                <p className='text-head mb-8'>{experiment.desc}</p>
               <div className='flex flex-col gap-6'>
                    <img src={experiment.img[0]} alt="" />
                    <p className='text-center font-semibold text-[#23262F]'>{experiment.imgDesc[0]}</p>
                    <img src={experiment.img[1]} alt="" />
                    <p>{experiment.imgDesc[1]}</p>
                    <a
                        href={experiment.readmore.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        // className="text-blue-500 font-semibold hover:underline"
                    >
                        <img src={experiment.readmore.icon} alt="" />
                    </a>
               </div>
            </div>
            
          
        </div>
    );
};

export default ResearchPaper;
