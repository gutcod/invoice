import React, { useReducer } from "react";
import axios from "axios";
import authReducer from "./authReducer";
import { AUTH_SUCCES } from "../types";
import { authContext } from "./authContext";

export const authState = ({ children }) => {
  const initialState = {
    token: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const auth = async (email, password, isLogin) => {
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };
    //registration link
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBmdGvPs6VARcII7hOXigeh4Tfa4RDL_FA";

    if (isLogin) {
      //login link
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBmdGvPs6VARcII7hOXigeh4Tfa4RDL_FA";
    }
    const response = await axios.post(url, authData);
    const data = response.data;

    localStorage.setItem("token", data.idToken);

    const payload = {
      ...state,
      token: data.idToken,
    };

    dispatch({ type: AUTH_SUCCES, payload });
  };
  return (
    <authContext.Provider value={{ auth }}>{children}</authContext.Provider>
  );
};
// export function auth(email, password, isLogin) {
//   return async (dispatch) => {
//     const authData = {
//       email,
//       password,
//       returnSecureToken: true,
//     };
//     //registration link
//     let url =
//       "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBmdGvPs6VARcII7hOXigeh4Tfa4RDL_FA";

//     if (isLogin) {
//       //login link
//       url =
//         "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBmdGvPs6VARcII7hOXigeh4Tfa4RDL_FA";
//     }
//     const response = await axios.post(url, authData);
//     const data = response.data;

//     const expirationDate = new Date(
//       new Date().getTime() + data.expiresIn * 1000
//     );

//     localStorage.setItem("token", data.idToken);
//     localStorage.setItem("localId", data.localId);
//     localStorage.setItem("expirationDate", expirationDate);

//     dispatch(authSucces(data.idToken));
//     dispatch(autoLogout(data.expiresIn));
//   };
// }
