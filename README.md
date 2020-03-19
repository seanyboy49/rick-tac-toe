# Hi!

This is a little challenged I worked on over a weekend.

I used Create React App to bootstrap the app, Styled Components and a couple functions from my favorite Javascript functional library, Ramda.

I tried to write my logic in a way that was functional and scalable. The game logic should work on any NxN size board, and I made my components as modular and reusable as possible.

If you want to change the size of the board, simply change the size of the gameBoard matrix in the App state object, as well as update the number of rows and columns in the GameBoard styled.js file.

Of course, I could have made this dynamic from a dropdown of sorts, but felt like this might be a good follow up exercise.

I left a couple inline comments for the game logic, which primarily takes place in the App component, which is the only class based component and my source of truth for global state.

# Get it Running

Please run `npm run install` and then `npm run start`
