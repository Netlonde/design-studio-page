import { useBuyModalStore } from "@/store";

function useQuestionsController() {
  const { handleOpenBuyModal } = useBuyModalStore();

  return { handleOpenBuyModal };
}

export default useQuestionsController;
