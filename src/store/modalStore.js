import { create } from "zustand";


const useModalStore = create((set)=>({

  // Transaction Modal

  transactionModal:false,


  openAddTransaction:()=>set({
    transactionModal:true
  }),


  closeAddTransaction:()=>set({
    transactionModal:false
  }),



  // Budget Modal

  budgetModal:false,


  openBudgetModal:()=>set({
    budgetModal:true
  }),


  closeBudgetModal:()=>set({
    budgetModal:false
  })


}));


export default useModalStore;