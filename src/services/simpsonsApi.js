export const getQuotes = num => {
  return fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${num}`)
    .then(res => res.json())
    .then(json => ({
      totalPages: json.info.page,
      results:json.results
    }));
};
