import {GET_PEOPLE_LOADING,GET_PEOPLE_SUCCESS,GET_PEOPLE_FAIL} from './types';
import axios from 'axios'
// get people list
export const getPeople =()=> (dispatch)=>{
   dispatch({type:GET_PEOPLE_LOADING})
   axios
   .get('/user/getusers')
   .then((res)=> dispatch({type: GET_PEOPLE_SUCCESS,payload:res.data}))
   .catch((err)=> dispatch({type:GET_PEOPLE_FAIL,payload:err}))
};
// Add person
export const addPerson =(data)=> (dispatch)=>{
   dispatch({type:GET_PEOPLE_LOADING})
   axios
   .post('/user/register',data)
   .then((res)=> dispatch(getPeople()))
   .catch((err)=> dispatch({type:GET_PEOPLE_FAIL,payload:err}))
};

export const deletePerson =(id)=> (dispatch)=>{
   dispatch({type:GET_PEOPLE_LOADING})
   axios
   .delete(`/user/deleteuser/${id}`)
   .then((res)=> dispatch(getPeople()))
   .catch((err)=> dispatch({type:GET_PEOPLE_FAIL,payload:err}))
};

export const editPerson =(id,data)=> (dispatch)=>{ 
   axios
   .put(`/user/updateuser/${id}`,data)
   .then((res)=> dispatch(getPeople()))
   .catch((err)=> dispatch({type:GET_PEOPLE_FAIL,payload:err}))
};