import axios from "axios";
const URL = "http://localhost:5000";
export const fetchUsers = async (accessToken) => {
  const { data } = await axios.get(`${URL}/users`, {
    headers: {
      x_authorization: accessToken
    }
  });
  return data;
};
export const registerUser = async (username, password, role_id) => {
  try {
    console.log("username", username, password, role_id);
    const response = await axios
      .post(`${URL}/auth/register`, {
        username: username,
        password: password,
        role_id: role_id
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          const objectReturn = {
            data: error.response.data,
            status: error.response.status
          };
          return objectReturn;
        }
      });
    const { data, status } = response;
    const objectReturn = {
      data: data,
      status: status
    };
    return objectReturn;
  } catch (err) {
    console.log("err", err);
  }
};
export const loginUser = async (username, password) => {
  const response = await axios
    .post(`${URL}/auth/login`, {
      username,
      password
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const objectReturn = {
          data: error.response.data,
          status: error.response.status
        };
        return objectReturn;
      }
    });
  const { data, status } = response;
  const objectReturn = {
    data: data,
    status: status
  };
  return objectReturn;
};
