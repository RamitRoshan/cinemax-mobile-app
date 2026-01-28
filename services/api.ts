export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    //this comes from environment variable
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    },
};


export const fetchMovies = async ({query}: {query: string}) => {
    //ifquery and if not query we will use different endpoints
    const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent (query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch (endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers, 
    });

    //if response is not ok, throw an error
    if(!response.ok){
        //@ts-ignore
        throw new Error ('Failed to fetch movies', response.statusText);

    }
    //if everything is ok, return the json response
    const data = await response.json();

    return data.results;
};

// export const fetchMovieDetails = async (
//     movieId: string
// ): Promise<MovieDetails> => {
//     try{
//         const response = await fetch (
//             `${TMDB_CONFIG.BASE_URL}/movie/${movieId}`,
//         )
//     }
// }




// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjY5NDMxMzA3ZjViNjQzNmVjODM2NmM4ZDZlNTdiMCIsIm5iZiI6MTc2OTYxMDkzOS4xMDksInN1YiI6IjY5N2ExZWJiZTdlYWJjOGUxNTJiMWUzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gN43fJUPse0Cnh93pr9gKEpa8FX6oIJY0aq-eyY6zMc'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));