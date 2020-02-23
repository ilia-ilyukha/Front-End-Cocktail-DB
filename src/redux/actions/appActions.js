import { SAVE_COCTAILS_LIST } from '../constants';
import { SAVE_FILTERS_LIST } from '../constants';
import { REFRESH_FILTERS_LIST } from '../constants';
import { ADD_FILTER } from '../constants';
import { DELETE_FILTER } from '../constants';

export const saveCoctailsListAction = (list) => {
    return{
        type: SAVE_COCTAILS_LIST,
        payload: list
    }
}
export const saveFiltersListAction = (list) => {
    return{
        type: SAVE_FILTERS_LIST,
        payload: list
    }
}

export const addFilterAction = (id) => {
    return{
        type: ADD_FILTER,
        payload: {
            id: id
        }
    }
}

export const deleteFilterAction = (id) => {
    return{
        type: DELETE_FILTER,
        payload: id
    }
}
export const refreshCoctailsListAction = () => {
    return{
        type: REFRESH_FILTERS_LIST
    }
}

