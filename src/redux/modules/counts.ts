const initialState = {};

export const types = {
  START_FETCH_GENRES: "CONTENTS/START_FETCH_GENRES",
  SUCCESS_FETCH_GENRES: "CONTENTS/START_FETCH_GENRES",
  FAIL_FETCH_GENRES: "CONTENTS/FAIL_FETCH_GENRES",
};

export const actions = {
  startFetchGenres: () => ({
    type: types.START_FETCH_GENRES,
  }),
  successFetchGenres: (data: any) => ({
    type: types.SUCCESS_FETCH_GENRES,
    payload: data,
  }),
  failFetchGenres: (err: any) => ({
    type: types.FAIL_FETCH_GENRES,
    payload: err,
  }),
};

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "START_FETCH_GENRES":
      return _fetchStartGenres(state);
    case types.SUCCESS_FETCH_GENRES:
      return _successFetchGenres(state, action);
    case types.FAIL_FETCH_GENRES:
      return _failFetchGenres(state, action);
    default:
      return state;
  }
};

const _fetchStartGenres = (state: any) => ({
  ...state,
});

const _successFetchGenres = (state: any, action: any) => ({
  ...state,
  isLoading: false,
  isLoaded: true,
  data: action.payload,
});

const _failFetchGenres = (state: any, action: any) => ({
  ...state,
  isLoading: false,
  isLoaded: true,
  err: action.payload,
});

export default reducer;
