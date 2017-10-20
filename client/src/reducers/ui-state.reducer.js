import {
  DATA_LOADING,
  SET_VIDEOS_NEXT_PAGE,
  UPDATE_VIDEOS_NUM_LOADED_PAGES
} from '../actions/types';

const uiState = (state = {}, action) => {
  switch(action.type){
    case DATA_LOADING:
      return { ...state, isDataLoading: action.isDataLoading };
    case SET_VIDEOS_NEXT_PAGE:
      return { ...state, videosNextPageToken: action.nextPageToken };
    case UPDATE_VIDEOS_NUM_LOADED_PAGES:
      let { videoPagesLimit } = state;
      videoPagesLimit += action.change;
      if ( videoPagesLimit < 0 ) {
        videoPagesLimit = 0;
      }
      return { ...state,  videoPagesLimit };
    default:
      return {...state};
  }
}

export default uiState;
