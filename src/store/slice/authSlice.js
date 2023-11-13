import { createSlice } from '@reduxjs/toolkit'

export const USER_DATA = "USER_DATA"
const getUserInfo = () => JSON.parse(localStorage.getItem(USER_DATA))
const initialState = {user: getUserInfo() || null}
const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem(USER_DATA);
      state.user = initialState;
    },
    setUser: (state, {payload}) => {
      localStorage.setItem(USER_DATA, JSON.stringify(payload));
      state.user = payload;
    },
  },
})

export const { logout, setUser } = slice.actions
export default slice.reducer