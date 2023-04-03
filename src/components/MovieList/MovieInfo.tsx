export type MovieData = {
	title: string;
	directors: string;
	desc: string;
	score: number;
};

export const MovieInfo = [
	{
		title: 'Everything Everywhere All At Once',
		directors: 'Daniel Kwan, Daniel Scheinert',
		desc: 'A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.',
		score: 7.9
	},
	{
		title: 'The Banshees of Inisherin',
		directors: 'Martin McDonagh',
		desc: 'Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.',
		score: 7.7
	},
	{
		title: 'The Fabelmans',
		directors: 'Steven Spielberg',
		desc: 'Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.',
		score: 7.6
	},
	{
		title: 'Elvis',
		directors: 'Baz Luhrmann',
		desc: 'The life of American music icon Elvis Presley, from his childhood to becoming a rock and movie star in the 1950s while maintaining a complex relationship with his manager, Colonel Tom Parker.',
		score: 7.3
	}
] as MovieData[];

export default MovieInfo;
