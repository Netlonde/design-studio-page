import { useBuyModalStore } from "@/store/index";
function useGetStartedController() {
  const { handleOpenBuyModal, isOpenBuyModal } = useBuyModalStore();
  return { handleOpenBuyModal, isOpenBuyModal };
}

export default useGetStartedController;
