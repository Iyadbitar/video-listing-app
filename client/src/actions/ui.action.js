export const SET_EDIT_WIDGET = 'SET_EDIT_WIDGET';
export const DATA_LOADING = 'DATA_LOADING';

export function setEditWidget(widgetId) {
  return {
    type: SET_EDIT_WIDGET,
    widgetId: widgetId
  }
}

export const dataLoading = (isDataLoading = false) => {
  return {
    type: DATA_LOADING,
    isDataLoading
  }
}
