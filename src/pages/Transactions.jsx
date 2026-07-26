import { 
  Plus,
  Wallet,
  TrendingUp,
  TrendingDown,
  Receipt
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";


import TransactionFilters from "../components/transactions/TransactionFilters";
import TransactionCard from "../components/transactions/TransactionCard";

import useTransactionStore from "../store/transactionStore";
import useModalStore from "../store/modalStore";


import TransactionModal from "../components/transactions/TransactionModal";
import AddTransactionForm from "../components/transactions/AddTransactionForm";

import EmptyState from "../components/ui/EmptyState";



function Transactions(){


const {transactions}=useTransactionStore();


const {
openAddTransaction
}=useModalStore();



const [search,setSearch]=useState("");

const [filter,setFilter]=useState("all");





const income = transactions

.filter(
(item)=>item.type==="income"
)

.reduce(
(sum,item)=>sum+Number(item.amount),
0
);





const expense = transactions

.filter(
(item)=>item.type==="expense"
)

.reduce(
(sum,item)=>sum+Number(item.amount),
0
);





const balance = income-expense;







const filteredTransactions = transactions.filter(
(item)=>{


const matchesSearch =

item.title
.toLowerCase()
.includes(
search.toLowerCase()
);




const matchesFilter =

filter==="all"

?

true

:

item.type===filter;



return (
matchesSearch &&
matchesFilter
);


}

);






return(


<motion.div


initial={{
opacity:0,
y:20
}}


animate={{
opacity:1,
y:0
}}


transition={{
duration:.5
}}


className="
space-y-8
"


>







{/* HERO */}


<motion.div


whileHover={{
scale:1.01
}}


className="

relative

overflow-hidden

rounded-3xl

p-8

bg-gradient-to-br

from-indigo-600

via-purple-600

to-violet-700

text-white

shadow-2xl

"



>


<div

className="

absolute

right-[-50px]

top-[-50px]

h-60

w-60

rounded-full

bg-white/20

blur-3xl

"

/>



<div

className="

absolute

left-[-40px]

bottom-[-40px]

h-40

w-40

rounded-full

bg-indigo-300/20

blur-3xl

"

/>





<div className="relative z-10">



<p className="
text-indigo-100
text-sm
font-medium
">

Financial Activity

</p>



<h1 className="
text-4xl
font-bold
mt-2
">

Transactions 💳

</h1>




<p className="
mt-3
text-indigo-100
max-w-xl
">

Track your income and expenses,
manage your money and understand
your spending habits.

</p>






<button


onClick={openAddTransaction}


className="

mt-6

flex

items-center

gap-2

bg-white

text-indigo-600

px-5

py-3

rounded-xl

font-semibold

hover:scale-105

transition

shadow-lg

"


>


<Plus size={20}/>


Add Transaction


</button>



</div>


</motion.div>









{/* SUMMARY CARDS */}



<div

className="

grid

grid-cols-1

sm:grid-cols-2

xl:grid-cols-4

gap-5

"



>



<SummaryCard

title="Total Transactions"

value={transactions.length}

icon={Receipt}

color="bg-indigo-600"

/>



<SummaryCard

title="Income"

value={`₹${income.toLocaleString("en-IN")}`}

icon={TrendingUp}

color="bg-emerald-500"

/>




<SummaryCard

title="Expense"

value={`₹${expense.toLocaleString("en-IN")}`}

icon={TrendingDown}

color="bg-rose-500"

/>



<SummaryCard

title="Balance"

value={`₹${balance.toLocaleString("en-IN")}`}

icon={Wallet}

color="bg-purple-600"

/>



</div>








{/* FILTERS */}



<TransactionFilters


search={search}


setSearch={setSearch}


filter={filter}


setFilter={setFilter}


/>










{/* LIST */}



<div className="
space-y-5
">


{


filteredTransactions.length===0

?

<EmptyState


title={
transactions.length===0

?

"No Transactions Yet"

:

"No Matching Transactions"

}



description={
transactions.length===0

?

"Add your first transaction to start tracking your finance."

:

"Try changing search or filters."

}



buttonText={
transactions.length===0

?

"Add Transaction"

:

null
}



onClick={openAddTransaction}



/>


:



filteredTransactions.map(
(transaction)=>(


<TransactionCard

key={transaction.id}

transaction={transaction}

/>


)

)



}



</div>







<TransactionModal>

<AddTransactionForm/>

</TransactionModal>






</motion.div>


)


}






function SummaryCard({

title,

value,

icon:Icon,

color


}){


return(


<motion.div


whileHover={{
y:-6
}}


className="

bg-white

dark:bg-slate-900

border

border-slate-200

dark:border-slate-800

rounded-3xl

p-5

shadow-sm

hover:shadow-xl

transition

"



>



<div className="
flex
justify-between
items-center
">


<div>


<p className="
text-sm
text-slate-500
dark:text-slate-400
">

{title}

</p>



<h2 className="
text-2xl
font-bold
mt-2
dark:text-white
">

{value}

</h2>



</div>




<div

className={`

h-12

w-12

rounded-2xl

${color}

text-white

flex

items-center

justify-center

shadow-lg

`}


>


<Icon size={22}/>


</div>


</div>


</motion.div>


)

}



export default Transactions;