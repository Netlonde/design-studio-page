import create from "zustand";
import { BuyModalProps } from "./BuyModal.props";

const initialState = {
  isOpenBuyModal: false,
  price: 50,
};

const useBuyModalStore = create<BuyModalProps>((set, get) => ({
  ...initialState,

  handleSetPrice: (price) => set((state) => ({ ...state, price })),

  handleOpenBuyModal: (isOpenBuyModal) =>
    set((state) => ({ ...state, isOpenBuyModal })),
}));

export { useBuyModalStore };
