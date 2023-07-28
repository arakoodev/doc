import React from 'react';
import GetStartedButton from '../GetStartedButton';
// import 'tailwindcss/tailwind.css';

function PricingTable({ name, desc, starting, feature, Link }) {
    return (
        <div className="bg-emerald-400 dark:bg-emerald-600 border px-0.5 -pb-2 -mt-8 rounded-[6px]">
            <p className="text-xs text-center py-2 text-white m-0">Most Popular</p>
            <div className="flex flex-col overflow-hidden ">
                <div className="dark:bg-neutral-800 bg-white px-8 pt-6 rounded-tr-[4px] rounded-tl-[4px] rounded-tr-[4px] rounded-tl-[4px]">
                    <div className="mb-2 flex items-center gap-2">
                        <div className="flex items-center gap-2">
                            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-500 dark:gradient-text-emerald-100 text-2xl font-normal uppercase flex items-center gap-4 font-mono">{name}</h3>
                        </div>
                    </div>
                    <p className="text-neutral-1100 my-4 h-[55px] text-sm border-b dark:border-neutral-500 pb-4 lg:pr-20">{desc}</p>
                    <div className=" text-neutral-1200 flex items-baseline text-5xl font-normal lg:text-4xl xl:text-4xl border-b dark:border-neutral-500 pt-4 pb-8 min-h-[175px] ">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-end gap-2">
                                <div>
                                    <p className="text-neutral-600 ml-1 text-xs font-normal">
                                        {starting.text}
                                    </p>
                                    <p className="m-0 mt-2 mb-2 gradient-text-neutral-500 dark:gradient-text-neutral-100 pb-1 text-5xl">
                                        {starting.price}
                                    </p>
                                    <p className="text-neutral-600 m-0 text-xs -mb-2">
                                        {starting.time}
                                    </p>
                                    <span className="bg-emerald-500 text-emerald-1100 rounded-md bg-opacity-30 py-0.5 px-2 text-xs ">
                                        {starting.project}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dark:border-neutral-400 dark:bg-neutral-800 flex h-full rounded-bl-[4px] rounded-br-[4px] flex-1 flex-col bg-white px-8 py-0 pb-6 mb-0.5">
                    <p className="text-neutral-1100 text-xs mt-2 mb-4">{feature.text}</p>
                    <ul role="list" className="text-xs text-neutral-1000 pl-0">
                        {feature.list.map(feature => (
                            <li className="flex items-center py-2 first:mt-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="21"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="sbui-icon text-emerald-600 h-4 w-4 "
                                    aria-hidden="true"
                                >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span className="dark:text-neutral-1200 mb-0 ml-3 ">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="space-y-2 mt-16">
                        
                        <p className="text-xs text-neutral-400 mb-10">Additional fees apply for usage and storage beyond the limits above.</p>
                        <GetStartedButton links={Link}/>
                    </div>
                </div>
            </div>
        </div > 

    );
}

export default PricingTable;