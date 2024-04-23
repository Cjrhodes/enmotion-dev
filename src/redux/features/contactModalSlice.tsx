import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactModalState {
  isContactModalOpen: boolean;
  selectedPackage: string;
  packageType: string;
}

const initialState: ContactModalState = {
  isContactModalOpen: false,
  selectedPackage: '',
  packageType: '',
};

const contactModalSlice = createSlice({
  name: 'contactModal',
  initialState,
  reducers: {
    toggleContactModalOpen: (state, action: PayloadAction<{ packageName?: string; packageType: string }>) => {
      state.isContactModalOpen = true;
      state.selectedPackage = action.payload.packageName || '';
      state.packageType = action.payload.packageType;
    },
    toggleContactModalClose: (state) => {
      state.isContactModalOpen = false;
      state.selectedPackage = '';
      state.packageType = '';
    },
  },
});
export const { toggleContactModalOpen, toggleContactModalClose } = contactModalSlice.actions;
export default contactModalSlice.reducer;