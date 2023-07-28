import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function GetStartedButton({links}) {
    return (
        <a href={links}>
            <button className="border-solid border-emerald-600 relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 bg-emerald-700 hover:bg-emerald-400 text-white border shadow-bg-green-300 hover:border-emerald-600 dark:border-shadow-bg-green-300 dark:hover:border-shadow-bg-green-300 focus-visible:outline-emerald-700 w-full flex items-center justify-center shadow-sm text-sm leading-4 px-3 py-2">
                <span className="truncate">Get Started</span>
            </button>
        </a>
    );
}

export default GetStartedButton;
