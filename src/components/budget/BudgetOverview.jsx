import { motion } from "framer-motion";
import {
  Wallet,
  TrendingDown,
  AlertTriangle,
  CheckCircle
} from "lucide-react";


function BudgetOverview({budgets}){


if(!budgets || budgets.length===0){

return(

<div

className="
bg-white
dark:bg-slate-900

rounded-3xl

p-6

border

border-slate-200

dark:border-slate-800

text-center

text-slate-500

"

>

No budgets created yet.

</div>

)

}





const totalBudget = budgets.reduce(

(sum,item)=>sum + Number(item.limit),

0

);



const totalSpent = budgets.reduce(

(sum,item)=>sum + Number(item.spent || 0),

0

);



const remaining =
totalBudget-totalSpent;



const usage = Math.round(

(totalSpent/totalBudget)*100

);





return(


<motion.div


initial={{

opacity:0,

y:30

}}



animate={{

opacity:1,

y:0

}}



className="

mt-8

bg-white

dark:bg-slate-900


rounded-3xl


p-6


border

border-slate-200

dark:border-slate-800


shadow-sm

"

>





<div className="mb-6">


<h2

className="

text-2xl

font-bold

dark:text-white

"

>

Budget Overview

</h2>


<p

className="

text-sm

text-slate-500

mt-1

"

>

Your monthly spending performance

</p>


</div>








<div

className="

grid

grid-cols-1

md:grid-cols-3

gap-5

"

>






{/* Total Budget */}


<div

className="

p-5

rounded-2xl

bg-indigo-50

dark:bg-indigo-900/20

"

>


<Wallet

className="

text-indigo-600

mb-3

"

/>


<p className="
text-sm
text-slate-500
">

Total Budget

</p>


<h3 className="
text-2xl
font-bold
dark:text-white
">

₹{totalBudget.toLocaleString()}

</h3>


</div>








{/* Spent */}


<div

className="

p-5

rounded-2xl

bg-red-50

dark:bg-red-900/20

"

>


<TrendingDown

className="
text-red-500
mb-3
"

/>


<p className="
text-sm
text-slate-500
">

Total Spent

</p>


<h3 className="
text-2xl
font-bold
dark:text-white
">

₹{totalSpent.toLocaleString()}

</h3>


</div>








{/* Remaining */}


<div

className={`

p-5

rounded-2xl


${
remaining<0

?

"bg-red-50 dark:bg-red-900/20"

:

"bg-green-50 dark:bg-green-900/20"

}

`

}


>


{

remaining<0

?

<AlertTriangle
className="text-red-500 mb-3"
/>

:

<CheckCircle
className="text-green-500 mb-3"
/>

}



<p className="
text-sm
text-slate-500
">

Remaining

</p>



<h3 className={`

text-2xl

font-bold


${
remaining<0

?

"text-red-500"

:

"text-green-600"

}

`

}>

₹{Math.max(remaining,0).toLocaleString()}

</h3>



</div>






</div>









{/* Usage Progress */}


<div className="mt-8">


<div className="
flex
justify-between
mb-2
">


<span className="
text-sm
text-slate-500
">

Budget Usage

</span>



<span className="
font-bold
dark:text-white
">

{usage}%

</span>


</div>





<div

className="

h-3

bg-slate-200

dark:bg-slate-700

rounded-full

overflow-hidden

"

>


<motion.div


initial={{

width:0

}}


animate={{

width:`${Math.min(usage,100)}%`

}}



transition={{

duration:1

}}



className={`

h-full

rounded-full


${
usage>100

?

"bg-red-500"

:

"bg-indigo-600"

}

`

}


/>



</div>


</div>









</motion.div>


)

}


export default BudgetOverview;