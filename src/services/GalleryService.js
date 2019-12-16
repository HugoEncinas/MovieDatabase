export default class MovieService {
  static getMovies(searchTerm) {
    const apiKey = 'f12ba140';
    const title = searchTerm;
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`;
    return fetch(url)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch((err) => {
      return [];
    });
  }
}