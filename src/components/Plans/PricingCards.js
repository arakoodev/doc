import React from 'react';

const PricingCard = ({ monthlyPrice, description }) => {
    return (
        <div className="mt-8 px-4 mobile-header">
            <h2 className=" text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 dark:from-emerald-600 text-3xl font-medium uppercase font-mono m-0">Free</h2>
            <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">{monthlyPrice}</span>
                <p className="text-base">/mo</p>
            </div>
            <p className="text-base my-3">{description}</p>
            <a href="https://app.supabase.com">
                <button className="relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 bg-emerald-700 hover:bg-emerald-600 text-white border shadow-emerald-fixed-1000 hover:border shadow-emerald-fixed-900 dark:border shadow-emerald-fixed-1000 dark:hover:border shadow-emerald-fixed-1000 focus-visible:outline-emerald-600 w-full flex items-center justify-center shadow-sm text-sm px-4 py-2" type="button">
                    <span className="font-semibold">Get started</span>
                </button>
            </a>
        </div>
    );
};

export default PricingCard;
