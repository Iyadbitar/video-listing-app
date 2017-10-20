import HttpService from '../services/http.service';
const httpService = new HttpService();

export const LOAD_VIDEOS_LIST = 'LOAD_VIDEOS_LIST'
export const SET_VIDEOS_LIST = 'SET_VIDEOS_LIST';
// export const UPDATE_WIDGET = 'UPDATE_WIDGET';
// export const DELETE_WIDGET = 'DELET_WIDGET';


export function loadVideosListAction(search) {
  return {
    type: LOAD_VIDEOS_LIST,
    promiseFactory: (dispatch, getState) => {
      const { configuration } = getState();
      const query = {
        key: configuration.googleApiKey,
        part: 'snippet',
        maxResults: configuration.pageSize,
        q: search
      }
      return () => httpService.get(configuration.videoSearchUrl, query)
      .then(
        data => {
          dispatch(setVideosListAction(data.items, data.pageInfo))
        }
      )
    }
  }
}

export function setVideosListAction(videosList) {
  return {
    type: SET_VIDEOS_LIST,
    videos: videosList
  }
}
