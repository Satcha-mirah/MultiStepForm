import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  yearly: false,
  price: 0,
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("formData", serializedState);
  } catch {
    // Ignore write errors
  }
};

const formSLice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
      saveState(state);
    },

    toggleYearly: (state) => {
      state.yearly = !state.yearly;
      saveState(state);
    },
    clearFormData: (state) => {
      localStorage.removeItem("orderFormData");
      return initialState;
    },
  },
});

export const { updateField, clearFormData } = formSLice.actions;

export default formSLice.reducer;
