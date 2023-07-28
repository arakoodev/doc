import React, { useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import {frontMatter as faqList} from "../markdown/pricing/faqList.md"
const Faq = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

    // const faqList = [
    //     {
    //         question: "Can I cap my usage so my bill doesn't run over?",
    //         answer: "Yes. Spend caps are on by default on the Pro tier. You can turn spend caps off for usage beyond the tier limits to pay as you grow."
    //     },
    //     {
    //         question: "I'm worried I could end up with a huge bill at the end of the month.",
    //         answer: "Spend caps are on by default and you need to toggle them off from your dashboard to enable pay as you grow pricing."
    //     },
    //     {
    //         question: "When will I be billed?",
    //         answer: "Our Pro tier is charged up front, and billed on a monthly basis. Additional usage costs are also billed at the end of the month."
    //     },
    //     {
    //         question: "Are you going to change your pricing in the future?",
    //         answer: "Our pricing is in Beta. You can read more about our decisions in our pricing blog post. Pricing may change in the future, however as a team of developers we are committed to pricing being as developer friendly as possible."
    //     },
    //     {
    //         question: "What happens if I cancel my subscription?",
    //         answer: "The organization is allocated credits for unused time during the billing month. Those credits can be used for other projects."
    //     },
    //     {
    //         question: "Do I get a notification if I am approaching my usage limits?",
    //         answer: "Yes, we will email you when you are within 20% of your tier limits."
    //     },
    //     {
    //         question: "What if I need one project for development and one for production?",
    //         answer: "We are working on multi-environment projects. For now, you can create a project for your development backend and production backend. We give you 2 free projects as part of our free tier. This means you could have a development and a production server as part of your free tier."
    //     },
    //     {
    //         question: "Can I self-host Supabase for free?",
    //         answer: "Yes, you can use the Docker setup or the Supabase CLI. Supabase Studio is also available in the Docker setup."
    //     },
    //     {
    //         question: "Can I pause a free project?",
    //         answer: "Yes, you can pause a project at any time. Our Free tier gives you 2 free projects, but you can have as many paused projects as you want. Just pause and unpause them as needed."
    //     }
    // ]


    return (
        <div className="relative max-w-screen-md mx-auto  py-24 pb-14 border-y border-neutral-300">
            <h2 className="h3 text-center text-neutral-200 font-medium">Frequently asked questions</h2>

            <div className="my-20">
                {/* <FaqMd /> */}
                {faqList.map((faq, index) => (
                    <Disclosure as={"div"}  key={index}>
                        <Disclosure.Button
                            className="flex ring-0 items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-neutral-200 cursor-pointer bg-transparent outline-none border-0"
                        >
                            <span>{faq.question}</span>
                            <ChevronDownIcon
                                className={`ui-open:rotate-180 ui-open:transform w-5 h-5 text-gray-500`}
                            />
                        </Disclosure.Button>
                        <Transition
                            className="transition-all duration-500 overflow-hidden"
                            enterFrom="transform scale-95 opacity-0 max-h-0"
                            enterTo="transform scale-100 opacity-100 max-h-96"
                            leaveFrom="transform scale-100 opacity-100 max-h-96"
                            leaveTo="transform scale-95 opacity-0 max-h-0"
                        >
                            <Disclosure.Panel className="px-4 py-4 text-sm text-neutral-500">
                                {faq.answer}
                            </Disclosure.Panel>
                        </Transition>
                    </Disclosure>
                ))}
                <div className='pt-16 text-sm text-neutral-400'>
                    <p className="p text-center">Can't find the answer to your question, you can <a target="_blank" href="https://app.supabase.com/support/new" className="transition text-brand-900 hover:text-brand-1000">open a support ticket</a> and our team of experts will be able to help.</p>
                    <p className="p text-center">For enterprise enquries, <a target="_blank" href="https://app.supabase.com/support/new" className="transition text-brand-900 hover:text-brand-1000">you can contact the team here</a>.</p>
                </div>
            </div >
        </div>
    );
};

export default Faq;


