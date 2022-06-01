import { API_URL, APIKit } from "../utils";

class APIServices {
//   constructor() {}

  userLogin = (payload) => {
    return APIKit.post(API_URL.user_login, payload);
  };
}

export default APIServices;