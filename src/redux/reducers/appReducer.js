import { SAVE_COCTAILS_LIST } from '../constants';
import { SAVE_FILTERS_LIST } from '../constants';
import { REFRESH_FILTERS_LIST } from '../constants';
import { ADD_FILTER } from '../constants';
import { DELETE_FILTER } from '../constants';

const initialState = {
    coctails: [],
    filters: [],
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILTER: 
            let newFilters = state.filters;
            newFilters[action.payload.id].checked = true;
            return {
                ...state,
                filters: newFilters,
            }
        case SAVE_COCTAILS_LIST:
            let newCoctails = [];
            newCoctails = state.coctails.concat(action.payload);
            return {
                ...state,
                coctails: newCoctails
            }
        case REFRESH_FILTERS_LIST:
            return {
                ...state,
                coctails: []
            }
        case SAVE_FILTERS_LIST:
            return {
                ...state,
                filters: action.payload
            }
        case DELETE_FILTER:
            state.filters[action.payload].checked = false;
            return {
                ...state,
                filters: state.filters,
            }
        default:
            return state;
    }
}