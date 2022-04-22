const BASE_URL = config.api_base_url;
const API_KEY = config.api_key;

async function getPopularMovies(page = 1) {
  const popularMovies = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(popularMovies);
  const data = response.json();
  return data;
  //console.log(popularMovies);
// HERE WE NEED TO USE API: "movie/popular"
// Refer the link below to get insight on how to use this API
// And also what response in return you get from that
// https://developers.themoviedb.org/3/movies/get-popular-movies
}

async function getTopRatedMovies(page = 1) {
  const topRatedMovies = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(topRatedMovies);
  const data = response.json();
  return data;
}

async function getUpcomingMovies(page = 1) {
  const upcomingMovies = `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(upcomingMovies);
  const data = response.json();
  return data;
}

async function getMovieDetail (movieId) {
  const url = `${BASE_URL}movie/{${movieId}}?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}

async function getMovies() {
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();
  return [
      {
        category: "Popular",
        movies: popularMovies.results.map((currentValue)=> ({
          id: currentValue.id,
          image: getImageUrl(currentValue.poster_path),
          title: currentValue.title,
          release_date: currentValue.release_date,
          overview: currentValue.overview,
        }))
      },
      {
        category: "Top Rated",
        movies: topRatedMovies.results.map((currentValue)=> ({
          id: currentValue.id,
          image: getImageUrl(currentValue.poster_path),
          title: currentValue.title,
          release_date: currentValue.release_date,
          overview: currentValue.overview,
        }))
      },
      
      {
        category: "Upcoming",
        movies: upcomingMovies.results.map((currentValue)=> ({
          id: currentValue.id,
          image: getImageUrl(currentValue.poster_path),
          title: currentValue.title,
          release_date: currentValue.release_date,
          overview: currentValue.overview,
        }))
      }
    ]
}