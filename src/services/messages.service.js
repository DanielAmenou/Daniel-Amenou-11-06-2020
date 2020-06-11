/* eslint-disable no-unused-vars */
import axios from "axios";

const TIMEOUT = 5000;
const serverUrl = process.env.REACT_APP_MESSAGES_SERVER_URL;

const send = async (data) => {
  return axios
    .post(serverUrl, data, {
      timeout: TIMEOUT,
    })
    .then((result) => result.data);
};

const get = async (userId) => {
  return axios
    .get(`${serverUrl}${userId}`, {
      timeout: TIMEOUT,
    })
    .then((result) => result.data);
};

const deleteMessage = async (messageId) => {
  return axios
    .delete(`${serverUrl}${messageId}`, {
      timeout: TIMEOUT,
    })
    .then((result) => result.data);
};

export default {
  send,
  get,
  deleteMessage,
};
