import { create } from "zustand";

export const DEPOSIT_ERROR_TYPE = {
  ERROR_INPUT_NEEDED: "ERROR_INPUT_NEEDED",
  ERROR_OVER_QUANTITIY: "ERROR_OVER_QUANTITIY",
  ERROR_OVER_TOTAL: "ERROR_OVER_TOTAL",
} as const;

interface UseDepositStore {
  ticker: string;
  totalAmountOwned: number;
  userInputStackQuantity: number | null;
  expectedFee: number;
  error: null | string;
  errorType: null | keyof typeof DEPOSIT_ERROR_TYPE;
  setUserInputStackQuantity: (userInputVaule: string) => void;
  userInputPassword: string;
  setUserInputPassword: (userInputValue: string) => void;
}

const initValue = {
  ticker: "",
  totalAmountOwned: 0,
  userInputStackQuantity: 0,
  expectedFee: 0,
  totalOutput: 0,
  error: null,
  errorType: null,
  userInputPassword: "",
};

// TODO bigdecimal or bigInt
const useDeposit = create<UseDepositStore>((set) => ({
  ...initValue,
  initDeposit: () => set(() => ({ ...initValue })),
  onSelectTicker: (ticker: string, totalAmountOwned: number) =>
    set(() => {
      return {
        ticker,
        totalAmountOwned,
      };
    }),
  setUserInputStackQuantity: (userInputVaule: string) =>
    set((state) => {
      if (userInputVaule === "" || userInputVaule === "0") {
        return {
          userInputStackQuantity: null,
          totalOutput: 0,
          error: "값을 입력해 주세요.",
          errorType: "ERROR_INPUT_NEEDED",
        };
      }

      const parsedUserInput = parseFloat(userInputVaule);
      const expectedFee = Math.floor(parsedUserInput * 0.1);
      const totalOutput = Math.floor(parsedUserInput + expectedFee);

      if (parsedUserInput >= state.totalAmountOwned) {
        return {
          userInputStackQuantity: userInputVaule,
          totalOutput,
          error: "보유 수량까지만 신청이 가능해요.",
          errorType: "ERROR_OVER_QUANTITIY",
          expectedFee,
        };
      }

      if (totalOutput >= state.totalAmountOwned) {
        return {
          userInputStackQuantity: userInputVaule,
          error: "잔액이 부족해요.",
          totalOutput,
          errorType: "ERROR_OVER_TOTAL",
          expectedFee,
        };
      }

      return {
        userInputStackQuantity: userInputVaule,
        error: "",
        totalOutput,
        expectedFee,
      };
    }),
  setUserInputPassword: (userInputPassword: string) =>
    set(() => {
      return {
        userInputPassword,
      };
    }),
}));

export default useDeposit;
