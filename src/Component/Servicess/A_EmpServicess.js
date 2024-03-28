import axios from 'axios';

const REST_API_URL='http://localhost:8080/api';


export const listEmp=()=>axios.get(REST_API_URL+'/'+'getall');

export const getUser=(userId)=>axios.get(REST_API_URL+'/getall/'+ userId);

export const updateUser=(userId,employee)=> axios.put(REST_API_URL+'/update/'+userId,employee)