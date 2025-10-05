import React, {type ReactNode} from "react";
import type FooterType from "@theme/Footer";
import type {WrapperProps} from "@docusaurus/types";
import {Footer} from "@site/src/components/app/footer";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
	return (
		<>
			<Footer {...props} />
		</>
	);
}
