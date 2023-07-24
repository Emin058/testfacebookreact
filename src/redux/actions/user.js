import axios from "axios"
import {USER_AUTH_CHANGED} from "../types";
import {setAccountData} from "./auth";


export const loginUser =(params)=>async(dispatch)=>{
 const {data}=await axios.post( "https://dummyjson.com/auth/login",params);

 if(data){
  localStorage.setItem("token",data.token)

  dispatch(authUser(true ))

 }
}

export const getUser = () => async (dispatch) => {
    const {data}=await axios.get( 'https://fakestoreapi.com/users/1');

    if(data){
        dispatch(setAccountData(data))
    }
}

export const authUser = (payload) => {
  return {
      type: USER_AUTH_CHANGED,
      payload
  }
}

// import axios from "axios"
// import {USER_AUTH_CHANGED} from "../types";


// export const loginUser =(params)=>async(dispatch)=>{
//  const response=await axios.post( "https://dummyjson.com/auth/login",params);
//  if(response.data){
//   dispatch(setUser({isUserAuth:true,userData:response.data}))
//   localStorage.setItem("token",response.data.token)
//  }
 
// }

  

// export const setUser=(payload)=>{
//   return{
//     type:"CHANGE_USER",
//     payload
//   } 
// }

// export const authUser = (payload) => {
//   return {
//       type: USER_AUTH_CHANGED,
//       payload
//   }
// }
