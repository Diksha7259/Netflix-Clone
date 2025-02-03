// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./createSlice.js";

// const store = configureStore({
//   reducer: {
//     app: userReducer
//   }
// });

// export default store;
// redux/storage.js
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer:{
        app:userReducer,
        movie:movieReducer,
        searchMovie:searchSlice
    }
});
export default store;