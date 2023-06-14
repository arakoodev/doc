import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNpm } from '@fortawesome/free-brands-svg-icons';

function VersionsSection() {
    return (
        <div className="flex justify-between text-sm lg:text-xs mb-2 flex-col md:flex-row gap-4 md:gap-0">
            <div className="flex flex-col">
                <h4 className="text-lg font-medium m-0">Latest Version</h4>
                <hr className="my-2 border-neutral-300" />
                <div className="flex ">
                    <FontAwesomeIcon icon={faNpm} className="w-6 h-6 text-primary-500" />
                    <p className="m-0 ml-2">v8.39 on date</p>
                </div>
            </div>
            <div className="flex flex-col md:ml-4  ">
                <h4 className="text-lg font-medium m-0">Upcoming Version</h4>
                <hr className="my-2  border-neutral-300" />
                <div className="flex ">
                    <FontAwesomeIcon icon={faNpm} className="w-6 h-6 text-primary-500" />
                    <p className="m-0 ml-2">v8.39 on date</p>
                </div>

            </div>
            <div className="flex flex-col md:ml-4">
                <h4 className="text-lg font-medium m-0">Development</h4>
                <hr className="my-2 border-neutral-300" />
                <div className="flex ">
                    <FontAwesomeIcon icon={faNpm} className="w-6 h-6 text-primary-500" />
                    <p className="m-0 ml-2">head on date</p>
                </div>
            </div>
        </div>
    );
}

export default VersionsSection;