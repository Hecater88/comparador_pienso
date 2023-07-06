import { FunctionComponent } from "react";

const SectionWrapper = (Component: FunctionComponent, idName: string) =>
	function HOC() {
		return (
			<section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 p-4">
				<span className="hash-span" id={idName}>
					&nbsp;
				</span>
				<Component />
			</section>
		);
	};

export default SectionWrapper;
