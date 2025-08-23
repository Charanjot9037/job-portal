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
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : {
        getItem: () => Promise.resolve(null),
        setItem: (_key, value) => Promise.resolve(value),
        removeItem: () => Promise.resolve(),
      };

export default storage;
