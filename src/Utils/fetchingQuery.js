export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function fetchingQuery(query) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/${query}?api_key=${API_KEY}`;

  return API_URL;
}
