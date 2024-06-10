import { create } from "zustand";

export const DEPOSIT_STEP = {
  SELECTE: "SELECTE",
  AMOUNT: "AMOUNT",
  PASSWORD: "PASSWORD",
  COMPLETED: "COMPLETED",
} as const;

type TStep = keyof typeof DEPOSIT_STEP;

interface UseStepStore {
  currentStep: TStep;
  initStep: () => void;
  setStep: (step: TStep) => void;
}

const useStep = create<UseStepStore>((set) => ({
  currentStep: DEPOSIT_STEP.AMOUNT,
  initStep: () => set({ currentStep: DEPOSIT_STEP.SELECTE }),
  setStep: (step: TStep) => set({ currentStep: step }),
}));

export default useStep;
