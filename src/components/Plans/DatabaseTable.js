import React from 'react'

export const DatabaseCaption = ({title, children}) => {
    return (
        <caption className="bg-neutral-50 dark:bg-transparent border-t px-4 py-3 text-left text-sm font-medium dark:text-white w-full border-0 border-y border-neutral-800  border-solid ">
            <div className="flex items-center gap-2 ">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-100 text-neutral-100 ">
                    {children}
                </div>
                <span className="text-neutral-100 font-normal">{title}</span>
            </div>
        </caption>
    );
};

export const DatabaseHeader = () => {
    return (
        <thead className="sr-only">
            <tr>
                <th className="sr-only" scope="col">
                    Feature
                </th>
                <th className="sr-only" scope="col">
                    Included
                </th>
            </tr>
        </thead>
    );
};


export function FeatureTableRow(props) {
    return (
        <tr className={`bg-transparent border-neutral-800 border-y border-solid ${props.isDivider ? 'divide-neutral-800' : ''}`}>
            <th className="text-neutral-400 px-4 py-3 text-left text-sm font-normal" scope="row">
                <span>{props.featureName}</span>
            </th>
            <td className="py-3 pr-4 text-right">
                {props.value ?
                    <span className="text-neutral-1200 block text-sm">{props.value}</span> 
                    : props.isIncluded ?
                        <div className="inline-block">
                            <span className="mx-auto">
                                <svg className="-ml-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
                                    <path fill="#3ECF8E" fillRule="evenodd" d="M12 21.212a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-.708-6.414 4.463-4.463-.707-.708-4.11 4.11-1.986-1.986-.707.707 2.34 2.34h.707Z" clipRule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Included</span>
                            </span>
                        </div> :
                        <div className="inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" className="text-neutral-700">
                                <path fill="currentColor" fillRule="evenodd" d="M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18ZM5.534 9.534h6.804v-1H5.534v1Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Not included</span>
                        </div>
                    

                }
            </td>
        </tr>
    );
}


