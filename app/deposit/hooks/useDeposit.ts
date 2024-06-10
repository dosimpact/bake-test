import { create } from "zustand";

interface UseDepositStore {
  ticker: string;
  totalQuantity: number;
  stackQuantity: number;
  expectedFee: number;
  error: null | string;
}

// TODO bigdecimal or bigInt
const useDeposit = create<UseDepositStore>((set) => ({
  ticker: "",
  totalQuantity: 0,
  stackQuantity: 0,
  expectedFee: 0,
  error: "",
}));

export default useDeposit;
