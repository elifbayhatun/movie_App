export const getTrendingState =
  () =>
  ({movie: {trending}}) =>
    trending;

export const getUpcomingState =
  () =>
  ({movie: {upComing}}) =>
    upComing;

export const getnowplaying =
  () =>
  ({movie: {nowPlaying}}) =>
    nowPlaying;

export const getmoviedetail =
  () =>
  ({movie: {movieDetail}}) =>
    movieDetail;

export const getmoviecredits =
  () =>
  ({movie: {movieCredits}}) =>
    movieCredits;
export const getpersondetail =
  () =>
  ({movie: {personDetail}}) =>
    personDetail;
export const getpersonmoviecredits =
  () =>
  ({movie: {personMovieCredits}}) =>
    personMovieCredits;
export const getsearchresults =
  () =>
  ({movie: {searchResults}}) =>
    searchResults;
