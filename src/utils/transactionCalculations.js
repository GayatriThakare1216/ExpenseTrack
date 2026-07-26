export function calculateSummary(transactions){


const income = transactions
.filter(
(item)=>item.type==="income"
)
.reduce(
(total,item)=>total+item.amount,
0
);



const expense = transactions
.filter(
(item)=>item.type==="expense"
)
.reduce(
(total,item)=>total+item.amount,
0
);



const balance = income - expense;



return {

income,

expense,

balance

};


}