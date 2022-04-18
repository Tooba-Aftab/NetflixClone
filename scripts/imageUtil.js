const getImageUrl = (poster_path) => {
  return `${config.image_base_url}${poster_path}`;
};

// The idea to use it?
// let say movieObject is a movie data which has key poster_path which is a relative path of image
// but we need the whole path of the image, we can get that by appending image_base_url given by api

// Now lets assume poster_path is "/w1280/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg"
// After using below function
// getImageUrl(movieObject.poster_path)
// Will return something like https://image.tmdb.org/t/p/w1280/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg