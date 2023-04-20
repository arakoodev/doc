import React from "react";
import GetStartedButton from "../GetStartedButton";
import PricingTable from "./PricingCardv2";
function PricingCard() {
    return (
        <div className="mx-auto flex max-w-7xl flex-col pt-12">
            <div className="relative z-10 mx-auto -mt-4 w-full px-4 sm:px-6 lg:px-8 ">
                <div className="mx-auto max-w-md grid lg:max-w-6xl lg:grid-cols-3 gap-24 lg:gap-5">
                    <div className="flex flex-col overflow-hidden border h-full rounded-[4px]">
                        <div className="dark:bg-neutral-800 bg-neutral-100 px-8 pt-6 rounded-tr-[4px] rounded-tl-[4px] ">
                            <div className="mb-2 flex items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-500 text-2xl font-normal uppercase flex items-center gap-4 font-mono">
                                        Free
                                    </h3>
                                </div>
                            </div>
                            <p className="text-neutral-1100 my-4 h-[55px] text-sm border-b dark:border-neutral-500 pb-4 lg:pr-20 ">
                                Perfect for passion projects &amp; simple websites.
                            </p>
                            <div className=" flex items-baseline text-5xl font-normal lg:text-4xl xl:text-4xl border-b dark:border-neutral-500 pt-4 pb-8 min-h-[175px] ">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-end gap-2">
                                        <div>
                                            <p className="text-neutral-600 ml-1 text-xs font-normal">
                                                Starting from
                                            </p>
                                            <p className="m-0 mt-2 mb-2 gradient-text-neutral-500 dark:gradient-text-neutral-100 pb-1 text-5xl">
                                                $0
                                            </p>
                                            <p className="text-neutral-600 m-0 text-xs -mb-2">
                                                per month per project
                                            </p>
                                            <span className="bg-emerald-500 text-emerald-1100 rounded-md bg-opacity-30 py-0.5 px-2 text-xs ">
                                                Limit of 2 free projects
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dark:border-neutral-400 dark:bg-neutral-800 flex h-full rounded-bl-[4px] rounded-br-[4px] flex-1 flex-col bg-white px-8 py-6 ">
                            <p className="text-neutral-1100 text-xs mt-2 mb-4">Get started with:</p>
                            <ul role="list" className="text-xs text-neutral-1000 list-inside pl-0">
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
                                        className="sbui-icon text-emerald-900 h-4 w-4 "
                                        aria-hidden="true"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span className="dark:text-neutral-1200 mb-0 ml-3 ">
                                        Up to 500MB database &amp; 1GB file storage
                                    </span>
                                </li>
                                <li className="flex items-center py-2 first:mt-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="21"
                                        viewBox="0 0 24 24
        "
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="sbui-icon text-emerald-900 h-4 w-4 "
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 12l-4 4-4-4"></path>
                                        <path d="M8 12l4-4 4 4"></path>
                                    </svg>
                                    <span className="dark:text-neutral-1200 mb-0 ml-3 ">
                                        Custom domains with SSL
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
                                        className="sbui-icon text-emerald-900 h-4 w-4 "
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16.5 14.5l-4.2-4.2m4.2 4.2l-4.2 4.2"></path>
                                    </svg>
                                    <span className="dark:text-neutral-1200 mb-0 ml-3 ">
                                        Static site hosting with instant cache invalidation
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
                                        className="sbui-icon text-emerald-900 h-4 w-4 "
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M3 12h18"></path>
                                        <path d="M3 6h18"></path>
                                        <path d="M3 18h18"></path>
                                    </svg>
                                    <span className="dark:text-neutral-1200 mb-0 ml-3 ">
                                        Global CDN with smart image optimization
                                    </span>
                                </li>
                            </ul>
                            <div className="space-y-4 mt-24"><p className="text-xs text-neutral-400 mb-8">Free projects are paused after 1 week of inactivity.</p></div>
                            <GetStartedButton links={"#"} />

                        </div>

                    </div>
                    <PricingTable />

                    <div className="flex flex-col overflow-hidden border h-full rounded-[4px]">
                        <div className="dark:bg-neutral-800 bg-neutral-100 px-8 pt-6 rounded-tr-[4px] rounded-tl-[4px] ">
                            <div className="mb-2 flex items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 text-2xl font-normal uppercase flex items-center gap-4 font-mono">
                                        Free
                                    </h3>
                                </div>
                            </div>
                            <p className="text-neutral-1100 my-4 h-[55px] text-sm border-b dark:border-neutral-500 pb-4 lg:pr-20 ">
                                Perfect for passion projects &amp; simple websites.
                            </p>
                            <div className=" flex items-baseline text-5xl font-normal lg:text-4xl xl:text-4xl border-b dark:border-neutral-500 pt-4 pb-8 min-h-[175px] ">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-end gap-2">
                                        <div>
                                            <p className="text-neutral-600 ml-1 text-xs font-normal">
                                                Starting from
                                            </p>
                                            <p className="mt-2 gradient-text-neutral-500 dark:gradient-text-neutral-100 pb-1 text-5xl">
                                                $0
                                            </p>
                                            <p className="text-neutral-400 m-0 text-xs -mb-4">
                                                per month per project
                                            </p>
                                            <span className="bg-emerald-500 text-emerald-1100 rounded-md bg-opacity-30 py-0.5 px-2 text-xs ">
                                                Limit of 2 free projects
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dark:border-neutral-400 dark:bg-neutral-800 flex h-full rounded-bl-[4px] rounded-br-[4px] flex-1 flex-col bg-white px-8 py-6 ">
                            <p className="text-neutral-1100 text-xs mt-2 mb-4">Get started with:</p>
                            <ul role="list" className="text-xs text-neutral-1000 list-inside pl-0">
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
                                        className="sbui-icon text-emerald-900 h-4 w-4 "
                                        aria-hidden="true"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span className="dark:text-neutral-1200 mb-0 ml-3 ">
                                        Up to 500MB database &amp; 1GB file storage
                                    </span>
                                </li>
                                <li className="flex items-center py-2 first:mt-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="21"
                                        viewBox="0 0 24 24
            "
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="sbui-icon text-emerald-900 h-4 w-4 "
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 12l-4 4-4-4"></path>
                                        <path d="M8 12l4-4 4 4"></path>
                                    </svg>
                                    <span className="dark:text-neutral-1200 mb-0 ml-3 ">
                                        Custom domains with SSL
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
                                        className="sbui-icon text-emerald-900 h-4 w-4 "
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16.5 14.5l-4.2-4.2m4.2 4.2l-4.2 4.2"></path>
                                    </svg>
                                    <span className="dark:text-neutral-1200 mb-0 ml-3 ">
                                        Static site hosting with instant cache invalidation
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
                                        className="sbui-icon text-emerald-900 h-4 w-4 "
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M3 12h18"></path>
                                        <path d="M3 6h18"></path>
                                        <path d="M3 18h18"></path>
                                    </svg>
                                    <span className="dark:text-neutral-1200 mb-0 ml-3 ">
                                        Global CDN with smart image optimization
                                    </span>
                                </li>
                            </ul>
                            <div className="space-y-2 mt-[7em]">
                                <GetStartedButton links={"#"} />
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </div>

    );
}

export default PricingCard;


