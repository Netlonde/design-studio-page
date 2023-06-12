import { useBuyModalStore } from "@/store";

function useourServicesController() {
  const { handleOpenBuyModal } = useBuyModalStore();

  return { handleOpenBuyModal };
}

export default useourServicesController;
