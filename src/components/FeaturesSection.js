// FeaturesSection.js
import React from 'react';
import { frontMatter } from "../markdown/home/features.md";

const FeaturesSection = () => {
    const features = frontMatter.data;
    const {title, subtitle} = frontMatter;


    return (
        <section className="bg-white py-24 relative">
            <div className="bg-[url('/img/benefitsBg.png')] absolute  z-0  top-0 w-full h-full"></div>
            <div className="container mx-auto relative z-10 px-4">
                <div className="text-center mb-8">
                    <p className='uppercase font-bold text-gray-600'> {subtitle[0]} &nbsp;  {subtitle[1]} &nbsp;    {subtitle[2]}</p>
                    <h2 className="mt-0 mb-20 text-[26pt] font-semibold font-Quicksand leading-none text-indigo-950 md:text-[32pt] lg:text-[38pt] xl:text-[3.5em] ">
                        {title[0]}
                        <br />
                        {title[1]}
                    </h2>

                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] mx-auto">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index} 
                            title={feature.title}
                            description={feature.description}
                            icon={feature.svg}
                        />
                    ))}
                    
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ title, description, icon }) => {
    return (
        <div className="bg-[#F5F5F5] p-6 flex h-full lg:h-[11em] rounded-2xl relative">

            <img src={`/svg/benefits/${icon}`} alt="" className='-left-4 top-2 w-36  h-full  absolute lg:top-5 lg:-left-10  lg:w-1/2 lg:h-40' />
            <div className='w-1/2 '></div>
            <div className='flex flex-col w-full'>
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-600 m-0">{description}</p>
            </div>
        </div>
    );
};

export default FeaturesSection;
