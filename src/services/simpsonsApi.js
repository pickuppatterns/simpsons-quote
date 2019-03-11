export const getQuotes = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      return res.json() 
        .then(res => {
          return {
            quote: res[0].quote,
            characterName: res[0].character,
            characterImg: res[0].image
          };
        });
    });
};
