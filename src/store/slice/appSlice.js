import { createSlice } from '@reduxjs/toolkit'

const initialState = {modalOpen: false, editable: null, serachText: '', notification: null}
const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleMenu: (state, {payload}) => {
      state.modalOpen = payload !== undefined ? payload : !state.modalOpen;
    },
    setEdiatble: (state, {payload}) => {
      state.editable = payload
    },
    setSearchText: (state, {payload}) => {
      state.serachText = payload
    },
    setNotification: (state, {payload}) => {
      state.notification = payload
    }
  },
})

export const { toggleMenu, setEdiatble, setSearchText, setNotification } = slice.actions
export default slice.reducer