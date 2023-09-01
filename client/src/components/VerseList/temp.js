const [addGame, {error:errorAddingGame}] = useMutation(MUTATION_ADD_GAME,{
   // updating cache allows you to fix bugs where you have to refresh certain pages via browser
    // after the cache is updated via the method below, the website seamlessly integrates the new data
    // without performing additional queries
    // the variable name - addGame - should also match what you put in your mutation
    update(cache, { data: { addGame } }) {
        try {
          // find the related query that you want to update, 
          // for adding a game (MUTATION_ADD_GAME)
          // I would want to update the query that gets all games (QUERY_GAMES)
          // this will read data from the games cache and save it a variable called games (the variable name - games - should also match what you have in the QUERY_GAMES)
          const { games } = cache.readQuery({ query: QUERY_GAMES });
  
          // update the old query by inserting the new data
          cache.writeQuery({
            query: QUERY_GAMES,
            // i know how I want this sorted, I want all new data at the beginning, (addGame)
            // copy all old data to the end of the array (...games)
            // ... is called the spread operator (copy-and-paste operator)
            data: { games: [addGame, ...games] },
          });
  
        } catch (e) {
          console.error(e);
        }
      },