import React, { useState } from 'react';
// import YouTube from 'react-youtube';

function TabPanel({ TabpanelValue }) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="flex flex-col">
            
            <div className="flex flex-col rounded-2xl p-1 bg-[url('/svg/heroGradient.svg')]">
                <div className="bg-white rounded-2xl w-full h-full">
                    {TabpanelValue.map((tab, index) => (
                        <div key={index} className={`py-0 ${index === activeTab ? '' : 'hidden'}`}>
                            <div className="py-3 text-center bg-gray-800 text-white border-0 rounded-t-2xl border-b border-solid border-bgLight"></div>
                            <div className="aspect-w-16 aspect-h-9"> 
                                <iframe src={`https://www.youtube.com/embed/${tab.youtube}`} title="Google — Year in Search 2022" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className="flex w-full py-12 relative">
                <div className="bg-bgLight absolute top-12 z-0 w-full h-4 rounded-md"></div>
                <div className="absolute z-10 top-12 flex w-full">
                    {TabpanelValue.map((tab, index) => (
                        <button
                            key={index}
                            className={`border-transparent  bg-transparent cursor-pointer w-full p-0 outline-transparent  font-regular transition ease-out duration-200  text-ms leading-4 m-0 `}
                            onClick={() => handleTabClick(index)}
                        >
                            <div className={`py-2 px-4 w-full  rounded-md   ${index === activeTab
                                ? 'bg-gray-800 rounded font-medium outline-0 border-0'
                                : ' bg-bgLight '
                                } `}></div>
                            <p className="m-0 py-4">{tab.title}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TabPanel;
