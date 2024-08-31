
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import configReducer from "./configSlice"


const appStore  = configureStore(
    {
        reducer: {
          user: userReducer,
          movies : movieReducer,
          language : configReducer ,
      
       
        }
    }
);



export default appStore;