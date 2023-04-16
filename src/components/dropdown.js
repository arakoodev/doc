import React, { useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative max-w-screen-lg mx-auto ">
            <Disclosure>
                <Disclosure.Button className="flex ring-0 items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-100 cursor-pointer bg-transparent outline-none border-0">
                    <span>Is team pricing available?</span>
                    <ChevronDownIcon
                        className={`ui-open:rotate-180 ui-open:transform w-5 h-5 text-gray-500`}
                    />
                </Disclosure.Button>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Yes! You can purchase a license that you can share with your entire
                        team.
                    </Disclosure.Panel>
                </Transition>
            </Disclosure>
        </div>
    );
};

export default Dropdown;
