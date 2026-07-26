import { create } from "zustand";



const getStoredBudgets = ()=>{

try{

const data =
localStorage.getItem("budgets");


return data
?
JSON.parse(data)
:
[];


}

catch(error){

console.error(
"Budget storage error:",
error
);


return [];

}

};





const saveBudgets=(budgets)=>{

localStorage.setItem(
"budgets",
JSON.stringify(budgets)
);

};







const useBudgetStore = create((set)=>({



// State

budgets:getStoredBudgets(),







// Add Budget

addBudget:(budget)=>{


set((state)=>{


const updatedBudgets=[

...state.budgets,

{

...budget,

spent:0

}

];



saveBudgets(
updatedBudgets
);



return{

budgets:updatedBudgets

};



});


},







// Update Budget Limit


updateBudget:(id,updatedData)=>{


set((state)=>{


const updatedBudgets =

state.budgets.map((budget)=>


budget.id===id

?

{

...budget,

...updatedData

}


:

budget


);



saveBudgets(
updatedBudgets
);



return{

budgets:updatedBudgets

};



});



},







// Update spent amount automatically


updateBudgetSpent:(category,amount)=>{


set((state)=>{


const updatedBudgets =

state.budgets.map((budget)=>{



if(

budget.category.toLowerCase()

===

category.toLowerCase()

){


return{


...budget,


spent:

(budget.spent || 0)

+

Number(amount)



};


}



return budget;



});





saveBudgets(
updatedBudgets
);




return{

budgets:updatedBudgets

};



});



},







// Delete Budget


deleteBudget:(id)=>{


set((state)=>{


const updatedBudgets =

state.budgets.filter(

(item)=>

item.id!==id

);



saveBudgets(
updatedBudgets
);



return{

budgets:updatedBudgets

};



});



},







// Clear all budgets


clearBudgets:()=>{


localStorage.removeItem(
"budgets"
);


set({

budgets:[]

});


},







// Get budget by category


getBudgetByCategory:(category)=>{


const budgets =
get().budgets;


return budgets.find(

(item)=>

item.category.toLowerCase()

===

category.toLowerCase()

);


}




}));



export default useBudgetStore;