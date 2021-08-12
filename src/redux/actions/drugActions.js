import { ActionTypes } from "../constants/action-types"

export const addDrug = (drug) => {
    return {
        type: ActionTypes.ADD_DRUG,
        payload: drug
    }
}
export const fetchDrug = (drug) => {
    return {
        type: ActionTypes.FETCH_DRUG,
        payload: drug
    }
}