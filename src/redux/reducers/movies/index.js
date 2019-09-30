const initialState = {
  movies: [],
};
const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'sdssd':
      return [{ m: 'sdds', n: 'sdcds' }];
    default:
      return state;
  }
};

export default moviesReducer;
