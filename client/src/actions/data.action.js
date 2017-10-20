import HttpService from '../services/http.service';
import { setVideosNextPageAction, updateVideosNumLoadedPages } from './ui.action';

const httpService = new HttpService();

export const LOAD_VIDEOS_LIST = 'LOAD_VIDEOS_LIST'
export const SET_VIDEOS_LIST = 'SET_VIDEOS_LIST';


export function loadVideosListAction(search) {
  return {
    type: LOAD_VIDEOS_LIST,
    promiseFactory: (dispatch, getState) => {
      const { configuration, uiState } = getState();
      let query = {
        key: configuration.googleApiKey,
        part: 'snippet',
        maxResults: configuration.pageSize,
        type: 'video',
        q: search
      }
      if (uiState.videosNextPageToken) {
        query['pageToken'] = uiState.videosNextPageToken
      }
      return () => httpService.get(configuration.videoSearchUrl, query)
      .then(
        data => {
          dispatch(setVideosListAction(data.items, data.pageInfo));
          dispatch(setVideosNextPageAction(data.nextPageToken));
          dispatch(updateVideosNumLoadedPages(-1));
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
