

const initialState={
  isUserAuth:false,
  accountData: null
};


const auth = (state=initialState,action) => {
const {payload,type}=action ;
switch (type) {

case "CHANGE_USER_STATUS"  :{
  return {
    ...state,
    isUserAuth:payload,
  }
}


case "CHANGE_ACCOUNT_DATA"  :{
  return {
    ...state,
    accountData:payload,
  }
}

  default:
    return state;
}
}

export default auth;


