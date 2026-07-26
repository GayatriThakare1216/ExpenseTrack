export function getExpenseByCategory(transactions){

const expenses = transactions.filter(
(item)=>item.type==="expense"
);


const categoryData = expenses.reduce(
(acc,item)=>{


if(!acc[item.category]){

acc[item.category]=0;

}


acc[item.category]+=item.amount;


return acc;


},
{}
);



return Object.entries(categoryData)
.map(
([name,value])=>({

name,
value

})
);

}