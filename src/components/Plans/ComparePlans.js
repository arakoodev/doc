import React, { useRef, useState, useEffect } from "react";
import PricingCard from "./PricingCards";
import { DatabaseCaption, DatabaseHeader, FeatureTableRow } from "./DatabaseTable"
import Plan from "./Plans";

// import yaml from "js-yaml";
import data, { frontMatter } from "../../markdown/pricing/comparePlan.md";


const ComparePlans = ({ className }) => {
    const [selectedPlan, setSelectedPlan] = useState("Free");

    const handleChange = (e) => {
        setSelectedPlan(e.target.value);

    };
    const [parsedData, setParsedData] = useState(null);

    // useEffect(() => {
    //     const parsed = yaml.load(data);
    //     setParsedData(parsed);
    // }, []);


    // const priceMap = {
    //     Free: {
    //         monthlyPrice: "0",
    //         description: "Perfect for hobby projects and experiments",
    //         features: {
    //             Database: {
    //                 name: "Database",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Dedicated Postgres Database",
    //                         proOnly: true,
    //                     },
    //                     {
    //                         name: "Unlimited API requests",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Database size",
    //                         proOnly: true,
    //                         value: "8 GB, then $0.125 per GB"
    //                     },
    //                     {
    //                         name: "Automatic backups",
    //                         proOnly: true,
    //                         value: "7 days"
    //                     },
    //                     {
    //                         name: "Point in time recovery",
    //                         proOnly: true,
    //                         value: "$100 per 7 days"
    //                     },
    //                     {
    //                         name: "Pausing",
    //                         proOnly: true,
    //                         value: "Never"
    //                     },
    //                     {
    //                         name: "Database egress",
    //                         proOnly: true,
    //                         value: "50 GB, then $0.09 per GB"
    //                     }
    //                 ]
    //             },
    //             Auth: {
    //                 name: "Auth",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Total Users",
    //                         proOnly: false,
    //                         value: "Unlimited"
    //                     },
    //                     {
    //                         name: "MAUs",
    //                         proOnly: true,
    //                         value: "50,000"
    //                     },
    //                     {
    //                         name: "Social OAuth providers",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Custom SMTP server",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Remove Supabase branding from emails",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Enterprise OAuth providers",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Audit trails",
    //                         proOnly: true,
    //                         value: "1 hour"
    //                     },
    //                     {
    //                         name: "Supabase Auth emails",
    //                         proOnly: true,
    //                         value: "30 / hour"
    //                     },
    //                     {
    //                         name: "Single Sign-On (SAML 2.0)",
    //                         proOnly: false,
    //                     },
    //                     {
    //                         name: "Advanced security features",
    //                         proOnly: false
    //                     }
    //                 ]
    //             },
    //             Storage: {
    //                 name: "Storage",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Storage",
    //                         proOnly: false,
    //                         value: "1 GB"
    //                     },
    //                     {
    //                         name: "Storage egress",
    //                         proOnly: false,
    //                         value: "2 GB"
    //                     },
    //                     {
    //                         name: "Custom access controls",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Max file upload size",
    //                         proOnly: false,
    //                         value: "5MB"
    //                     },
    //                     {
    //                         name: "Asset transformations",
    //                         proOnly: false,
    //                     }
    //                 ]
    //             },
    //             Realtime: {
    //                 name: "Realtime",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Postgres Changes",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Concurrent Peak Connections",
    //                         proOnly: false,
    //                         value: "200"
    //                     },
    //                     {
    //                         name: "Messages Per Month",
    //                         proOnly: false,
    //                         value: "2 Million"
    //                     },
    //                     {
    //                         name: "Max Message Size",
    //                         proOnly: false,
    //                         value: "250 KB"
    //                     }
    //                 ]
    //             },
    //             EdgeFunctions: {
    //                 name: "Edge Functions",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Invocations",
    //                         proOnly: false,
    //                         value: "500K/month"
    //                     },
    //                     {
    //                         name: "Script size",
    //                         proOnly: false,
    //                         value: "2 MB"
    //                     },
    //                     {
    //                         name: "Number of functions",
    //                         proOnly: false,
    //                         value: "10"
    //                     }
    //                 ]
    //             },
    //             Dashboard: {
    //                 name: "Dashboard",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Team members",
    //                         proOnly: false,
    //                         value: "Unlimited"
    //                     },
    //                     {
    //                         name: "Access controls",
    //                         proOnly: false,
    //                         value: "Coming soon"
    //                     },
    //                     {
    //                         name: "Audit trails",
    //                         proOnly: false,
    //                     }
    //                 ]
    //             },
    //             Plafform: {
    //                 name: "Platform Security and Compliance",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "On Premises / BYO cloud",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Log retention (API & Database)",
    //                         proOnly: false,
    //                         value: "1 days"
    //                     },
    //                     {
    //                         name: "Log drain",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Metrics endpoint",
    //                         proOnly: false,
    //                     },
    //                     {
    //                         name: "SOC2",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "SSO",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "99.9% SLA",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Access Roles",
    //                         proOnly: false,
    //                         value: "Owner, Developer"
    //                     },
    //                     {
    //                         name: "Vanity URLs",
    //                         proOnly: false,
    //                     },
    //                     {
    //                         name: "Custom Domains",
    //                         proOnly: false,
    //                     }
    //                 ]

    //             },
    //             Support: {
    //                 name: "Support",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Community support",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Email support",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Email support SLA",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Designated support",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "On Boarding Support",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Designated customer success engineer",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Security Questionnaire Help",
    //                         proOnly: false
    //                     },
    //                 ],
    //             }
    //         },
    //     },
    //     Pro: {
    //         monthlyPrice: "25",
    //         description: "For production applications with the option to scale.",
    //         features: {
    //             Database: {
    //                 name: "Database",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Dedicated Postgres Database",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Unlimited API requests",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Database size",
    //                         proOnly: true,
    //                         value: "8 GB, then $0.125 per GB"
    //                     },
    //                     {
    //                         name: "Automatic backups",
    //                         proOnly: true,
    //                         value: "7 days"
    //                     },
    //                     {
    //                         name: "Point in time recovery",
    //                         proOnly: true,
    //                         value: "$100 per 7 days"
    //                     },
    //                     {
    //                         name: "Pausing",
    //                         proOnly: true,
    //                         value: "Never"
    //                     },
    //                     {
    //                         name: "Database egress",
    //                         proOnly: true,
    //                         value: "50 GB, then $0.09 per GB"
    //                     }
    //                 ]
    //             },
    //             Auth: {
    //                 name: "Auth",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Total Users",
    //                         proOnly: false,
    //                         value: "Unlimited"
    //                     },
    //                     {
    //                         name: "MAUs",
    //                         proOnly: true,
    //                         value: "50,000"
    //                     },
    //                     {
    //                         name: "Social OAuth providers",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Custom SMTP server",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Remove Supabase branding from emails",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Enterprise OAuth providers",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Audit trails",
    //                         proOnly: true,
    //                         value: "1 hour"
    //                     },
    //                     {
    //                         name: "Supabase Auth emails",
    //                         proOnly: true,
    //                         value: "30 / hour"
    //                     },
    //                     {
    //                         name: "Single Sign-On (SAML 2.0)",
    //                         proOnly: false,
    //                     },
    //                     {
    //                         name: "Advanced security features",
    //                         proOnly: false
    //                     }
    //                 ]
    //             },
    //             Storage: {
    //                 name: "Storage",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Storage",
    //                         proOnly: false,
    //                         value: "1 GB"
    //                     },
    //                     {
    //                         name: "Storage egress",
    //                         proOnly: false,
    //                         value: "2 GB"
    //                     },
    //                     {
    //                         name: "Custom access controls",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Max file upload size",
    //                         proOnly: false,
    //                         value: "5MB"
    //                     },
    //                     {
    //                         name: "Asset transformations",
    //                         proOnly: false,
    //                     }
    //                 ]
    //             },
    //             Realtime: {
    //                 name: "Realtime",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Postgres Changes",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Concurrent Peak Connections",
    //                         proOnly: false,
    //                         value: "200"
    //                     },
    //                     {
    //                         name: "Messages Per Month",
    //                         proOnly: false,
    //                         value: "2 Million"
    //                     },
    //                     {
    //                         name: "Max Message Size",
    //                         proOnly: false,
    //                         value: "250 KB"
    //                     }
    //                 ]
    //             },
    //             EdgeFunctions: {
    //                 name: "Edge Functions",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Invocations",
    //                         proOnly: false,
    //                         value: "500K/month"
    //                     },
    //                     {
    //                         name: "Script size",
    //                         proOnly: false,
    //                         value: "2 MB"
    //                     },
    //                     {
    //                         name: "Number of functions",
    //                         proOnly: false,
    //                         value: "10"
    //                     }
    //                 ]
    //             },
    //             Dashboard: {
    //                 name: "Dashboard",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Team members",
    //                         proOnly: false,
    //                         value: "Unlimited"
    //                     },
    //                     {
    //                         name: "Access controls",
    //                         proOnly: false,
    //                         value: "Coming soon"
    //                     },
    //                     {
    //                         name: "Audit trails",
    //                         proOnly: false,
    //                     }
    //                 ]
    //             },
    //             Plafform: {
    //                 name: "Platform Security and Compliance",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "On Premises / BYO cloud",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Log retention (API & Database)",
    //                         proOnly: false,
    //                         value: "1 days"
    //                     },
    //                     {
    //                         name: "Log drain",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Metrics endpoint",
    //                         proOnly: false,
    //                     },
    //                     {
    //                         name: "SOC2",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "SSO",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "99.9% SLA",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Access Roles",
    //                         proOnly: false,
    //                         value: "Owner, Developer"
    //                     },
    //                     {
    //                         name: "Vanity URLs",
    //                         proOnly: false,
    //                     },
    //                     {
    //                         name: "Custom Domains",
    //                         proOnly: false,
    //                     }
    //                 ]

    //             },
    //             Support: {
    //                 name: "Support",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Community support",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Email support",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Email support SLA",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Designated support",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "On Boarding Support",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Designated customer success engineer",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Security Questionnaire Help",
    //                         proOnly: false
    //                     },
    //                 ],
    //             }
    //         },
    //     },
    //     Enterprise: {
    //         monthlyPrice: "Contact us for a quote",
    //         description: "For large-scale applications managing serious workloads.",
    //         features: {
    //             Database: {
    //                 name: "Database",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Dedicated Postgres Database",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Unlimited API requests",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Database size",
    //                         proOnly: true,
    //                         value: "8 GB, then $0.125 per GB"
    //                     },
    //                     {
    //                         name: "Automatic backups",
    //                         proOnly: true,
    //                         value: "7 days"
    //                     },
    //                     {
    //                         name: "Point in time recovery",
    //                         proOnly: true,
    //                         value: "$100 per 7 days"
    //                     },
    //                     {
    //                         name: "Pausing",
    //                         proOnly: true,
    //                         value: "Never"
    //                     },
    //                     {
    //                         name: "Database egress",
    //                         proOnly: true,
    //                         value: "50 GB, then $0.09 per GB"
    //                     }
    //                 ]
    //             },
    //             Auth: {
    //                 name: "Auth",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Total Users",
    //                         proOnly: false,
    //                         value: "Unlimited"
    //                     },
    //                     {
    //                         name: "MAUs",
    //                         proOnly: true,
    //                         value: "50,000"
    //                     },
    //                     {
    //                         name: "Social OAuth providers",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Custom SMTP server",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Remove Supabase branding from emails",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Enterprise OAuth providers",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Audit trails",
    //                         proOnly: true,
    //                         value: "1 hour"
    //                     },
    //                     {
    //                         name: "Supabase Auth emails",
    //                         proOnly: true,
    //                         value: "30 / hour"
    //                     },
    //                     {
    //                         name: "Single Sign-On (SAML 2.0)",
    //                         proOnly: false,
    //                     },
    //                     {
    //                         name: "Advanced security features",
    //                         proOnly: false
    //                     }
    //                 ]
    //             },
    //             Storage: {
    //                 name: "Storage",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Storage",
    //                         proOnly: false,
    //                         value: "1 GB"
    //                     },
    //                     {
    //                         name: "Storage egress",
    //                         proOnly: false,
    //                         value: "2 GB"
    //                     },
    //                     {
    //                         name: "Custom access controls",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Max file upload size",
    //                         proOnly: false,
    //                         value: "5MB"
    //                     },
    //                     {
    //                         name: "Asset transformations",
    //                         proOnly: false,
    //                     }
    //                 ]
    //             },
    //             Realtime: {
    //                 name: "Realtime",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Postgres Changes",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Concurrent Peak Connections",
    //                         proOnly: false,
    //                         value: "200"
    //                     },
    //                     {
    //                         name: "Messages Per Month",
    //                         proOnly: false,
    //                         value: "2 Million"
    //                     },
    //                     {
    //                         name: "Max Message Size",
    //                         proOnly: false,
    //                         value: "250 KB"
    //                     }
    //                 ]
    //             },
    //             EdgeFunctions: {
    //                 name: "Edge Functions",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Invocations",
    //                         proOnly: false,
    //                         value: "500K/month"
    //                     },
    //                     {
    //                         name: "Script size",
    //                         proOnly: false,
    //                         value: "2 MB"
    //                     },
    //                     {
    //                         name: "Number of functions",
    //                         proOnly: false,
    //                         value: "10"
    //                     }
    //                 ]
    //             },
    //             Dashboard: {
    //                 name: "Dashboard",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Team members",
    //                         proOnly: false,
    //                         value: "Unlimited"
    //                     },
    //                     {
    //                         name: "Access controls",
    //                         proOnly: false,
    //                         value: "Coming soon"
    //                     },
    //                     {
    //                         name: "Audit trails",
    //                         proOnly: false,
    //                     }
    //                 ]
    //             },
    //             Plafform: {
    //                 name: "Platform Security and Compliance",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "On Premises / BYO cloud",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Log retention (API & Database)",
    //                         proOnly: false,
    //                         value: "1 days"
    //                     },
    //                     {
    //                         name: "Log drain",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Metrics endpoint",
    //                         proOnly: false,
    //                     },
    //                     {
    //                         name: "SOC2",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "SSO",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "99.9% SLA",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Access Roles",
    //                         proOnly: false,
    //                         value: "Owner, Developer"
    //                     },
    //                     {
    //                         name: "Vanity URLs",
    //                         proOnly: false,
    //                     },
    //                     {
    //                         name: "Custom Domains",
    //                         proOnly: false,
    //                     }
    //                 ]

    //             },
    //             Support: {
    //                 name: "Support",
    //                 FeatureIncluded: [
    //                     {
    //                         name: "Community support",
    //                         proOnly: true
    //                     },
    //                     {
    //                         name: "Email support",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Email support SLA",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Designated support",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "On Boarding Support",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Designated customer success engineer",
    //                         proOnly: false
    //                     },
    //                     {
    //                         name: "Security Questionnaire Help",
    //                         proOnly: false
    //                     },
    //                 ],
    //             }
    //         },
    //     }

    // }

    // const { monthlyPrice, features: freeFeatures1, description } = priceMap.Free;

    // const { monthlyPrice: proMonthlyPrice, features: proFeatures, description: proDescription } = priceMap.Pro;

    // const { monthlyPrice: enterpriseMonthlyPrice, features: enterpriseFeatures, description: enterpriseDescription } = priceMap.Enterprise;

    const freeMonthlyLink = frontMatter.Free[0].link;
    const freeMonthlyName = frontMatter.Free[1].name;
    const freeMonthlyPrice = frontMatter.Free[2].monthlyPrice;
    const FreeDescription = frontMatter.Free[3].description;
    const freeFeatures = frontMatter.Free[4].features;

    const proMonthlyLink = frontMatter.Pro[0].link;
    const proMonthlyName = frontMatter.Pro[1].name;
    const proMonthlyPrice = frontMatter.Pro[2].monthlyPrice;
    const proDescription = frontMatter.Pro[3].description;
    const proFeatures = frontMatter.Pro[4].features;

    const enterpriseMonthlyLink = frontMatter.Enterprise[0].link;
    const enterpriseMonthlyName = frontMatter.Enterprise[1].name;
    const enterpriseMonthlyPrice = frontMatter.Enterprise[2].monthlyPrice;
    const enterpriseDescription = frontMatter.Enterprise[3].description;
    const enterpriseFeatures = frontMatter.Enterprise[4].features;

    const all = frontMatter.All

    const HeadingRow = ({ children, name, }) => {
        return (
            <div className="sticky top-14 py-2 z-[10]    bg-transparent" style={{ borderTop: 'none' }}>
                <div className="w-1/4 border-0 border-[#1b1b1d] dark:bg-[#1b1b1d] text-xl  py-3 pl-6 text-left font-medium dark:text-white">
                    <div className="flex items-center gap-4">
                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-800 dark:bg-emerald-800 text-brand-100">
                            {children}
                        </div>
                        <h4 className="m-0 text-base font-normal w-[10em]">{name}</h4>
                    </div>
                </div>
                <div className="w-1/4 bg-transparent"></div>
                <div className="w-1/4"></div>
                <div className="w-1/4"></div>
            </div>

        )
    }
    
    const ContentRow = ({ text, tierFree, tierFreeValue, tierPro, tierProValue, tierEnterprise, tierEnterpriseValue }) => {
        return (
            <div className="border-0 border-t border-solid border-neutral-700 dark:divide-scale-400 flex">
                <div className="w-1/3 text-neutral-100 flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal dark:text-white">
                    <span>{text}</span>
                </div>
                <div className={`w-1/4 px-6 tier-free self-center ${tierFree ? 'font-bold' : ''}`}>
                    {tierFree  &&(
                        <span className="mx-auto">
                            <svg className="-ml-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
                                <path fill="#3ECF8E" fillRule="evenodd" d="M12 21.212a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-.708-6.414 4.463-4.463-.707-.708-4.11 4.11-1.986-1.986-.707.707 2.34 2.34h.707Z" clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Included in</span>
                        </span>
                    ) }
                    {!tierFree && !tierFreeValue && (
                        <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" className="text-neutral-700"><path fill="currentColor" fillRule="evenodd" d="M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18ZM5.534 9.534h6.804v-1H5.534v1Z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Included in</span>
                        </span>
                    )}
                    {tierFreeValue && (
                        <span className="text-neutral-100 text-xs dark:text-white flex items-center gap-3">{tierFreeValue}</span>
                    )}
                </div>
                <div className={`w-1/4 px-6 tier-free self-center ${tierPro ? 'font-bold' : ''}`}>
                    {tierPro &&(
                        <span className="mx-auto">
                            <svg className="-ml-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
                                <path fill="#3ECF8E" fillRule="evenodd" d="M12 21.212a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-.708-6.414 4.463-4.463-.707-.708-4.11 4.11-1.986-1.986-.707.707 2.34 2.34h.707Z" clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Included in</span>
                        </span>
                    )}
                    {!tierPro && !tierProValue && (
                        <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" className="text-neutral-700"><path fill="currentColor" fillRule="evenodd" d="M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18ZM5.534 9.534h6.804v-1H5.534v1Z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Included in</span>
                        </span>
                    )}
                    {tierProValue && (
                        <span className="text-neutral-100 text-xs dark:text-white flex items-center gap-3">{tierProValue}</span>
                    )}
                </div>
                <div className={`w-1/4 px-6 tier-free self-center ${tierEnterprise ? 'font-bold' : ''}`}>
                    {tierEnterprise && (
                        <span className="mx-auto">
                            <svg className="-ml-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none">
                                <path fill="#3ECF8E" fillRule="evenodd" d="M12 21.212a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-.708-6.414 4.463-4.463-.707-.708-4.11 4.11-1.986-1.986-.707.707 2.34 2.34h.707Z" clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Included in</span>
                        </span>
                    )}
                    {!tierEnterprise && !tierEnterpriseValue && (
                        <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" className="text-neutral-700"><path fill="currentColor" fillRule="evenodd" d="M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18ZM5.534 9.534h6.804v-1H5.534v1Z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Included in</span>
                        </span>
                    )}
                    {tierEnterpriseValue && (
                        <span className="text-neutral-100 text-xs dark:text-white flex items-center gap-3">{tierEnterpriseValue}</span>
                    )}
                </div>
            </div>

        );
    };



    return (
        <div className=' '>

            <div className="lg:hidden">
                <div className="bg-zinc-900 p-2 sticky top-14 z-10 pt-4">
                    <div className="bg-zinc-800 rounded-lg border border-zinc-600 py-2 px-4 flex justify-between items-center">
                        <label className="text-zinc-400">Change plan</label>
                        <div className="col-span-12">
                            <div className="">
                                <div className="relative">
                                    <select
                                        id="change-plan"
                                        name="Change plan"
                                        className="block box-border w-full rounded-md shadow-sm transition-all text-zinc-1200  focus:shadow-md outline-none focus:ring-current focus:ring-2 focus:border-zinc-900 focus:ring-zinc-400 placeholder-zinc-800 appearance-none bg-none bg-neutralA-200 border border-zinc-700 text-sm px-4 py-2"
                                        value={selectedPlan}
                                        onChange={handleChange}
                                    >
                                        <option value="Free">Free</option>
                                        <option value="Pro">Pro</option>
                                        <option value="Enterprise">Enterprise</option>
                                    </select>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <svg
                                            className="h-5 w-5 text-zinc-300"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {selectedPlan === "Free" && (
                    <Plan monthlyPrice={freeMonthlyPrice} features={freeFeatures} description={FreeDescription} />
                )}
                {selectedPlan === "Pro" && (
                    <Plan monthlyPrice={proMonthlyPrice} features={proFeatures} description={proDescription} />
                )}

                {selectedPlan === "Enterprise" && (
                    <Plan monthlyPrice={enterpriseMonthlyPrice} features={enterpriseFeatures} description={enterpriseDescription} />
                )}

            </div>
            <div className="hidden lg:block ">
                <div className="w-full">
                    <div className="bg-[#1b1b1d] sticky top-14 z-10 py-2">
                        <div className="flex justify-between items-center text-neutral-1200">
                            <div className="w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal">
                                <span className="sr-only">Feature by</span>
                            </div>
                            <div className="w-1/4 px-6 pr-2  text-left text-sm font-normal">
                                <h3 className="m-0 text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-500 dark:gradient-text-brand-100 text-2xl font-mono font-normal uppercase flex items-center gap-4">{freeMonthlyName}</h3>
                            </div>
                            <div className="w-1/4 px-6 pr-2 pt-2 pb-2 text-left text-sm font-normal">
                                <h3 className="m-0 text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-500 dark:gradient-text-brand-100 text-2xl font-mono font-normal uppercase flex items-center gap-4">{proMonthlyName}</h3>
                            </div>
                            <div className="w-1/4 px-6 pr-2 pt-2 pb-2 text-left text-sm font-normal">
                                <h3 className="m-0 text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-500 dark:gradient-text-brand-100 text-2xl font-mono font-normal uppercase flex items-center gap-4">{enterpriseMonthlyName}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="descriptions flex flex-col">
                        <div className="flex w-full">
                            <div className="w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal"></div>
                            <div className="w-1/4 px-6 text-left text-sm font-normal">
                                <p className="text-neutral-400 border-0 border-solid border-neutral-700 text-sm border-b border-scale-700 pb-4">Perfect for passion projects &amp; simple websites.</p>
                                <div className="h-0.25 absolute bottom-0 left-0 w-full" style={{ height: "1px" }}></div>
                            </div>
                            <div className="w-1/4 px-6 text-left text-sm font-normal">
                                <p className="text-neutral-400 border-0 border-solid border-neutral-700 text-sm border-b border-scale-700 pb-4">For production applications with the option to scale.</p>
                                <div className="h-0.25 absolute bottom-0 left-0 w-full" style={{ height: "1px" }}></div>
                            </div>
                            <div className="w-1/4 px-6 text-left text-sm font-normal">
                                <p className="text-neutral-400 border-0 border-solid border-neutral-700 text-sm border-b border-scale-700 pb-4">For large-scale applications managing serious workloads.</p>
                                <div className="h-0.25 absolute bottom-0 left-0 w-full" style={{ height: "1px" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="border-scale-700 dark:border-scale-400 divide-scale-700 dark:divide-scale-400  ">
                        <div className="flex flex-row ">
                            <div className="text-scale-900 px-6 py-8 text-left align-top text-sm font-medium dark:text-white w-1/3"></div>
                            <div className="h-full w-1/4 px-6 py-2 align-top">
                                <div className="relative table h-full w-full">
                                    <div className="flex flex-col justify-between h-full">
                                        <span className="text-neutral-100 text-5xl font-bold">{freeMonthlyPrice}</span>
                                        <p className="text-neutral-400 text-xs mt-2">per project per month</p>
                                        <p className="-mt-2">
                                            <span className="bg-emerald-700 text-emerald-500 rounded-md bg-opacity-30 py-0.5 px-2 text-xs ">
                                                Limit of 2 free projects
                                            </span>
                                        </p>
                                        <div className="mt-8">
                                            <a href="https://app.supabase.com/new/new-project">
                                                <button
                                                    className="relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 bg-emerald-600 hover:bg-emerald-500 text-white bordershadow-brand-fixed-1000 hover:bordershadow-brand-fixed-900 dark:bordershadow-brand-fixed-1000 dark:hover:bordershadow-brand-fixed-1000 focus-visible:outline-brand-600 w-full flex items-center justify-center shadow-sm text-xs px-2.5 py-1 border border-solid border-emerald-400"
                                                    type="button"
                                                >
                                                    <span className="truncate">Get Started</span>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full w-1/4 px-6 py-2 align-top">
                                <div className="relative table h-full w-full">
                                    <div className="flex flex-col justify-between h-full">
                                        <span className="text-neutral-100 text-5xl font-bold">{proMonthlyPrice}</span>
                                        <p className="text-neutral-400 text-xs mt-2">per project per month</p>
                                        <p className="-mt-2">
                                            <span className="bg-emerald-700 text-emerald-500 rounded-md bg-opacity-30 py-0.5 px-2 text-xs">
                                                + usage
                                            </span>
                                        </p>
                                        <div className="mt-8">
                                            <a href="https://app.supabase.com/new/new-project">
                                                <button className="relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 bg-emerald-600 hover:bg-emerald-500 text-white bordershadow-brand-fixed-1000 hover:bordershadow-brand-fixed-900 dark:bordershadow-brand-fixed-1000 dark:hover:bordershadow-brand-fixed-1000 focus-visible:outline-brand-600 w-full flex items-center justify-center shadow-sm text-xs px-2.5 py-1 border border-solid border-emerald-400" type="button">
                                                    <span className="truncate">Get Started</span>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full w-1/4 px-6 py-2 align-top">
                                <div className="relative table h-full w-full">
                                    <div className="flex flex-col justify-between h-full">
                                        <span className="text-neutral-100 text-4xl font-bold">{enterpriseMonthlyPrice}</span>
                                        <div className="mt-[7.6em]">
                                            <a href="https://app.supabase.com/new/new-project">
                                                <button className="relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 bg-neutral-800 hover:bg-neutral-700 text-white bordershadow-brand-fixed-1000 hover:bordershadow-brand-fixed-900 dark:bordershadow-brand-fixed-1000 dark:hover:bordershadow-brand-fixed-1000 focus-visible:outline-brand-600 w-full flex items-center justify-center shadow-sm text-xs px-2.5 py-1 border border-solid border-neutral-700" type="button">
                                                    <span className="truncate">Contact us</span>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <HeadingRow name={all.Database.name}>
                            <svg className="h-5 w-5 stroke-white  dark:stroke-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                            </svg>
                        </HeadingRow>
                        {all.Database.FeatureIncluded.map(feature => (
                            <div>
                                <ContentRow
                                    key={feature.text}
                                    text={feature.name}
                                    tierFree={feature.tierFree}
                                    tierPro={feature.tierPro}
                                    tierEnterprise={feature.tierEnterprise}
                                    tierFreeValue={feature.tierFreeValue}
                                    tierProValue={feature.tierProValue}
                                    tierEnterpriseValue={feature.tierEnterpriseValue}
                                />
                            </div>
                        ))}

                        {/* <ContentRow text={"Dedicated Postgres Database"} tierFree={true} tierPro={true} tierEnterprise={true} />
                        <ContentRow text={"Unlimited API requests"} tierFree={true} tierPro={true} tierEnterprise={true} />
                        <ContentRow text={"Database size"} tierFreeValue={"500 MB"} tierProValue={"8 GB, then $0.125 per GB"} tierEnterpriseValue={"Unlimited"} />
                        <ContentRow text={"Automatic backups"} tierFree={false} tierProValue={"7 days"} tierEnterpriseValue={"Custom"} />
                        <ContentRow text={"Point in time recovery"} tierFree={false} tierProValue={"$100 per 7 days"} tierEnterprise={true} />
                        <ContentRow text={"Pausing"} tierFreeValue={"After 1 inactive week"} tierProValue={"Never"} tierEnterpriseValue={"Never"} />
                        <ContentRow text={"Database egress"} tierFreeValue={"2GB"} tierProValue={"50 GB, then $0.09 per GB"} tierEnterpriseValue={"Unlimited"} /> */}

                        <div className="h-16"></div>
                        <HeadingRow name={all.Auth.name}>
                            <svg className="h-5 w-5 stroke-white  dark:stroke-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                        </HeadingRow>
                        {all.Auth.FeatureIncluded.map(feature => (
                            <div>
                                <ContentRow
                                    key={feature.text}
                                    text={feature.name}
                                    tierFree={feature.tierFree}
                                    tierPro={feature.tierPro}
                                    tierEnterprise={feature.tierEnterprise}
                                    tierFreeValue={feature.tierFreeValue}
                                    tierProValue={feature.tierProValue}
                                    tierEnterpriseValue={feature.tierEnterpriseValue}
                                />
                            </div>
                        ))}

                        {/* <ContentRow text={"Total Users"} tierFreeValue={"Unlimited"} tierProValue={"Unlimited"} tierEnterpriseValue={"Unlimited"} />
                        <ContentRow text={"MAUs"} tierFreeValue={"50,000"} tierProValue={"100,000, then $0.00325 per MAU"} tierEnterpriseValue={"Unlimited"} />
                        <ContentRow text={"Social OAuth providers"} tierFree={true} tierPro={true} tierEnterprise={true} />
                        <ContentRow text={"Custom SMTP server"} tierFree={true} tierPro={true} tierEnterprise={true} />
                        <ContentRow text={"Remove Supabase branding from emails"} tierFree={false} tierPro={true} tierEnterprise={true} />
                        <ContentRow text={"Enterprise OAuth providers"} tierFree={false} tierPro={false} tierEnterprise={true} />
                        <ContentRow text={"Audit trails"} tierFreeValue={"1 hour"} tierProValue={"7 days"} tierEnterprise={true} />
                        <ContentRow text={"Supabase Auth emails"} tierFreeValue={"30 / hour"} tierProValue={"100 / hour"} tierEnterpriseValue={"Contact Us"} />
                        <ContentRow text={"Single Sign-On (SAML 2.0)"} tierFree={false}  tierProValue={"50 free, then $0.015 per MAU"} tierEnterprise={false} tierEnterpriseValue={"Contact Us"} />
                        <ContentRow text={"Advanced security features"} tierFree={false} tierPro={false} tierEnterprise={false}  tierEnterpriseValue={"Contact Us"} />
                         */}
                        
                        <div className="h-16"></div>

                        <HeadingRow name={all.Storage.name}>
                            <svg className="h-5 w-5 stroke-white dark:stroke-black dark:stroke-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </HeadingRow>
                        {all.Storage.FeatureIncluded.map(feature => (
                            <div>
                                <ContentRow
                                    key={feature.text}
                                    text={feature.name}
                                    tierFree={feature.tierFree}
                                    tierPro={feature.tierPro}
                                    tierEnterprise={feature.tierEnterprise}
                                    tierFreeValue={feature.tierFreeValue}
                                    tierProValue={feature.tierProValue}
                                    tierEnterpriseValue={feature.tierEnterpriseValue}
                                />
                            </div>
                        ))}

                        {/* <ContentRow text={"Storage"} tierFreeValue={"1 GB"} tierProValue={"100 GB, then $0.021 per GB"} tierEnterpriseValue={"Unlimited"} />
                        <ContentRow text={"Storage egress"} tierFreeValue={"2 GB"} tierProValue={"200 GB, then $0.09 per GB"} tierEnterpriseValue={"Unlimited"} />
                        <ContentRow text={"Custom access controls"} tierFree={true} tierPro={true} tierEnterprise={true} />
                        <ContentRow text={"Max file upload size"} tierFreeValue={"50MB"} tierProValue={"5GB"} tierEnterpriseValue={"Unlimited"} />
                        <ContentRow text={"Asset transformations"} tierFree={false} tierProValue={"100 origin images, then $5 per 1000 origin images"} tierEnterprise={true} /> */}

                        <div className="h-16"></div>


                        <HeadingRow name={all.Realtime.name}>
                            <svg className="h-5 w-5 stroke-white dark:stroke-black dark:stroke-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </HeadingRow>
                        {all.Realtime.FeatureIncluded.map(feature => (
                            <div>
                                <ContentRow
                                    key={feature.text}
                                    text={feature.name}
                                    tierFree={feature.tierFree}
                                    tierPro={feature.tierPro}
                                    tierEnterprise={feature.tierEnterprise}
                                    tierFreeValue={feature.tierFreeValue}
                                    tierProValue={feature.tierProValue}
                                    tierEnterpriseValue={feature.tierEnterpriseValue}
                                />
                            </div>
                        ))}

                        {/* <ContentRow text={"Postgres Changes"} tierFree={true} tierPro={true} tierEnterprise={true} />
                        <ContentRow text={"Concurrent Peak Connections"} tierFreeValue={"200"} tierProValue={"500, then $10 per 1000"} tierEnterpriseValue={"Unlimited concurrent connections and volume discount"} />
                        <ContentRow text={"Messages Per Month"} tierFreeValue={"2 Million"} tierProValue={"5 Million, then $2.50 per Million"} tierEnterpriseValue={"Volume discounts on messages"} />
                        <ContentRow text={"Max Message Size"} tierFreeValue={"250 KB"} tierProValue={"3 MB"} tierEnterpriseValue={"Custom"} /> */}

                        <div className="h-16"></div>

                        <HeadingRow name={all.EdgeFunctions.name}>
                            <svg className="h-5 w-5 stroke-white dark:stroke-black dark:stroke-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        </HeadingRow>
                        {all.EdgeFunctions.FeatureIncluded.map(feature => (
                            <div>
                                <ContentRow
                                    key={feature.text}
                                    text={feature.name}
                                    tierFree={feature.tierFree}
                                    tierPro={feature.tierPro}
                                    tierEnterprise={feature.tierEnterprise}
                                    tierFreeValue={feature.tierFreeValue}
                                    tierProValue={feature.tierProValue}
                                    tierEnterpriseValue={feature.tierEnterpriseValue}
                                />
                            </div>
                        ))}

                        {/* <ContentRow text={"Invocations"} tierFreeValue={"500K/month"} tierProValue={"2 Million, then $2 per 1 Million"} tierEnterpriseValue={"Unlimited"} />
                        <ContentRow text={"Script size"} tierFreeValue={"2 MB"} tierProValue={"10 MB"} tierEnterpriseValue={"Unlimited"} />
                        <ContentRow text={"Number of functions"} tierFreeValue={"10"} tierProValue={"100, then $10 per additional 100"} tierEnterpriseValue={"Unlimited"} /> */}

                        <div className="h-16"></div>

                        <HeadingRow name={all.Dashboard.name}>
                            <svg className="h-5 w-5 stroke-white dark:stroke-black dark:stroke-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </HeadingRow>     
                        {all.Dashboard.FeatureIncluded.map(feature => (
                            <div>
                                <ContentRow
                                    key={feature.text}
                                    text={feature.name}
                                    tierFree={feature.tierFree}
                                    tierPro={feature.tierPro}
                                    tierEnterprise={feature.tierEnterprise}
                                    tierFreeValue={feature.tierFreeValue}
                                    tierProValue={feature.tierProValue}
                                    tierEnterpriseValue={feature.tierEnterpriseValue}
                                />
                            </div>
                        ))}


                        {/* <ContentRow text={"Team members"}  tierFreeValue={"Unlimited"} tierProValue={"Unlimited"} tierEnterpriseValue={"Unlimited"} />
                        <ContentRow text={"Access controls"} tierFreeValue={"Coming soon"} tierProValue={"Coming soon"} tierFree={false} tierPro={false} tierEnterprise={true} />
                        <ContentRow text={"Audit trails"} tierFree={false} tierPro={false} tierEnterprise={true}  /> */}

                        <div className="h-16"></div>

                        <HeadingRow name={all.PlatformSecurityandCompliance.name}>
                            <svg className="h-5 w-5 stroke-white dark:stroke-black dark:stroke-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path></svg>
                        </HeadingRow>
                        {all.PlatformSecurityandCompliance.FeatureIncluded.map(feature => (
                            <div>
                                <ContentRow
                                    key={feature.text}
                                    text={feature.name}
                                    tierFree={feature.tierFree}
                                    tierPro={feature.tierPro}
                                    tierEnterprise={feature.tierEnterprise}
                                    tierFreeValue={feature.tierFreeValue}
                                    tierProValue={feature.tierProValue}
                                    tierEnterpriseValue={feature.tierEnterpriseValue}
                                />
                            </div>
                        ))}

                        {/* <ContentRow text={"On Premises / BYO cloud"} tierFree={false} tierPro={false} tierEnterprise={true} />
                        <ContentRow text={"Log retention (API & Database)"} tierFreeValue={"1 day"} tierProValue={"7 days"} tierEnterpriseValue={"90 days"} />
                        <ContentRow text={"Log drain"} tierFree={false} tierPro={false} tierEnterprise={false} />
                        <ContentRow text={"Metrics endpoint"} tierFree={false} tierPro={true} tierEnterprise={true} />
                        <ContentRow text={"SOC2"} tierFree={false} tierPro={false} tierEnterprise={true} />
                        <ContentRow text={"SSO"} tierFree={false} tierPro={false} tierEnterprise={false} />
                        <ContentRow text={"Access Roles"} tierFreeValue={"Owner, Developer"} tierProValue={"Owner, Developer"} tierEnterpriseValue={"Additional owner(s), admin, read-only, billing admin, custom"} />
                        <ContentRow text={"Vanity URLs"} tierFree={false} tierPro={true} tierEnterprise={true} />
                        <ContentRow text={"Custom Domains"} tierFree={false} tierProValue={"$10 per domain per month per project add on"} tierEnterpriseValue={"Info 1, additional $10/domain/month"} /> */}

                        <div className="h-16"></div>

                        <HeadingRow name={all.Support.name}>
                            <svg className="h-5 w-5 stroke-white dark:stroke-black dark:stroke-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        </HeadingRow>
                        {all.Support.FeatureIncluded.map(feature => (
                            <div>
                                <ContentRow
                                    key={feature.text}
                                    text={feature.name}
                                    tierFree={feature.tierFree}
                                    tierPro={feature.tierPro}
                                    tierEnterprise={feature.tierEnterprise}
                                    tierFreeValue={feature.tierFreeValue}
                                    tierProValue={feature.tierProValue}
                                    tierEnterpriseValue={feature.tierEnterpriseValue}
                                />
                            </div>
                        ))}

                        {/* <ContentRow text={"Community support"} tierFree={true} tierPro={true} tierEnterprise={true} />
                        <ContentRow text={"Email support"} tierFree={false} tierPro={true} tierEnterprise={true} />
                        <ContentRow text={"Email support SLA"} tierFree={false} tierPro={false} tierEnterprise={true} />
                        <ContentRow text={"Designated support"} tierFree={false} tierPro={false} tierEnterprise={true} />
                        <ContentRow text={"On Boarding Support"} tierFree={false} tierPro={false} tierEnterprise={true} />
                        <ContentRow text={"Designated customer success engineer"} tierFree={false} tierPro={false} tierEnterprise={true} />
                        <ContentRow text={"Security Questionnaire Help"} tierFree={false} tierPro={false} tierEnterprise={false} /> */}

                        <div className="h-16 border-t border-neutral-700"></div>
                        <div className="border-0 border-solid border-t border-neutral-700">
                            <div className="px-6 py-5 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-x-2">
                                <span className="sr-only w-1/3">Choose your plan</span>
                                <a className="w-1/3" href="#"></a>
                                <a className="w-1/4" href={freeMonthlyLink}>
                                    <button className="border border-solid border-emerald-400 relative cursor-pointer inline-flex items-center space-x-4 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 bg-emerald-600 hover:bg-emerald-500 text-white  shadow-brand-fixed-1000 hover:shadow-brand-fixed-900 dark:shadow-brand-fixed-1000 dark:hover:shadow-brand-fixed-1000 focus-visible:outline-brand-600 w-52 flex items-center justify-center shadow-sm text-xs px-2.5 py-1">
                                        <span className="truncate">Get started</span>
                                    </button>
                                </a>
                                <a className="w-1/4 pl-4" href={proMonthlyLink}>
                                    <button className="relative cursor-pointer inline-flex items-center space-x-4 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 bg-emerald-600 hover:bg-emerald-500 text-white border border-solid border-emerald-400 shadow-brand-fixed-1000 hover:shadow-brand-fixed-900 dark:shadow-brand-fixed-1000 dark:hover:shadow-brand-fixed-1000 focus-visible:outline-brand-600 w-52 flex items-center justify-center shadow-sm text-xs px-2.5 py-1">
                                        <span className="truncate">Get started</span>
                                    </button>
                                </a>
                                <a className="w-1/4 pl-6" href={enterpriseMonthlyLink}>
                                    <button className="relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 bg-emerald-600 hover:bg-emerald-500 text-white border border-solid border-emerald-400 shadow-brand-fixed-1000 hover:shadow-brand-fixed-900 dark:shadow-brand-fixed-1000 dark:hover:shadow-brand-fixed-1000 focus-visible:outline-brand-600 w-52 flex items-center justify-center shadow-sm text-xs px-2.5 py-1">
                                        <span className="truncate">Contact us</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                

            </div>
        </div>
    );
};

export default ComparePlans;
