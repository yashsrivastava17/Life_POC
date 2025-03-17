// This utility module centralizes API calls to the backend.
// Classes and Objects Reference: See CLASSES_AND_OBJECTS.md for how it interfaces with the Python and Node.js backends.

/*
--
[Write a JavaScript module that exports functions to call backend endpoints (using Axios or fetch). Include error handling and inline comments.]
--
<details>
<summary>Explanation</summary>
api.js provides functions to post audio files and fetch insights from the server.
If you want to use sockets instead of HTTP, you'll need to import a socket library (e.g., socket.io-client) and set up event listeners and emitters. In that case, functions in this module will wrap socket.emit and socket.on calls instead of Axios/fetch requests.
</details>
*/

// ----- Option 1: Using HTTP API Calls (Axios) -----
// import axios from 'axios';

// const API_BASE_URL = 'https://your-backend-url.com';

// export const uploadAudio = async (audioFile) => {
//   try {
//     const formData = new FormData();
//     formData.append('audio', audioFile);
//     const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error uploading audio:', error);
//     throw error;
//   }
// };

// export const fetchInsights = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/insights`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching insights:', error);
//     throw error;
//   }
// };

// ----- Option 2: Using WebSockets (socket.io-client) -----
// If you want to use sockets instead, uncomment the code below and ensure your backend supports socket.io.

// api.js:
// Contains your API calls to the backend (HTTP or WebSockets).

import axios from "axios";
import { io } from "socket.io-client";

const API_BASE_URL = "https://your-backend-url.com"; // Update this

export const socket = io(API_BASE_URL, {
  transports: ["websocket"],
  reconnectionAttempts: 3,
});

export const fetchInsights = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/insights`);
    return response.data;
  } catch (error) {
    console.error("Error fetching insights:", error);
    throw error;
  }
};

export const getNodes = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/nodes`);
    return res.data;
  } catch (error) {
    console.error("Error fetching nodes:", error);
    throw error;
  }
};

export const createNode = async (nodeData) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/nodes`, nodeData);
    return res.data;
  } catch (error) {
    console.error("Error creating node:", error);
    throw error;
  }
};

export const updateNode = async (nodeId, updatedData) => {
  try {
    const res = await axios.put(`${API_BASE_URL}/nodes/${nodeId}`, updatedData);
    return res.data;
  } catch (error) {
    console.error("Error updating node:", error);
    throw error;
  }
};

export const deleteNode = async (nodeId) => {
  try {
    await axios.delete(`${API_BASE_URL}/nodes/${nodeId}`);
  } catch (error) {
    console.error("Error deleting node:", error);
    throw error;
  }
};
// Remember: If you switch to sockets, you'll need to update your backend to handle socket events,
// and change any code in your frontend that depends on API calls accordingly.