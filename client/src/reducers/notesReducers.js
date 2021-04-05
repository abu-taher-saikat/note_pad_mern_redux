import { GET_NOTES_FAIL, GET_NOTES_REQUEST, GET_NOTES_SUCCESS } from "../constants/notesConstants";

export const noteReducer = (state = {notes : []}, action) => {
    switch(action.type){
        case GET_NOTES_REQUEST : 
            return { loading : true, notes : []}
        case GET_NOTES_SUCCESS : 
            return {loading : false, notes : action.payload}
        case GET_NOTES_FAIL : 
            return {loading : false, error : action.payload}
        default : 
            return state
    }
}