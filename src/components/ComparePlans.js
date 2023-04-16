import React from 'react';

const ComparePlans = () => {
    return (
        <table className="table-auto">
            <thead className="bg-scale-200 dark:bg-scale-200 sticky top-[62px] z-10">
                <tr>
                    <th className="text-scale-1200 w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal">
                        <span className="sr-only">Feature by</span>
                        <div className="h-0.25 absolute bottom-0 left-0 w-full" style={{ height: '1px' }}></div>
                    </th>
                    <th className="text-scale-1200 w-1/4 px-6 pr-2 pt-2 pb-2 text-left text-sm font-normal">
                        <h3 className="gradient-text-brand-500 dark:gradient-text-brand-100 text-2xl font-mono font-normal uppercase flex items-center gap-4">Free</h3>
                        <div className="h-0.25 absolute bottom-0 left-0 w-full" style={{ height: '1px' }}></div>
                    </th>
                    <th className="text-scale-1200 w-1/4 px-6 pr-2 pt-2 pb-2 text-left text-sm font-normal">
                        <h3 className="gradient-text-brand-500 dark:gradient-text-brand-100 text-2xl font-mono font-normal uppercase flex items-center gap-4">Pro</h3>
                        <div className="h-0.25 absolute bottom-0 left-0 w-full" style={{ height: '1px' }}></div>
                    </th>
                    <th className="text-scale-1200 w-1/4 px-6 pr-2 pt-2 pb-2 text-left text-sm font-normal">
                        <h3 className="gradient-text-brand-500 dark:gradient-text-brand-100 text-2xl font-mono font-normal uppercase flex items-center gap-4">Enterprise</h3>
                        <div className="h-0.25 absolute bottom-0 left-0 w-full" style={{ height: '1px' }}></div>
                    </th>
                </tr>
                <tr className="descriptions">
                    <th className="text-scale-1200 w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal" scope="col"></th><th className="text-scale-1200 w-1/4 px-6 pt-2 pb-2 text-left text-sm font-normal" scope="col"><p className="p text-sm border-b border-scale-700 pb-4">Perfect for passion projects &amp; simple websites.</p><div className="h-0.25 absolute bottom-0 left-0 w-full" ></div></th><th className="text-scale-1200 w-1/4 px-6 pt-2 pb-2 text-left text-sm font-normal" scope="col"><p className="p text-sm border-b border-scale-700 pb-4">For production applications with the option to scale.</p><div className="h-0.25 absolute bottom-0 left-0 w-full" ></div></th><th className="text-scale-1200 w-1/4 px-6 pt-2 pb-2 text-left text-sm font-normal" scope="col"><p className="p text-sm border-b border-scale-700 pb-4">For large-scale applications managing serious workloads.</p><div className="h-0.25 absolute bottom-0 left-0 w-full" ></div></th></tr>

                <tr >
                
                <th className="text-scale-900 px-6 py-8 text-left align-top text-sm font-medium dark:text-white" scope="row">
                </th>
                <td className="h-full px-6 py-2 align-top"><div className="relative table h-full w-full"><div className="flex flex-col justify-between h-full"><span className="text-scale-1200 text-5xl">$0</span><p className="p text-xs mt-1">per project per month</p><p className="-mt-2"><span className="bg-brand-500 text-brand-1100 rounded-md bg-opacity-30 py-0.5 px-2 text-xs ">Limit of 2 free projects</span></p><div className="mt-8"><a href="https://app.supabase.com/new/new-project"><button className=" relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   bg-brand-fixed-1100 hover:bg-brand-fixed-1000 text-white bordershadow-brand-fixed-1000 hover:bordershadow-brand-fixed-900 dark:bordershadow-brand-fixed-1000 dark:hover:bordershadow-brand-fixed-1000 focus-visible:outline-brand-600  w-full flex items-center justify-center shadow-sm text-xs px-2.5 py-1" type="button"><span className="truncate">Get Started</span></button></a></div></div></div></td><td className="h-full px-6 py-2 align-top"><div className="relative table h-full w-full"><div className="flex flex-col justify-between h-full"><span className="text-scale-1200 text-5xl">$25</span><p className="p text-xs mt-1">per project per month</p><p className="-mt-2"><span className="bg-brand-500 text-brand-1100 rounded-md bg-opacity-30 py-0.5 px-2 text-xs ">+ usage</span></p><div className="mt-8"><a href="https://app.supabase.com/new/new-project"><button className=" relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   bg-brand-fixed-1100 hover:bg-brand-fixed-1000 text-white bordershadow-brand-fixed-1000 hover:bordershadow-brand-fixed-900 dark:bordershadow-brand-fixed-1000 dark:hover:bordershadow-brand-fixed-1000 focus-visible:outline-brand-600  w-full flex items-center justify-center shadow-sm text-xs px-2.5 py-1" type="button"><span className="truncate">Get Started</span></button></a></div></div></div></td><td className="h-full px-6 py-2 align-top"><div className="relative table h-full w-full"><div className="flex flex-col justify-between h-full"><span className="text-scale-1200 text-4xl">Contact us</span><div className="mt-auto"><a href="https://forms.supabase.com/enterprise"><button className=" relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 bg-scale-100 hover:bg-scale-300 bordershadow-scale-600 hover:bordershadow-scale-700 dark:bordershadow-scale-700 hover:dark:bordershadow-scale-800 dark:bg-scale-500 dark:hover:bg-scale-600 focus-visible:outline-brand-600  w-full flex items-center justify-center shadow-sm text-xs px-2.5 py-1" type="button"><span className="truncate">Contact Us</span></button></a></div></div></div></td></tr>
            </thead>
            <tbody>
                {/* Add your table rows here */}
            </tbody>
        </table>
    );
};

export default ComparePlans;
