import axios from "axios";
const URL = "http://localhost:5000";
export const fetchUsers = async (accessToken) => {
  const { data } = await axios.get(`${URL}/users`, {
    // headers: {
    //   x_authorization: accessToken
    // }
  });
  return data;
};
export const registerUser = async (username, email, password) => {
  try {
    const response = await axios
      .post(`${URL}/auth/register`, {
        username: username,
        password: password,
        email: email
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
export const loginUserWithGoogle = async (tokenId) => {
  const response = await axios
    .post(`${URL}/auth/google`, {
      token: tokenId
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

  //   .catch((error) => {
  //     if (error.response) {
  //       // The request was made and the server responded with a status code
  //       // that falls out of the range of 2xx
  //       const objectReturn = {
  //         data: error.response.data,
  //         status: error.response.status
  //       };
  //       return objectReturn;
  //     }
  //   });
  // const { data, status } = response;
  // const objectReturn = {
  //   data: data,
  //   status: status
  // };
  // return objectReturn;
};
export const createGroup = async (name) => {
  try {
    const response = await axios
      .post(`${URL}/group`, {
        name: name,
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
export const fetchGroup = async (params) => {
  const { data } = await axios.get(`${URL}/group`+params, {
    // headers: {
    //   x_authorization: accessToken
    // }
  });
  return data;
};
export const addGroupMember = async (email, id) => {
  try {
    const response = await axios
      .post(`${URL}/group/${id}`, {
        email: email,
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
export const fetchGroupMember = async (id) => {
  const { data } = await axios.get(`${URL}/group/member/${id}`, {
    // headers: {
    //   x_authorization: accessToken
    // }
  });
  return data;
};
export const fetchListUser = async () => {
  const { data } = await axios.get(`${URL}/users/list`, {
    // headers: {
    //   x_authorization: accessToken
    // }
  });
  return data;
};

export const toggleRole = async (newRole, id) => {
  try {
    const response = await axios
      .post(`${URL}/group/toggleRole/${id}`, {
        newRole: newRole,
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
export const exitsGroup = async (id) => {
  try {
    const response = await axios
      .get(`${URL}/group/escape/${id}`)
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
export const sendInvitationMail = async (email, id) => {
  try {
    const response = await axios
      .post(`${URL}/group/sendInvitation/${id}`,{
        email: email,
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
