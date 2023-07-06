import { CardProps } from "@types";
const Card = ({ name, brand, img_url }: CardProps) => {
	return (
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<a href="#">
				<img
					className="p-8 rounded-t-lg max-w-[60%] m-auto"
					src={img_url}
					alt="product image"
				/>
			</a>
			<div className="px-5 pb-5">
				<a href="#">
					<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
						{brand}
					</h5>
				</a>

				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">
						{name}
					</span>
					<a
						href="#"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Comparar
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
