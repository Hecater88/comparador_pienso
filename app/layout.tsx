import { PropsWithChildren } from "react";
import "@styles/globals.css";

export const metadata = {
	title: "Comparador de Pienso",
	description: "Elige el pienso perfecto para tu mascota",
};

const RootLayout = ({ children }: PropsWithChildren<{}>) => {
	return (
		<html lang="es">
			<body>
				<main className="app">{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
