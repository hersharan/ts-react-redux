import axios from 'axios';

export function submitLogin(email, password) {
  return ((dispatch) => {
    dispatch({ type: "USER_LOGIN" });
    // axios.get('https://jsonplaceholder.typicode.com/users')
    axios.post('https://jsonplaceholder.typicode.com/users', { email, password })
      .then((response) => {
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data })
      })
      .catch((error) => {
        dispatch({ type: "USER_LOGIN_FAILURE", payload: error.response })
      });
  // if (email === "a@gmail.com" && password === "b") {
  //   localStorage.setItem("token", "sdfsdfsdfsdfsfssduowueruower");
  //   dispatch({ type: "USER_LOGIN_SUCCESS", payload: {} });
  // }else{
  //   dispatch({ type: "USER_LOGIN_FAILURE", payload: {} })
  // }
  });
}
