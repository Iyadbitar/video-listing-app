import { DATA_LOADING, SET_EDIT_WIDGET } from '../actions/types';

const uiState = (state = {}, action) => {
  switch(action.type){
    case DATA_LOADING:
      return { ...state, isDataLoading: action.isDataLoading }
    case SET_EDIT_WIDGET:
      return { ...state, editedWidgetId: action.widgetId }
    default:
      return {...state};
  }
}

export default uiState;
