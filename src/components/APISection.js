import React, { useState } from 'react';
import MDXContent from '@theme/MDXContent';
import Code4 from "../markdown/home/code4.md";
import Code5 from "../markdown/home/code5.md";


const APISection = (data) => {

    const { title, categories } = data.data;
    const [activeCategory, setActiveCategory] = useState('startServer');

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const renderCodeBlock = () => {
        switch (activeCategory) {
            case 'startServer':
                return <MDXContent><Code4 /></MDXContent>;
            case 'readWriteFiles':
                return <MDXContent><Code5 /></MDXContent>;
            case 'hashPassword':
                return <MDXContent><Code4 /></MDXContent>;
            case 'bundleBrowser':
                return <MDXContent><Code4 /></MDXContent>;
            case 'writeTest':
                return <MDXContent><Code4 /></MDXContent>;
            case 'filesystemRouting':
                return <MDXContent><Code4 /></MDXContent>;
            case 'readStream':
                return <MDXContent><Code4 /></MDXContent>;
            case 'spawnChildProcess':
                return <MDXContent><Code4 /></MDXContent>;
            case 'callCFunction':
                return <MDXContent><Code4 /></MDXContent>;
            default:
                return null;
        }
    };

    return (
        <div className="py-8 max-w-screen-lg mx-auto">
            <div className="text-center mb-6">
                <h3 className="mt-0 mb-12 text-[26pt] font-semibold font-Quicksand leading-none text-gray-900 md:text-[32pt] lg:text-[38pt] xl:text-[3.5em] ">
                    {title[0]}
                    <br />
                    {title[1]}
                    
                </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                
                {categories.map((category) => (
                    <CategoryButton
                        key={category.title}
                        active={activeCategory === category.onClick}
                        onClick={() => handleCategoryChange(category.onClick)}
                    >
                        {category.title}
                    </CategoryButton>
                ))}
               </div>
            <div className="mt-12 w-[80%] mx-auto">{renderCodeBlock()}</div>
        </div>
    );
};

const CategoryButton = ({ active, onClick, children }) => {
    return (
        <button
            className={`px-6 py-3 text-sm cursor-pointer font-bold rounded-md ${active
                ? 'bg-gray-800 text-white'
                : 'bg-gray-50 border-0 text-indigo-950'
                }`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default APISection;
