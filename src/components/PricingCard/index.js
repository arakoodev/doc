import React from "react";
import GetStartedButton from "../GetStartedButton";
import PricingTable from "./pricingCard";
import PricingSpecial from "./PricingCardv2";

function PricingCard({ Free, Pro, Enterprise }) {
    return (
        <div className="mx-auto flex max-w-7xl flex-col pt-12">
            <div className="relative z-10 mx-auto -mt-4 w-full px-4 sm:px-6 lg:px-8 ">
                <div className="mx-auto max-w-md grid lg:max-w-6xl lg:grid-cols-3 gap-24 lg:gap-5">
                    <PricingTable name={Free.name} desc={Free.desc} starting={Free.starting} feature={Free.feature} Cta={Free.Cta} Link={Free.Link} />
                    <PricingSpecial name={Pro.name} desc={Pro.desc} starting={Pro.starting} feature={Pro.feature} Cta={Pro.Cta} Link={Pro.Link}/>
                    <PricingTable name={Enterprise.name} desc={Enterprise.desc} starting={Enterprise.starting} feature={Enterprise.feature} Cta={Enterprise.Cta} Link={Enterprise.Link} />
                </div>
            </div>
        </div>

    ); 
}

export default PricingCard;


