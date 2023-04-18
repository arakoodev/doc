import React from 'react';
import GetStartedButton from '../GetStartedButton';
// import 'tailwindcss/tailwind.css';

function PricingTable() {
    return (
        <div className="bg-emerald-400 dark:bg-emerald-600 border px-0.5 -pb-2 -mt-8 rounded-[6px]">
            <p className="text-xs text-center py-2 text-white m-0">Most Popular</p>
            <div className="flex flex-col overflow-hidden ">
                <div className="dark:bg-neutral-800 bg-white px-8 pt-6 rounded-tr-[4px] rounded-tl-[4px] rounded-tr-[4px] rounded-tl-[4px]">
                    <div className="mb-2 flex items-center gap-2">
                        <div className="flex items-center gap-2">
                            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-500 dark:gradient-text-emerald-100 text-2xl font-normal uppercase flex items-center gap-4 font-mono">Pro</h3>
                        </div>
                    </div>
                    <p className="text-neutral-1100 my-4 h-[55px] text-sm border-b dark:border-neutral-500 pb-4 lg:pr-20">For production applications with the option to neutral.</p>
                    <div className=" text-neutral-1200 flex items-baseline text-5xl font-normal lg:text-4xl xl:text-4xl border-b dark:border-neutral-500 pt-4 pb-8 min-h-[175px] ">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-end gap-2">
                                <div>
                                    <p className="text-neutral-600 ml-1 text-xs font-normal">Starting from</p>
                                    <p className="mt-2 gradient-text-neutral-500 dark:gradient-text-neutral-100 pb-1 text-5xl">$25</p>
                                    <p className="m-0 text-neutral-600 mt-0.5 text-xs">per month per project</p>
                                    <p className="-mt-2"><span className="bg-emerald-500 text-emerald-400 rounded-md bg-opacity-30 py-0.5 px-2 text-xs ">+ usage</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dark:border-neutral-400 dark:bg-neutral-800 flex h-full rounded-bl-[4px] rounded-br-[4px] flex-1 flex-col bg-white px-8 py-6 mb-0.5 rounded-bl-[4px] rounded-br-[4px]">
                    <p className="text-neutral-1100 text-xs mt-2 mb-4">Everything in the Free plan, plus:</p>
                    <ul role="list" className="text-xs text-neutral-1000 pl-0">
                        <li className="flex items-center py-2 first:mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sbui-icon text-emerald-600 h-4 w-4 " aria-hidden="true">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span className="dark:text-neutral-1200 mb-0 ml-3 ">8GB database &amp; 100GB file storage</span>
                        </li>
                        <li className="flex items-center py-">
                        </li>
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
                                className="sbui-icon text-emerald-600 h-4 w-4"
                                aria-hidden="true"
                            >
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span className="dark:text-neutral-1200 mb-0 ml-3">
                                Email support
                            </span>
                        </li>
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
                                className="sbui-icon text-emerald-600 h-4 w-4"
                                aria-hidden="true"
                            >
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span className="dark:text-neutral-1200 mb-0 ml-3">
                                Custom roles & permissions
                            </span>
                        </li>
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
                                className="sbui-icon text-emerald-600 h-4 w-4"
                                aria-hidden="true"
                            >
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span className="dark:text-neutral-1200 mb-0 ml-3">
                                99.99% uptime SLA
                            </span>
                        </li>
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
                                className="sbui-icon text-emerald-600 h-4 w-4"
                                aria-hidden="true"
                            >
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span className="dark:text-neutral-1200 mb-0 ml-3">
                                Unlimited projects
                            </span>
                        </li>
                    </ul>
                    <div className="space-y-2 mt-12">
                        
                        <p className="text-xs text-neutral-400 mb-10">Free projects are paused after 1 week of inactivity.</p>
                        <GetStartedButton links={"#"}/>
                    </div>
                </div>
            </div>
        </div > 

    );
}

export default PricingTable;