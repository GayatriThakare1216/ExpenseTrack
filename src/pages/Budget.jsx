import { motion } from "framer-motion";
import {
  Wallet,
  TrendingUp,
  AlertTriangle
} from "lucide-react";

import AddBudgetForm from "../components/budget/AddBudgetForm";
import BudgetCard from "../components/budget/BudgetCard";

import useBudgetStore from "../store/budgetStore";


function Budget(){


const {budgets}=useBudgetStore();



const totalBudget = budgets.reduce(
(sum,item)=>sum+item.limit,
0
);


const exceededBudgets = budgets.filter(
(item)=>item.spent >= item.limit
).length;



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

className="space-y-8"

>



{/* Header */}

<div>


<h1

className="
text-4xl
font-bold
dark:text-white
"

>

Budget Management 💰

</h1>



<p

className="
mt-2
text-slate-500
dark:text-slate-400
"

>

Plan your spending and control your financial goals.

</p>


</div>






{/* Stats */}


<div

className="
grid
grid-cols-1
md:grid-cols-3
gap-6
"

>



<div

className="
rounded-3xl
p-6

bg-gradient-to-br
from-indigo-500
to-purple-600

text-white

shadow-xl

"

>


<Wallet/>

<p className="mt-4 text-indigo-100">
Total Budget
</p>


<h2 className="text-3xl font-bold mt-2">
₹{totalBudget.toLocaleString()}
</h2>


</div>







<div

className="
rounded-3xl
p-6

bg-white
dark:bg-slate-900

border
border-slate-200
dark:border-slate-800

"

>


<TrendingUp
className="text-green-500"
/>


<p className="
mt-4
text-slate-500
">

Active Budgets

</p>


<h2 className="
text-3xl
font-bold
dark:text-white
mt-2
">

{budgets.length}

</h2>


</div>








<div

className="
rounded-3xl
p-6

bg-white
dark:bg-slate-900

border
border-slate-200
dark:border-slate-800

"

>


<AlertTriangle

className="text-red-500"

/>


<p className="
mt-4
text-slate-500
">

Exceeded

</p>


<h2

className="
text-3xl
font-bold
dark:text-white
mt-2
"

>

{exceededBudgets}

</h2>


</div>



</div>









{/* Add Budget */}


<div

className="
bg-white
dark:bg-slate-900

border
border-slate-200
dark:border-slate-800

rounded-3xl

p-6

shadow-sm

"

>


<AddBudgetForm/>


</div>








{/* Budget Cards */}



<div>


<h2

className="
text-2xl
font-bold
dark:text-white
mb-5
"

>

Your Budgets

</h2>



{

budgets.length===0

?

<div

className="
bg-slate-50
dark:bg-slate-900

rounded-3xl

p-10

text-center

text-slate-500

"

>

No budgets created yet 🚀

</div>


:


<div

className="
grid
grid-cols-1
lg:grid-cols-2
gap-6
"

>


{

budgets.map((budget)=>(

<BudgetCard

key={budget.id}

budget={budget}

/>


))

}


</div>


}



</div>





</motion.div>


)

}


export default Budget;