const ApiRequestsRow = ({ text, tierFree, tierFreeValue, tierPro, tierProValue, tierEnterprise, tierEnterpriseValue }) => {
    return (
        <tr className="divide-scale-600 dark:divide-scale-400">
            <th className="text-scale-1200 flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal dark:text-white" scope="row">
                <span>{text}</span>
            </th>
            <td className={`px-6 tier-free text-center ${tierFree ? 'font-bold' : ''}`}>
                {tierFree ? (
                    <span className="mx-auto">
                        <svg className="-ml-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
                            <path fill="#3ECF8E" fillRule="evenodd" d="M12 21.212a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-.708-6.414 4.463-4.463-.707-.708-4.11 4.11-1.986-1.986-.707.707 2.34 2.34h.707Z" clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Included in</span>
                    </span>
                ) : <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" class="text-neutral-700"><path fill="currentColor" fillRule="evenodd" d="M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18ZM5.534 9.534h6.804v-1H5.534v1Z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Included in</span>
                </span>}
                {tierFreeValue && (
                    <span className="text-scale-1200 text-xs dark:text-white flex items-center gap-3">{tierFreeValue}</span>
                )}

            </td>
            <td className={`px-6 tier-pro text-center ${tierPro ? 'font-bold' : ''}`}>
                {tierPro ? (
                    <span className="">
                        <svg className="-ml-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
                            <path fill="#3ECF8E" fillRule="evenodd" d="M12 21.212a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-.708-6.414 4.463-4.463-.707-.708-4.11 4.11-1.986-1.986-.707.707 2.34 2.34h.707Z" clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Included in</span>
                    </span>
                ) : <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" class="text-neutral-700"><path fill="currentColor" fillRule="evenodd" d="M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18ZM5.534 9.534h6.804v-1H5.534v1Z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Included in</span>
                </span>}
                {tierProValue && (
                    <span className="text-scale-1200 text-xs dark:text-white flex items-center gap-3">{tierProValue}</span>
                )}
            </td>
            <td className={`px-6 tier-enterprise text-center ${tierEnterprise ? 'font-bold' : ''}`}>
                {tierEnterprise ? (
                    <span className="mx-auto">
                        <svg className="-ml-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
                            <path fill="#3ECF8E" fillRule="evenodd" d="M12 21.212a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-.708-6.414 4.463-4.463-.707-.708-4.11 4.11-1.986-1.986-.707.707 2.34 2.34h.707Z" clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Included in</span>
                    </span>
                ) : <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" class="text-neutral-700"><path fill="currentColor" fillRule="evenodd" d="M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18ZM5.534 9.534h6.804v-1H5.534v1Z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Included in</span>
                </span>}

                {tierEnterpriseValue && (
                    <span className="text-scale-1200 text-xs dark:text-white flex items-center gap-3">{tierEnterpriseValue}</span>
                )}
            </td>
        </tr>
    );
};


