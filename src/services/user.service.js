import axios from "axios";

export const login = async (credentials) => {
  return {
    id: "1",
    username: "testuser",
  };
  // return await axios
  //   .post(`${process.env.REACT_APP_API_URL}/auth/login`, credentials)
  //   .then((response) => response.data);
};

export const getProfile = async () => {
  // const session = await window.localStorage.getItem("session");
  return {
    id: "1",
    username: "testuser",
  };
};

export const pay = async (data) => {
  // example data
  // const data = {
  //   userId: "1",
  //   ringtones: ["1", "2", "3"],
  // };
  // const {id} = await window.localStorage.getItem("session");

  // return await axios
  //   .post(`${process.env.REACT_APP_API_URL}/user/ringtones`, data)
  //   .then((response) => response.data);

  return [
    {
      id: "1",
      title: "Şarkı 1",
      fileName: "sarkı-1",
      price: 12.3,
      duration: 2.3,
      isCopyright: true,
    },
    {
      id: "2",
      title: "Şarkı 2",
      fileName: "sarkı-1",
      price: 10.3,
      duration: 1.3,
      isCopyright: false,
    },
    {
      id: "3",
      name: "Şarkı 3",
      fileName: "sarkı-1",
      price: 9.3,
      duration: 3.3,
      isCopyright: true,
    },
  ];
};

export const getUserRingtones = async () => {
  // const session = await window.localStorage.getItem("session");
  // const { id } = JSON.parse(session);
  // return await axios
  //   .get(`${process.env.REACT_APP_API_URL}/user/ringtones?userId=${userId}`)
  //   .then((response) => response.data);

  return [
    {
      id: "1",
      name: "Şarkı 1",
      fileName: "sarkı-1",
      price: 12.3,
      duration: 2.3,
      isCopyright: true,
    },
    {
      id: "2",
      name: "Şarkı 2",
      fileName: "sarkı-1",
      price: 10.3,
      duration: 1.3,
      isCopyright: false,
    },
    {
      id: "3",
      name: "Şarkı 3",
      fileName: "sarkı-1",
      price: 9.3,
      duration: 3.3,
      isCopyright: true,
    },
  ];
};

export const getAllRingtones = async () => {
  // return await axios
  //   .get(`${process.env.REACT_APP_API_URL}/ringtones`)
  //   .then((response) => response.data);

  return [
    {
      id: "1",
      title: "Şarkı 1",
      fileName: "sarkı-1",
      price: 12.3,
      duration: 2.3,
      isCopyright: true,
    },
    {
      id: "2",
      title: "Şarkı 2",
      fileName: "sarkı-1",
      price: 10.3,
      duration: 1.3,
      isCopyright: false,
    },
    {
      id: "3",
      title: "Şarkı 3",
      fileName: "sarkı-1",
      price: 9.3,
      duration: 3.3,
      isCopyright: true,
    },
    {
      id: "4",
      title: "Şarkı 4",
      fileName: "sarkı-1",
      price: 9.3,
      duration: 3.3,
      isCopyright: true,
    },
    {
      id: "5",
      title: "Şarkı 5",
      fileName: "sarkı-1",
      price: 9.3,
      duration: 3.3,
      isCopyright: true,
    },
  ];
};
