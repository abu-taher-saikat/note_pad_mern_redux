import axios from 'axios';
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from '../constants/userConstants';


export const login = (email, password) => async (dispatch) => {
    try{
        dispatch({
            type : USER_LOGIN_REQUEST,
        })

        const config = {
            headers : {
                'Content-type' : 'application/json',
            }
        }

        const {data} =  await axios.post('/api/v1/auth/login', {email, password}, config)
        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload : data
        })

        localStorage.setItem('userInfo', JSON.stringify(data));
    }catch(error){
        dispatch({
            type : USER_LOGIN_FAIL,
            // payload : error.response && error.response.data.message 
            //     ? error.response.data.message : error.message
            payload : error.response.data.error
        })
    }
}



export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type : USER_REGISTER_REQUEST
        })


        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const {data} = await axios.post('/api/v1/auth/register', {name, email , password}, config);
        // console.log(data);

        dispatch({
            type : USER_REGISTER_SUCCESS,
            payload : data
        })

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type : USER_REGISTER_FAIL,
            // payload : error.response && error.response.data.message ? error.response.data.message : error.message
            payload : error.response.data.error
        })
    }
}