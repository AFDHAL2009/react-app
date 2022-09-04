import { createSlice } from '@reduxjs/toolkit'
import { api ,api1} from '../api/index';
// Slice
const slice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        isSuccess:false,
        isFailed:false,
        users:[],
        isLoadingLogin:false,
        isSuccessLogin:false,
        isFailedLogin:false,
        login:{}
    },
    reducers: {

        usersBegin: (state, action) => {
            state.isLoading = true;
            state.isSuccess=false;
            state.isFailed=false;
            state.users =[];
        },
        usersSuccess: (state, action) => {
            state.isLoading = false;
            state.isSuccess=true;
            state.isFailed=false;
            state.users = action.payload;
        },
        usersFailed: (state, action) => {
            state.isLoading = false;
            state.isSuccess=false;
            state.isFailed=true;
            state.users =[];
        },
       loginBegin: (state, action) => {
            state.isLoadingLogin=true;
            state.isSuccessLogin=false;
            state.isFailedLogin=false;
            state.login={};
        },
       loginSuccess: (state, action) => {
            state.isLoadingLogin=false;
            state.isSuccessLogin=true;
            state.isFailedLogin=false;
            state.login=action.payload;
        },
        loginFailed: (state, action) => {
            state.isLoadingLogin=false;
            state.isSuccessLogin=false;
            state.isFailedLogin=true;
            state.login={};
        },
        logout1: (state, action) => {
            state.isLoadingLogin=false;
            state.isSuccessLogin=false;
            state.isFailedLogin=false;
            state.login={};
        }
       
    },
   
});

export default slice.reducer
// Actions
const {usersBegin, usersSuccess, usersFailed,logout1 } = slice.actions
export const fetchUsers = () => async dispatch => {
    dispatch(usersBegin())
     try {
         await api.get('/users')
               .then((response) => {dispatch(usersSuccess(response.data));})
       }
       catch (e) {
           dispatch(usersFailed())
           return console.error(e.message);
       }
    }
//Action for login
const {loginBegin, loginSuccess, loginFailed } = slice.actions
export const login = ( email,password) => async dispatch => {
      // Headers
  const config = {
    headers: {
      'Content-Type' : 'application/json',
    }
  };
 let  body = JSON.stringify({email,password});

    dispatch(loginBegin())
     try {
         await api1.post('/login',body,config)
               .then((response) => {dispatch(loginSuccess(response.data));console.log("login response="+JSON.stringify(response))})
       }
       catch (e) {
           dispatch(loginFailed())
           return console.error(e.message);
       }
    }

    //Action for logout
export const logout = () => async dispatch => {
    dispatch(logout1()) 
    }




