const initialState = {
  movies: [],
};
const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'sdssd':
      return payload.data;
    default:
      return state;
  }
};

export default moviesReducer;
