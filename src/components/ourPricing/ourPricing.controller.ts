import { useBuyModalStore } from "@/store";

function useOurPricingController() {
  const { handleOpenBuyModal, handleSetPrice } = useBuyModalStore();

  function handleClickOption(value: number) {
    handleSetPrice(value);
    handleOpenBuyModal(true);
  }

  return { handleClickOption };
}

export default useOurPricingController;
