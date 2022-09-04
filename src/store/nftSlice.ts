// node_modules
import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";


interface nftsState {
  nfts: [];
  count: number;
  isLoading: boolean;
  isError: boolean;
  cursor: string;
  account: string;
};

const initialState: nftsState = {
  nfts: [],
  cursor: "",
  count: 0,
  isLoading: false,
  isError: false,
  account: "",
};

const nftsSlice = createSlice({
  name: "nft",
  initialState: initialState,
  reducers: {
    nftRequest(state: nftsState, action) {
      state.isLoading = true
      state.account = action.payload
    },
    nftRequestSuccess(state: nftsState, action: PayloadAction<any>) {
      state.isLoading = false
      state.isError = false
      state.nfts = action.payload.nfts
      state.cursor = action.payload.cursor
    },
    nftRequestFailure(state: nftsState) {
      state.isLoading = false
      state.isError = true
    }
  },
});

const nftsActions = nftsSlice.actions;

export const {
  nftRequest,
  nftRequestSuccess,
  nftRequestFailure
} = nftsActions

export default nftsSlice.reducer;
