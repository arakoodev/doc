import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
	HeroSection,
	RootCauseSection,
	TrilemmaSection,
	RevenueFirstSection,
	SystemSection,
	SourceOfTruthSection,
	AccountingSection,
	FinalCtaSection,
} from "../components/home/sections";

export default function Home() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
			<div className='-mt-[64px] flex flex-col'>
				<HeroSection />
				<RootCauseSection />
				<TrilemmaSection />
				<RevenueFirstSection />
				<SystemSection />
				<SourceOfTruthSection />
				<AccountingSection />
				<FinalCtaSection />
			</div>
		</Layout>
	);
}
