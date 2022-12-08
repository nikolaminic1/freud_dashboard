import { createSlice } from "@reduxjs/toolkit";
import { initialStateProductRequest } from "../../../initial_state/product_request";
import { createProductService } from "../../../service/product/createProductService";
import { Status } from "../../../service/Status";

export const createProductSlice = createSlice({
  name: "createImage",
  initialState: initialStateProductRequest,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProductService.pending, (state, action) => {
        //   state.status = Status.LOADING;
      })
      .addCase(createProductService.fulfilled, (state, action) => {
        console.log("image slice");
        console.log(action);
        //   state.isBackgroundUploaded = true;
        //   state.isLogoUploaded = true;
        //   state.status = Status.SUCCEED;
      })
      .addCase(createProductService.rejected, (state, action) => {
        //   state.status = Status.REJECTED;
        // state.error = action.error.message || null;
      });
  },
});

const reducer = createProductSlice.reducer;
export default reducer;
