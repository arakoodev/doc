import React, { useState } from 'react';
import YouTube from 'react-youtube';

function TabPanel({ TabpanelValue }) {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="flex flex-col">
            <div className="flex border-b border-gray-300">
                <button
                    className={`py-2 px-4 border-b-2 ${activeTab === 1
                        ? 'font-medium text-white border-gray-100 bg-gray-700 border-0 rounded-t-[7px] w-full lg:w-auto'
                        : 'w-full cursor-pointer rounded-t-[7px] border-0 outline-none border-b-[3px] border-gray-400  bg-transparent py-[12px] px-[3px] text-center sm:py-[12px] sm:px-[5px] md:px-4 lg:py-[16px] text-white lg:w-auto  outline-0  focus-visible:outline-4 focus-visible:outline-offset-1 -visible:outline-neutral-700  font-regular transition ease-out duration-200  hover:bg-gray-700   hover:border-gray-100 dark:shadow-neutral-900  shadow-sm text-ms leading-4  m-0 '
                        }`}
                    onClick={() => handleTabClick(1)}
                >
                    {TabpanelValue.tab1.title}
                </button>
                <button
                    className={`py-2 px-4 border-b-2 ${activeTab === 2
                        ? 'font-medium text-white border-gray-100 bg-gray-700 border-0 rounded-t-[7px] w-full lg:w-auto '
                        : 'w-full cursor-pointer rounded-t-[7px] border-0 outline-none border-b-[3px] border-gray-400  bg-transparent py-[12px] px-[3px] text-center sm:py-[12px] sm:px-[5px] md:px-4 lg:py-[16px] text-white lg:w-auto outline-0  focus-visible:outline-4 focus-visible:outline-offset-1 -visible:outline-neutral-700  font-regular transition ease-out duration-200  hover:bg-gray-700   hover:border-gray-100 dark:shadow-neutral-900  shadow-sm text-ms leading-4  m-0 '
                        }`}
                    onClick={() => handleTabClick(2)}
                >
                     {TabpanelValue.tab2.title}
                </button>
            </div>
            <div className="flex flex-col">
                {activeTab === 1 && 
                        <div className='py-4 lg:py-0' > 
                        <div className="py-4 text-center">
                            <h2 className="m-0 text-1.5rem font-medium leading-snug text-gray-300">
                                {TabpanelValue.tab1.title}
                            </h2>
                            <p className="m-0 text-1rem text-gray-400">
                                {TabpanelValue.tab1.desc}
                            </p>
                        </div>

                        <div className='aspect-w-16 aspect-h-9'> <iframe src={`https://www.youtube.com/embed/${TabpanelValue.tab1.youtube}`}title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
                        </div>
                    }
                {activeTab === 2 && 
                    <div className='py-4 lg:py-0' >
                        <div className="py-4 text-center">
                            <h2 className="m-0 text-1.5rem font-medium leading-snug text-gray-300">
                                {TabpanelValue.tab2.title}
                            </h2>
                            <p className="m-0 text-1rem text-gray-400">
                                {TabpanelValue.tab2.desc}
                            </p>
                        </div>

                        <div className="aspect-w-16 aspect-h-9"> <iframe src={`https://www.youtube.com/embed/${TabpanelValue.tab2.youtube}`} title="Google — Year in Search 2022" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
                </div>
                }
            </div>
        </div>
    );
}

export default TabPanel