const TableRow = ({ children, name, }) => {
    return (
        <tr className="  dark:divide-gray-400 bg-gray-200" style={{ borderTop: 'none' }}>
            <th className="border-0 border-[#1b1b1d] dark:bg-[#1b1b1d] text-xl sticky top-16 z-10 py-3 pl-6 text-left font-medium dark:text-white">
                <div className="flex items-center gap-4">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-800 dark:bg-emerald-800 text-brand-100">
                        {children}
                    </div>
                    <h4 className="m-0 text-base font-normal">{name}</h4>
                </div>
            </th>
            <td className="border-b-2 border-[#1b1b1d] bg-gray-50 dark:bg-[#1b1b1d] px-6 py-5 free"></td>
            <td className="border-b-2 border-[#1b1b1d] bg-gray-50 dark:bg-[#1b1b1d] px-6 py-5 pro"></td>
            <td className="border-b-2 border-[#1b1b1d] bg-gray-50 dark:bg-[#1b1b1d] px-6 py-5 team"></td>
            <td className="border-b-2 border-[#1b1b1d] bg-gray-50 dark:bg-[#1b1b1d] px-6 py-5 enterprise"></td>
        </tr>

    )
}
<table className="w-full h-[100vh] table-auto b-0 tablecostum">
    <caption className="sr-only">Pricing plan comparison</caption>
    <thead className="bg-[#1b1b1d] sticky top-0 z-10 b-0">
        <tr className="b-0">
            <th className="b-0 text-neutral-1200 w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal" scope="col">
                <span className="sr-only">Feature by</span>
                <div className="h-0.25 absolute bottom-0 left-0 w-full" style={{ height: '1px' }}></div>
            </th>
            <th className="text-neutral-1200 w-1/4 px-6 pr-2 pt-2 pb-2 text-left text-sm font-normal" scope="col">
                <h3
                    className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-500 dark:gradient-text-brand-100 text-2xl font-mono font-normal uppercase flex items-center gap-4">
                    Free</h3>
                <div className="h-0.25 absolute bottom-0 left-0 w-full" style={{ height: '1px' }}></div>
            </th>
            <th className="text-neutral-1200 w-1/4 px-6 pr-2 pt-2 pb-2 text-left text-sm font-normal" scope="col">
                <h3
                    className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-500 dark:gradient-text-brand-100 text-2xl font-mono font-normal uppercase flex items-center gap-4">
                    Pro</h3>
                <div className="h-0.25 absolute bottom-0 left-0 w-full" style={{ height: '1px' }}></div>
            </th>
            <th className="text-neutral-1200 w-1/4 px-6 pr-2 pt-2 pb-2 text-left text-sm font-normal" scope="col">
                <h3
                    className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-500 dark:gradient-text-brand-100 text-2xl font-mono font-normal uppercase flex items-center gap-4">
                    Enterprise</h3>
                <div className="h-0.25 absolute bottom-0 left-0 w-full" style={{ height: '1px' }}></div>
            </th>
        </tr>
    </thead>
    <tr className="descriptions">
        <th className="text-scale-1200 w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal" scope="col"></th>
        <th className="text-scale-1200 w-1/4 px-6 pt-2 pb-2 text-left text-sm font-normal" scope="col">
            <p className="text-sm border-b border-scale-700 pb-4">Perfect for passion projects &amp; simple websites.
            </p>
            <div className="h-0.25 absolute bottom-0 left-0 w-full" style={{ height: "1px" }}></div>
        </th>
        <th className="text-scale-1200 w-1/4 px-6 pt-2 pb-2 text-left text-sm font-normal" scope="col">
            <p className="text-sm border-b border-scale-700 pb-4">For production applications with the option to scale.
            </p>
            <div className="h-0.25 absolute bottom-0 left-0 w-full" style={{ height: "1px" }}></div>
        </th>
        <th className="text-scale-1200 w-1/4 px-6 pt-2 pb-2 text-left text-sm font-normal" scope="col">
            <p className="text-sm border-b border-scale-700 pb-4">For large-scale applications managing serious
                workloads.</p>
            <div className="h-0.25 absolute bottom-0 left-0 w-full" style={{ height: "1px" }}></div>
        </th>
    </tr>
    <tbody className="border-scale-700 dark:border-scale-400 divide-scale-700 dark:divide-scale-400 divide-y ">
        <tr className="">
            <th className="text-scale-900 px-6 py-8 text-left align-top text-sm font-medium dark:text-white"
                scope="row"></th>
            <td className="h-full px-6 py-2 align-top">
                <div className="relative table h-full w-full">
                    <div className="flex flex-col justify-between h-full">
                        <span className="text-scale-1200 text-5xl">$0</span>
                        <p className="p text-xs mt-1">per project per month</p>
                        <p className="-mt-2">
                            <span
                                className="bg-brand-500 text-brand-1100 rounded-md bg-opacity-30 py-0.5 px-2 text-xs ">
                                Limit of 2 free projects
                            </span>
                        </p>
                        <div className="mt-8">
                            <a href="https://app.supabase.com/new/new-project">
                                <button
                                    className="relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 bg-emerald-600 hover:bg-emerald-500 text-white bordershadow-brand-fixed-1000 hover:bordershadow-brand-fixed-900 dark:bordershadow-brand-fixed-1000 dark:hover:bordershadow-brand-fixed-1000 focus-visible:outline-brand-600 w-full flex items-center justify-center shadow-sm text-xs px-2.5 py-1"
                                    type="button">
                                    <span className="truncate">Get Started</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </td>
            <td className="h-full px-6 py-2 align-top">
                <div className="relative table h-full w-full">
                    <div className="flex flex-col justify-between h-full">
                        <span className="text-scale-1200 text-5xl">$25</span>
                        <p className="p text-xs mt-1">per project per month</p>
                        <p className="-mt-2">
                            <span
                                className="bg-brand-500 text-brand-1100 rounded-md bg-opacity-30 py-0.5 px-2 text-xs ">
                                + usage
                            </span>
                        </p>
                        <div className="mt-8">
                            <a href="https://app.supabase.com/new/new-project">
                                <button
                                    className="relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 bg-emerald-600 hover:bg-emerald-500 text-white bordershadow-brand-fixed-1000 hover:bordershadow-brand-fixed-900 dark:bordershadow-brand-fixed-1000 dark:hover:bordershadow-brand-fixed-1000 focus-visible:outline-brand-600 w-full flex items-center justify-center shadow-sm text-xs px-2.5 py-1"
                                    type="button">
                                    <span className="truncate">Get Started</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </td>
            <td className="h-full px-6 py-2 align-top">
                <div className="relative table h-full w-full">
                    <div className="flex flex-col justify-between h-full">
                        <span className="text-scale-1200 text-4xl">Contact us</span>
                        <div className="mt-auto">
                            <a href="https://forms.supabase.com/enterprise">
                                <button
                                    className="relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 text-scale-1200 bg-scale-100 hover:bg-scale-300 bordershadow-scale-600 hover:bordershadow-scale-700 dark:bordershadow-scale-700 hover:dark:bordershadow-scale-800 dark:bg-scale-500 dark:hover:bg-scale-600 focus-visible:outline-brand-600 w-full flex items-center justify-center shadow-sm text-xs px-2.5 py-1"
                                    type="button">
                                    <span className="truncate">Contact Us</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </td>

        </tr>
        <TableRow name={"Database"}>
            <svg className="h-5 w-5 stroke-white  dark:stroke-emerald-400" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4">
                </path>
            </svg>
        </TableRow>
        <ApiRequestsRow text={"Dedicated Postgres Database"} tierFree={true} tierPro={true} tierEnterprise={true} />
        <ApiRequestsRow text={"Unlimited API requests"} tierFree={true} tierPro={true} tierEnterprise={true} />
        <ApiRequestsRow text={"Database size"} tierFreeValue={"500 MB"} tierProValue={"8 GB, then $0.125 per GB"}
            tierEnterpriseValue={"Unlimited"} />
        <ApiRequestsRow text={"Automatic backups"} tierFree={false} tierPro={true} tierProValue={"7 days"}
            tierEnterpriseValue={'Custom'} />
        <ApiRequestsRow text={"Point in time recovery"} tierFree={false} tierPro={true} tierProValue={"$100 per 7 days"}
            tierEnterprise={true} />
        <ApiRequestsRow text={"Pausing"} tierFreeValue={"After 1 inactive week"} tierProValue={"Never"}
            tierEnterpriseValue={"Never"} />
        <ApiRequestsRow text={"Database egress"} tierFreeValue={"2GB"} tierProValue={"50 GB, then $0.09 per GB"}
            tierEnterpriseValue={"Unlimited"} />
        <tr className="h-16"></tr>
        <TableRow name={"Auth"}>
            <svg class="h-5 w-5 stroke-white  dark:stroke-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z">
                </path>
            </svg>
        </TableRow>
        <ApiRequestsRow text={"Total Users"} tierFreeValue={"Unlimited"} tierProValue={"Unlimited"}
            tierEnterpriseValue={"Unlimited"} />
        <ApiRequestsRow text={"MAUs"} tierFreeValue={"50,000"} tierProValue={"100,000, then $0.00325 per MAU"}
            tierEnterpriseValue={"Unlimited"} />
        <ApiRequestsRow text={"Social OAuth providers"} tierFree={true} tierPro={true} tierEnterprise={true} />
        <ApiRequestsRow text={"Custom SMTP server"} tierFree={true} tierPro={true} tierEnterprise={true} />
        <ApiRequestsRow text={"Remove Supabase branding from emails"} tierFree={false} tierPro={true}
            tierEnterprise={true} />
        <ApiRequestsRow text={"Enterprise OAuth providers"} tierFree={false} tierPro={false} tierEnterprise={true} />
        <ApiRequestsRow text={"Audit trails"} tierFreeValue={"1 hour"} tierProValue={"7 days"}
            tierEnterpriseValue={"Included in"} />
        <ApiRequestsRow text={"Supabase Auth emails"} tierFreeValue={"30 / hour"} tierProValue={"100 / hour"}
            tierEnterpriseValue={"Contact Us"} />
        <ApiRequestsRow text={"Single Sign-On (SAML 2.0)"} tierFree={false} tierFreeValue={"Not included in"}
            tierPro={true} tierProValue={"50 free, then $0.015 per MAU"} tierEnterprise={false}
            tierEnterpriseValue={"Contact Us"} />
        <ApiRequestsRow text={"Advanced security features"} tierFree={false} tierPro={false} tierEnterprise={false}
            tierFreeValue={"Not included in"} tierProValue={"Not included in"} tierEnterpriseValue={"Contact Us"} />
        <tr className="h-16"></tr>
        <TableRow name={"Storage"}>
            <svg class="h-5 w-5 stroke-white  dark:stroke-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z">
                </path>
            </svg>
        </TableRow>
        <ApiRequestsRow text={"Storage"} tierFreeValue={"1 GB"} tierProValue={"100 GB, then $0.021 per GB"}
            tierEnterpriseValue={"Unlimited"} />
        <ApiRequestsRow text={"Storage egress"} tierFreeValue={"2 GB"} tierProValue={"200 GB, then $0.09 per GB"}
            tierEnterpriseValue={"Unlimited"} />
        <ApiRequestsRow text={"Custom access controls"} tierFree={true} tierPro={true} tierEnterprise={true} />
        <ApiRequestsRow text={"Max file upload size"} tierFreeValue={"50MB"} tierProValue={"5GB"}
            tierEnterpriseValue={"Unlimited"} />
        <ApiRequestsRow text={"Asset transformations"} tierFree={false} tierPro={true} tierProValue={"100 origin images,
            then $5 per 1000 origin images"} tierEnterprise={true} />
    </tbody>

</table>