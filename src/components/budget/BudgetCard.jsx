import {
  Trash2,
  Wallet,
  Utensils,
  ShoppingBag,
  Car,
  Home,
  Plane,
  Briefcase
} from "lucide-react";


import { motion } from "framer-motion";
import toast from "react-hot-toast";


import useBudgetStore from "../../store/budgetStore";
import useTransactionStore from "../../store/transactionStore";


import {
 calculateBudgetSpent
} from "../../utils/budgetCalculations";





function BudgetCard({budget}){


const {
deleteBudget
}=useBudgetStore();



const {
transactions
}=useTransactionStore();




const {
spent,
percentage

}=calculateBudgetSpent(
budget,
transactions
);





const remaining =
Math.max(
budget.limit - spent,
0
);



const progress =
Math.min(
percentage,
100
);



const exceeded =
percentage >=100;







const icons={

Food:Utensils,
food:Utensils,

Shopping:ShoppingBag,
shopping:ShoppingBag,

Travel:Car,
travel:Car,

Rent:Home,
rent:Home,

Flight:Plane,
flight:Plane,

Salary:Briefcase

};




const Icon =
icons[budget.category]
||
Wallet;





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



whileHover={{

y:-8,
scale:1.02

}}



transition={{

duration:.35

}}




className={`

relative

overflow-hidden


rounded-3xl


p-6


border


shadow-sm


transition-all



bg-white

dark:bg-slate-900



${

exceeded

?

"border-red-400 shadow-red-200/40"

:

"border-slate-200 dark:border-slate-800"

}


`}

>




{/* Background Glow */}


<div

className={`

absolute

- right-10

- top-10


w-40

h-40


rounded-full


blur-3xl


${

exceeded

?

"bg-red-500/20"

:

"bg-indigo-500/20"

}

`}

/>








<div className="relative z-10">





{/* Header */}


<div className="
flex
justify-between
items-start
">


<div

className="
flex
items-center
gap-4
"

>


<div

className="

w-14
h-14

rounded-2xl

bg-gradient-to-br

from-indigo-500
to-purple-600

flex
items-center
justify-center

text-white

shadow-lg

"

>

<Icon size={26}/>

</div>





<div>


<h3

className="
text-xl
font-bold
dark:text-white
"

>

{budget.category}

</h3>


<p

className="
text-sm
text-slate-500
dark:text-slate-400
mt-1
"

>

Monthly Budget

</p>


</div>



</div>






<button


onClick={()=>{


deleteBudget(
budget.id
);


toast.success(
"Budget removed"
);


}}



className="

p-2

rounded-xl


text-red-500


hover:bg-red-50

dark:hover:bg-red-900/20


transition

"


>


<Trash2 size={20}/>


</button>




</div>









{/* Money Section */}


<div

className="

mt-8

grid

grid-cols-2

gap-5

"

>



<div

className="

bg-slate-50

dark:bg-slate-800/60

rounded-2xl

p-4

"

>


<p

className="
text-xs
text-slate-500
"

>

Spent

</p>



<h2

className="
text-2xl
font-bold
dark:text-white
mt-2
"

>

₹{spent.toLocaleString()}

</h2>



</div>







<div

className="

bg-slate-50

dark:bg-slate-800/60

rounded-2xl

p-4

text-right

"

>


<p

className="
text-xs
text-slate-500
"

>

Remaining

</p>


<h2

className={`

text-2xl
font-bold
mt-2


${

exceeded

?

"text-red-500"

:

"text-green-500"

}

`}

>

₹{remaining.toLocaleString()}

</h2>



</div>



</div>









{/* Progress */}



<div className="
mt-7
">


<div

className="
flex
justify-between
items-center
mb-3
"

>


<p className="
text-sm
dark:text-white
font-medium
">

Budget Usage

</p>



<span

className={`

px-3

py-1

rounded-full

text-xs

font-bold



${

exceeded

?

"bg-red-100 text-red-600"

:

"bg-indigo-100 text-indigo-600"

}

`}

>

{percentage}%


</span>



</div>








<div

className="

h-3

rounded-full

bg-slate-200

dark:bg-slate-700

overflow-hidden

"

>


<motion.div


initial={{

width:0

}}



animate={{

width:`${progress}%`

}}



transition={{

duration:1.2

}}



className={`

h-full

rounded-full



${

exceeded

?

"bg-gradient-to-r from-red-500 to-orange-500"

:

"bg-gradient-to-r from-indigo-500 to-purple-600"

}


`}



/>


</div>



</div>









{/* Footer */}



<div className="
mt-6
flex
justify-between
items-center
">


<p className="
text-sm
text-slate-500
">

Limit

</p>


<p className="
font-bold
dark:text-white
">

₹{budget.limit.toLocaleString()}

</p>



</div>







{

exceeded && (


<motion.div


initial={{

opacity:0,
y:10

}}



animate={{

opacity:1,
y:0

}}



className="

mt-5

flex

items-center

gap-2


text-red-500

font-semibold

text-sm

"

>

⚠️ Budget limit exceeded


</motion.div>


)


}





</div>





</motion.div>


)


}


export default BudgetCard;