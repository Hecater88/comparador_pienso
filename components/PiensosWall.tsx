"use client";
import Card from "@components/Card";
import { Pienso } from "@types";
import { useState, useEffect } from "react";
import SectionWrapper from "@hoc/SectionWrapper";

const PiensoWall = () => {
	const [piensos, setPiensos] = useState([]);

	useEffect(() => {
		const fetchPeinsos = async () => {
			const response = await fetch("/api/pienso");
			const data = await response.json();
			setPiensos(data);
		};
		fetchPeinsos();
	}, []);

	console.log(piensos);

	return (
		<div className="w-full m-auto">
			{piensos.length > 0 ? (
				<div className="flex flex-wrap justify-center items-center gap-5">
					{piensos.map((pienso: Pienso) => (
						<Card
							name={pienso.name}
							brand={pienso.brand}
							img_url={pienso.img_url}
						/>
					))}
				</div>
			) : (
				<div className="home__error-container">
					<h2 className="text-black text-xl font-bold">
						Opps, no hay resultados
					</h2>
				</div>
			)}
		</div>
	);
};
export default SectionWrapper(PiensoWall, "piensos");
