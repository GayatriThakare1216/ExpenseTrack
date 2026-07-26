export function getMonthlyExpenses(transactions){


const expenses =
transactions.filter(
(item)=>item.type==="expense"
);



const monthlyData =
expenses.reduce(
(acc,item)=>{


const month =
new Date(item.date)
.toLocaleString(
"default",
{
month:"short"
}
);



if(!acc[month]){

acc[month]=0;

}



acc[month]+=item.amount;



return acc;


},
{}
);



return Object.entries(monthlyData)
.map(
([month,amount])=>({

month,

amount

})
);


}