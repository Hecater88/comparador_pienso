import PiensoWall from "@components/PiensosWall";

const Home = () => {
	return (
		<section className="w-full flex-center flex-col">
			<h1 className="head_text text-center">
				Compara
				<br className="max-md:hidden" />
				<span>pienso</span>
			</h1>
			<p className="desc text-center m-auto">
				Utiliza este comparador para elegir el pienso adecuado para tu mascota
			</p>
			<PiensoWall />
		</section>
	);
};

export default Home;
