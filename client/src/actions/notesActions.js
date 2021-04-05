import axios from 'axios';
import { GET_NOTES_FAIL, GET_NOTES_REQUEST, GET_NOTES_SUCCESS } from '../constants/notesConstants';

export const notesAction = () => async (dispatch) => {
    try{
        dispatch({ type : GET_NOTES_REQUEST});

        const {data} = await axios.get('/api/notes');

        dispatch({
            type : GET_NOTES_SUCCESS,
            payload : data
        })
    }catch(error){
        dispatch({
            type : GET_NOTES_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}