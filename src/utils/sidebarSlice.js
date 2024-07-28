import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name : 'sidebar',
    initialState : {
        isMenuOpen : true
    },
    reducers : {
        toggleSidebar : state => {
            state.isMenuOpen = !state.isMenuOpen 
        },
        collapseSidebar : state => {
            state.isMenuOpen = false;
        },
        openSidebar : state => {
            state.isMenuOpen = true;
        }
    }
});

export const {toggleSidebar,collapseSidebar,openSidebar} = sidebarSlice.actions;

export default sidebarSlice.reducer;