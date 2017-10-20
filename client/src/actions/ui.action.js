export const DATA_LOADING = 'DATA_LOADING';
export const SET_VIDEOS_NEXT_PAGE = 'SET_VIDEOS_LIST_PAGE';
export const UPDATE_VIDEOS_NUM_LOADED_PAGES = 'UPDATE_VIDEOS_NUM_LOADED_PAGES';

export const dataLoading = (isDataLoading = false) => {
  return {
    type: DATA_LOADING,
    isDataLoading
  }
}

export const setVideosNextPageAction = (nextPageToken) => {
  return {
    type: SET_VIDEOS_NEXT_PAGE,
    nextPageToken
  }
}

export const updateVideosNumLoadedPages = (change) => {
  return {
    type: UPDATE_VIDEOS_NUM_LOADED_PAGES,
    change
  }
}
