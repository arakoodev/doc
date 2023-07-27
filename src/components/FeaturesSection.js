// FeaturesSection.js
import React from 'react';
import { frontMatter } from "../markdown/home/features.md";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const FeaturesSection = () => {
    const features = frontMatter.data;
    const { title, subtitle,  } = frontMatter;


    return (
        <section className="bg-white py-24 relative">
            <div className="bg-[url('/img/benefitsBg.png')] absolute  z-0  top-0 w-full h-full"></div>
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-8">
                    <p className='uppercase font-bold text-head font-Quicksand'> {subtitle[0]} &nbsp;&nbsp;&nbsp;  {subtitle[1]} &nbsp; &nbsp;&nbsp;   {subtitle[2]}</p>
                    <h2 className="mt-0 mb-20 text-[26pt] font-semibold font-Quicksand leading-none text-head md:text-[32pt] lg:text-[38pt] xl:text-[3.5em] ">
                        {title[0]}
                        <br />
                        {title[1]}
                    </h2>

                </div>
                {console.log(features)}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-[90%] mx-auto">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.svg}
                            style={feature.style ? feature.style : false }
                        />
                    ))}

                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ title, description, icon, style }) => {
    return (
        <div className="bg-[#F5F5F5] p-6 flex items-center h-36 mx-2  rounded-3xl relative">

            {/* <img src={`/svg/benefits/${icon}`} alt="" className="-left-4 top-2 w-36  h-full  absolute lg:top-4 lg:-left-16  lg:w-1/2 lg:h-32" /> */}
{console.log(style)}
            <div className="flex items-center justify-center rounded-full border border-solid text-orange-600 border-gray-300 bg-[#F7F7F7] bg-opacity-50 w-24 h-20  p-4  mr-6 shadow-lg">
                <FontAwesomeIcon icon={icon} size='2xl' className={` ${style}`} />
            </div>

            {/* <div className='w-1/2 lg:w-1/3 '></div> */}
            <div className='flex flex-col justify-center w-full'>
                <h3 className="text-lg font-Quicksand text-gray-800  font-semibold mb-1">{title}</h3>
                <p className="text-[#585858] font-Switzer text-sm m-0">{description}</p>
            </div>
        </div>
    );
};

export default FeaturesSection;
