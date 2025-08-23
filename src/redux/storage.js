// // redux/storage.js
// const isServer = typeof window === 'undefined';

// const storage = {
//   getItem: (key) => {
//     if (isServer) return null;
//     return localStorage.getItem(key);
//   },
//   setItem: (key, value) => {
//     if (isServer) return;
//     localStorage.setItem(key, value);
//   },
//   removeItem: (key) => {
//     if (isServer) return;
//     localStorage.removeItem(key);
//   },
// };

// export default storage;
// storage.js

// import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// const createNoopStorage = () => {
//   return {
//     getItem(_key) {
//       return Promise.resolve(null);
//     },
//     setItem(_key, value) {
//       return Promise.resolve(value);
//     },
//     removeItem(_key) {
//       return Promise.resolve();
//     },
//   };
// };

// const storage =
//   typeof window !== "undefined"
//     ? createWebStorage("local") // client: use localStorage
//     : createNoopStorage();      // server: fake storage

// export default storage;

// Prevent SSR issues with localStorage
// import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// const createNoopStorage = () => {
//   return {
//     getItem(_key) {
//       return Promise.resolve(null);
//     },
//     setItem(_key, value) {
//       return Promise.resolve(value);
//     },
//     removeItem(_key) {
//       return Promise.resolve();
//     },
//   };
// };

// const storage =
//   typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

// export default storage;


// storage.js
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

// Use localStorage only in browser, noop storage in server
const storage =
  typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

export default storage;
