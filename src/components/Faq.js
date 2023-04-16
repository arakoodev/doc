import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Faq() {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
        console.log(isAccordionOpen)
    };

    return (
        <div className="border-b pb-3">
            <div
                className={`group first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md overflow-hidden ${isAccordionOpen ? 'border-gray-500' : 'border-transparent'
                    }`}
            >
                <button
                    type="button"
                    aria-controls="radix-0"
                    aria-expanded={isAccordionOpen}
                    className="flex items-center justify-between w-full text-left cursor-pointer outline-none focus-visible:ring-1 focus-visible:z-10 ring-scale-1100 gap-3"
                    onClick={toggleAccordion}
                >
                    <span className="text-scale-1200">Can I cap my usage so my bill doesn't run over?</span>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className="sbui-icon !rotate-180 text-scale-900 rotate-0 group-state-open:rotate-180 group-data-[state=open]:rotate-180 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 duration-200 order-last"
                        aria-hidden="true"
                    />
                </button>
                <div
                    id="radix-0"
                    role="region"
                    aria-labelledby="radix-1"
                    className={`py-3 overflow-hidden ${isAccordionOpen ? 'animate-fade-in-down' : 'animate-fade-out-up'}`}
                >
                    <div className="text-scale-900 prose">
                        <p>Yes. Spend caps are on by default on the Pro tier. You can turn spend caps off for usage beyond the tier limits to pay as you grow.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
