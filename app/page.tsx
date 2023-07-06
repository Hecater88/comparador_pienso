"use client";
import { useState, useEffect } from "react";

const Home = () => {
	const [piensos, setPiensos] = useState([]);

	useEffect(() => {
		const fetchPeinsos = async () => {
			const response = await fetch("/api/pienso");
			const data = await response.json();
			setPiensos(data);
		};
		fetchPeinsos();
	}, []);

	return <div>{JSON.stringify(piensos)}</div>;
};

export default Home;
