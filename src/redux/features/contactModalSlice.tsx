import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactModalState {
  isContactModalOpen: boolean;
  selectedPackage: string;
}

const initialState: ContactModalState = {
  isContactModalOpen: false,
  selectedPackage: '',
};

const contactModalSlice = createSlice({
  name: 'contactModal',
  initialState,
  reducers: {
    toggleContactModalOpen: (state, action: PayloadAction<{ packageName?: string }>) => {
      state.isContactModalOpen = true;
      state.selectedPackage = action.payload.packageName || '';
    },
    toggleContactModalClose: (state) => {
      state.isContactModalOpen = false;
      state.selectedPackage = '';
    },
  },
});

export const { toggleContactModalOpen, toggleContactModalClose } = contactModalSlice.actions;
export default contactModalSlice.reducer;