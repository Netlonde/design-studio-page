export interface BuyModalProps {
  isOpenBuyModal: boolean;
  price: number;

  handleOpenBuyModal: (isOpen: boolean) => void;
  handleSetPrice: (price: number) => void;
}
