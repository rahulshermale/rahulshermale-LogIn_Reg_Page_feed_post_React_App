
const Rest_API_BASE_URL='http://localhost:8080/api';

export const listEmp= async ()=> await fetch(Rest_API_BASE_URL+'/'+'getall')

export const getUser= async (empId)=> await fetch(Rest_API_BASE_URL+'/'+'getall/'+empId,{
    method: 'GET',
    mode: 'no-cors'
  })