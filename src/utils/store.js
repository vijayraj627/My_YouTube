import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import liveChatSlice from "./liveChatSlice";

const store = configureStore({
    reducer : {
        sidebar : sidebarSlice,
        liveChat : liveChatSlice
    }
});

export default store;