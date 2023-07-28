import React, { useState } from 'react';
import MDXContent from '@theme/MDXContent';

// Import all CodeX components
import Code1 from '../markdown/home/code1.md';
import Code2 from '../markdown/home/code2.md';
import Code3 from '../markdown/home/code3.md';
import Code4 from '../markdown/home/code4.md';
import Code5 from '../markdown/home/code5.md';
import Code6 from '../markdown/home/code6.md';
import Code7 from '../markdown/home/code7.md';
import Code8 from '../markdown/home/code8.md';
import Code9 from '../markdown/home/code9.md';

const codeComponents = {
    startServer: Code1,
    readWriteFiles: Code5,
    hashPassword: Code6,
    bundleBrowser: Code7,
    writeTest: Code8,
    filesystemRouting: Code9,
    readStream: Code4,
    spawnChildProcess: Code3,
    callCFunction: Code2,
};

const APISection = (data) => {
    const { title, categories } = data.data;
    const [activeCategory, setActiveCategory] = useState(categories[0].onClick);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const renderCodeBlock = () => {
        const CodeComponent = codeComponents[activeCategory];
        if (CodeComponent) {
            return (
                <div className="mt-12 w-[80%] mx-auto">
                    <MDXContent>
                        <CodeComponent />
                    </MDXContent>
                </div>
            );
        } else {
            return null;
        }
    };

    return (
        <div className="py-8 max-w-screen-lg mx-auto">
            <div className="text-center mb-6">
                <h3 className="mt-0 mb-12 text-[26pt] font-semibold font-Quicksand leading-none text-head md:text-[32pt] lg:text-[38pt] xl:text-[3.5em] ">
                    {title[0]}
                    <br />
                    {title[1]}
                </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                    <CategoryButton
                        key={category.onClick}
                        active={activeCategory === category.onClick}
                        onClick={() => handleCategoryChange(category.onClick)}
                    >
                        {category.title}
                    </CategoryButton>
                ))}
            </div>
            {renderCodeBlock()}
        </div>
    );
};

const CategoryButton = ({ active, onClick, children }) => {
    return (
        <button
            className={`px-6 py-3 text-sm cursor-pointer font-semibold font-sans  rounded-md ${active ? 'bg-head text-white' : 'bg-[#F1F1F1] border-0 text-head'
                }`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default APISection;
