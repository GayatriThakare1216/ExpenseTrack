export function calculateBudgetSpent(
budget,
transactions
){


const spent = transactions

.filter(
(item)=>

item.type==="expense"
&&
item.category.toLowerCase()
===
budget.category.toLowerCase()

)

.reduce(

(total,item)=>

total + item.amount,

0

);



const percentage =

Math.round(
(spent / budget.limit) * 100
);



return{

spent,

percentage

};


}