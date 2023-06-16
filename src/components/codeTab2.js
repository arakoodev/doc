import React, { useState } from 'react';
import Gist from 'react-gist';
import MDXContent from '@theme/MDXContent';
import Code1 from "../markdown/home/code1.md"
import Code2 from "../markdown/home/code2.md"
function CodeTabPanel() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    // const getGistId = (tabNumber) => {
    //     if (tabNumber === 1) {
    //         return 'random-gist-id-1';
    //     } else if (tabNumber === 2) {
    //         return 'random-gist-id-2';
    //     }
    //     return '';
    // };

    const gistData = {
        id: "edff9055347de0b48431535221722c02",
        file: null
    };

    // const handleViewRawClick = () => {
    //     const rawUrl = `https://raw.githubusercontent.com/example-username/example-repo/main/${activeTab === 1 ? 'python' : 'javascript'
    //         }-code.js`;
    //     window.open(rawUrl);
    // };

    return (
        <div className="flex flex-col">
            <div className="flex border-b border-zinc-300 bg-bgLight">
                <button
                    className={`py-2 px-4 border-b-2 ${activeTab === 1
                        ? 'font-medium text-black border-zinc-100 bg-zinc-100 border-0 rounded-t-[7px] w-full lg:w-auto'
                        : 'w-full cursor-pointer rounded-t-[7px] border-0 outline-none border-b-[3px] border-zinc-300  bg-zinc-300 py-[12px] px-[3px] text-center sm:py-[12px] sm:px-[5px] md:px-4 lg:py-[16px] text-black lg:w-auto  outline-0  focus-visible:outline-4 focus-visible:outline-offset-1 -visible:outline-zinc-100  font-regular transition ease-out duration-200  hover:bg-zinc-400   hover:border-zinc-100 dark:shadow-zinc-300  shadow-sm text-ms leading-4  m-0 '
                        }`}
                    onClick={() => handleTabClick(1)}
                >
                    Python
                </button>
                <button
                    className={`py-2 px-4 border-b-2 ${activeTab === 2
                        ? 'font-medium text-black border-zinc-100 bg-zinc-100 border-0 rounded-t-[7px] w-full lg:w-auto '
                        : 'w-full cursor-pointer rounded-t-[7px] border-0 outline-none border-b-[3px] border-zinc-300  bg-zinc-300 py-[12px] px-[3px] text-center sm:py-[12px] sm:px-[5px] md:px-4 lg:py-[16px] text-black lg:w-auto outline-0  focus-visible:outline-4 focus-visible:outline-offset-1 -visible:outline-zinc-100  font-regular transition ease-out duration-200  hover:bg-zinc-400   hover:border-zinc-100 dark:shadow-zinc-300  shadow-sm text-ms leading-4  m-0 '
                        }`}
                    onClick={() => handleTabClick(2)}
                >
                    JavaScript
                </button>
            </div>
            <div className="flex flex-col">
                {activeTab === 1 && (
                    <div className="py-4 lg:py-0">
                        {/* <Gist id={gistData.id} /> */}
                        <MDXContent>
                            <Code1 />
                        </MDXContent>
                    </div>
                )}
                {activeTab === 2 && (
                    <div className="py-4 lg:py-0">
                        {/* <Gist id={gistData.id} /> */}
                        <MDXContent>
                            <Code2 />
                        </MDXContent>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CodeTabPanel;
