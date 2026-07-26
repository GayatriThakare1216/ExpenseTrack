import { create } from "zustand";

import sampleTransactions from "../data/sampleTransactions";



const getStoredTransactions = ()=>{

try{

const data =
localStorage.getItem("transactions");


return data
?
JSON.parse(data)
:
sampleTransactions;


}

catch(error){

console.log(
"Storage Error",
error
);


return sampleTransactions;

}

};





const useTransactionStore = create((set)=>({



transactions:getStoredTransactions(),







addTransaction:(transaction)=>{


set((state)=>{


const updatedTransactions=[

transaction,

...state.transactions

];



localStorage.setItem(

"transactions",

JSON.stringify(updatedTransactions)

);



return{


transactions:updatedTransactions


};


});


},







updateTransaction:(id,updatedData)=>{


set((state)=>{


const updatedTransactions =

state.transactions.map((item)=>


item.id===id

?

{

...item,

...updatedData

}

:

item


);



localStorage.setItem(

"transactions",

JSON.stringify(updatedTransactions)

);



return{

transactions:updatedTransactions

};


});


},







deleteTransaction:(id)=>{


set((state)=>{


const updatedTransactions =

state.transactions.filter(

(item)=>item.id!==id

);



localStorage.setItem(

"transactions",

JSON.stringify(updatedTransactions)

);



return{


transactions:updatedTransactions


};


});


},







clearTransactions:()=>{


localStorage.removeItem(
"transactions"
);


set({

transactions:[]

});


}





}));


export default useTransactionStore;