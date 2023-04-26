import React, { useState } from "react";

function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [recipient, setRecipient] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-8">

                <div className="col-span-2 flex gap-4">
                    <div className="w-1/2">
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-neutral-100"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            autoComplete="given-name"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="w-1/2">
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-neutral-100"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            autoComplete="family-name"
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>

                </div>

                <div className="col-span-2 flex gap-4">
                    <div className="w-1/2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-neutral-100"
                        >
                            Work Email
                            <span className="text-emerald-400">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="w-1/2">
                        <label
                            htmlFor="phoneNumber"
                            className="block text-sm font-medium text-neutral-100"
                        >
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            id="phoneNumber"
                            autoComplete="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>

                </div>
                <div className="col-span-2 flex gap-4 items-end">
                    <div className="w-1/2">
                        <label
                            htmlFor="companyName"
                            className="block text-sm font-medium text-neutral-100"
                        >
                            Company Name
                            <span className="text-emerald-400">*</span>
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            id="companyName"
                            required
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="w-1/2">
                        <label
                            htmlFor="recipient"
                            className="block text-sm font-medium text-neutral-100"
                        >
                            To Whom Do You Want to Reach Out?
                        </label>
                        <input
                            type="text"
                            name="recipient"
                            id="recipient"
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                            className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
</div>
                <div className="col-span-2 row-span-3">
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-100"
                    >
                        How Can We Help You?
                        <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows="10"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    ></textarea>
                </div>
            </div>
            <div className="mt-4">
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 w-full mt-8"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
