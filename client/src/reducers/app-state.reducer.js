import {
  LOAD_VIDEOS_LIST,
  SET_VIDEOS_LIST
} from '../actions/types';

const appState = (state = {}, action) => {

  switch(action.type){
    case LOAD_VIDEOS_LIST:
      return { ...state };
    case SET_VIDEOS_LIST:
      let { videos } = action;
      let videosList = state.videosList.concat(videos);
      return {...state, videosList};
    default:
      return { ...state} ;
  }
}

export default appState;
