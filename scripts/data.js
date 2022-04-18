const Categories = ["Trending", "Now Playing", "Top Rated"];

const TrendingMovies = [
  {
    id: "trending-0",
    image:
      "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg",
  },
  {
    id: "trending-1",
    image:
      "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37788.jpg",
  },
  {
    id: "trending-2",
    image:
      "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37789.jpg",
  },
  {
    id: "trending-3",
    image:
      "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37780.jpg",
  },
  {
    id: "trending-4",
    image:
      "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg",
  },
];
const NowPlayingMovies = [
  {
    id: "nowplaying-0",
    image:
      "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg",
  },
  {
    id: "nowplaying-1",
    image:
      "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg",
  },
  {
    id: "nowplaying-2",
    image:
      "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg",
  },
  {
    id: "nowplaying-3",
    image:
      "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg",
  },
  {
    id: "nowplaying-4",
    image:
      "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg",
  },
];
const TopRatedMovies = [
  {
    id: "nowplaying-0",
    image:
      "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg",
  },
  {
    id: "nowplaying-1",
    image:
      "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg",
  },
  {
    id: "nowplaying-2",
    image:
      "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg",
  },
  {
    id: "nowplaying-3",
    image:
      "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg",
  },
  {
    id: "nowplaying-4",
    image:
      "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg",
  },
];

// Need to use only this array of objects
// to display category wise movies
const data = [
    {
        category: Categories[0],
        movies: TrendingMovies,
    },
    {
        category: Categories[1],
        movies: NowPlayingMovies,
    },
    {
        category: Categories[2],
        movies: TopRatedMovies,
    }
]