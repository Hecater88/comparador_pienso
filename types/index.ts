export interface CardProps {
	name: string;
	brand: string;
	img_url: string;
}

export interface Pienso {
	id: number;
	name: string;
	brand: string;
	img_url: string;
	analytic_comp: AnalyticComp[];
	ingredients: Ingredient[];
	additives: Additives[];
	dog_size: string;
	kibble_size: string;
}

export interface AnalyticComp {
	name: string;
	percentage: number;
}

export interface Ingredient {
	name: string;
	percentage: number;
}

export interface Additives {
	name: string;
	weight: string;
}
