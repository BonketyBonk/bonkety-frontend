import create from "zustand";

const useBettingStore = create((set) => ({
  betAmount: 0,
  bonkAgainst: "",
  setBetAmount: (chosenBetAmount) => set({ betAmount: chosenBetAmount }),
  setBonkAgainst: (chosenBonkAgainst) =>
    set({ bonkAgainst: chosenBonkAgainst }),
}));

export default useBettingStore;
