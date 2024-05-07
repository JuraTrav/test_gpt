import { createSlice } from "@reduxjs/toolkit"
// import type { PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  history: false,
}

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    // setHistory(state, action: PayloadAction<boolean>) {
    //   state.history = action.payload
    // },
  },
})

// export const { setHistory } = chatSlice.actions

export default chatSlice.reducer
