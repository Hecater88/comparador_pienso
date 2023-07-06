import { NextApiRequest } from "next";
import { piensos } from "@models/piensos";

export const GET = async (request: NextApiRequest) => {
	return new Response(JSON.stringify(piensos));
};
