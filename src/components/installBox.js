import React, { useState } from 'react';

// import { ClipboardCopyIcon } from '@heroicons/react/24/outline';

const InstallBox = ({ code, source, version }) => {
    const [copySuccess, setCopySuccess] = useState(false);

    function copyToClipboard() {
        navigator.clipboard.writeText(code);
        setCopySuccess(true);
        setTimeout(() => {
            setCopySuccess(false);
        }, 1000);
    }
    return (
        <div className="mt-0 hidden  md:block InstallBox--desktop w-full">
            {/* <p className="all-caps mb-2 text-xl font-semibold dark:text-black">
              {version}
            </p> */}
            <div className="rounded-full border-solid border-2 border-[#EE81C3] text-lg mb-2">
                <div className="relative  ">
                    <div className=''>
                        <pre className="m-0 rounded-full bg-indigo-950 p-2 pt-3 px-6 " 
                        // style={{ backgroundColor: '#282A36' }}
                        >
                            <code>
                                <span className="line">
                                    <span style={{ color: '#F8F8F2' }}>
                                        {code}
                                    </span>
                                </span>
                            </code>
                        </pre>
                        {/* <pre>{code}</pre> */}
                        <div id="WEeJYNsIgEDo" className="CopyIcon copy text-white fill-white absolute right-6 top-2" onClick={copyToClipboard} >
                            {copySuccess ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        aria-hidden="true" className="check h-7 w-7 cursor-pointer p-1 text-white opacity-70 hover:opacity-100 p-0 w-7 h-7">
                                        <path fillRule="evenodd"
                                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" aria-hidden="true"
                                    className="clipboard h-7 w-7 cursor-pointer p-1 text-white opacity-70 hover:opacity-100 p-0 w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6">
                                    </path>
                                </svg>
                            )}
                        </div>
                    </div>

                </div>
            </div>
            <div className="text-sm whitespace-nowrap pt-1 text-black opacity-70 md:flex md:flex-row md:flex-wrap md:justify-between">
                <p className="text-sm ">Supported on macOS, Linux, and WSL</p>
                <a className="text-black" href={source}>View source</a>
            </div>

        </div>
    );
};

export default InstallBox;
