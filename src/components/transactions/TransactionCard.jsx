import {
  ShoppingBag,
  Utensils,
  Car,
  Home,
  Briefcase,
  Wallet,
  Trash2,
  CalendarDays
} from "lucide-react";


import { motion } from "framer-motion";


import useTransactionStore from "../../store/transactionStore";





function TransactionCard({transaction}){


const {
deleteTransaction

}=useTransactionStore();





const icons={


Food:Utensils,

food:Utensils,


Shopping:ShoppingBag,

shopping:ShoppingBag,


Travel:Car,

travel:Car,


Rent:Home,

rent:Home,


Salary:Briefcase,


Work:Wallet


};







const Icon =

icons[transaction.category]

||

Wallet;






const isIncome =

transaction.type==="income";








return(


<motion.div



initial={{

opacity:0,

x:-30

}}



animate={{

opacity:1,

x:0

}}



whileHover={{

scale:1.02,

y:-4

}}



transition={{

duration:.3

}}





className="

relative

overflow-hidden


bg-white

dark:bg-slate-900


border

border-slate-200

dark:border-slate-800


rounded-3xl


p-5


shadow-sm


hover:shadow-xl


transition-all

"

>


{/* Glow */}


<div

className={`

absolute

right-0

top-0

h-32

w-32

blur-3xl

opacity-20

rounded-full

${

isIncome

?

"bg-emerald-500"

:

"bg-rose-500"

}

`}

/>









<div className="
relative
z-10
flex
items-center
justify-between
gap-4
">







{/* Left */}



<div className="
flex
items-center
gap-4
">



<div

className={`

h-14

w-14

rounded-2xl


flex

items-center

justify-center


text-white


shadow-lg


${

isIncome

?

"bg-gradient-to-br from-emerald-400 to-green-600"

:

"bg-gradient-to-br from-rose-400 to-red-600"

}

`}

>


<Icon size={25}/>


</div>







<div>



<h3 className="
font-bold
text-lg
dark:text-white
">

{transaction.title}

</h3>





<div className="
flex
items-center
gap-2
mt-1
">

<p className="
text-sm
text-slate-500
dark:text-slate-400
">

{transaction.category}

</p>



<span className="
text-slate-300
">

•

</span>



<div className="
flex
items-center
gap-1
text-xs
text-slate-400
">


<CalendarDays size={13}/>



{

new Date(transaction.date)
.toLocaleDateString(
"en-IN",
{

day:"2-digit",

month:"short",

year:"numeric"

}

)

}



</div>



</div>




</div>



</div>









{/* Right */}



<div className="
flex
items-center
gap-4
">





<div className="
text-right
">



<h2

className={`

text-xl

font-bold


${

isIncome

?

"text-emerald-500"

:

"text-rose-500"

}

`}

>


{

isIncome

?

"+"

:

"-"

}


₹{Number(transaction.amount)
.toLocaleString("en-IN")}



</h2>




<span

className={`

inline-block

mt-1

px-3

py-1

rounded-full

text-xs

font-semibold


${

isIncome

?

"bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30"

:

"bg-rose-100 text-rose-600 dark:bg-rose-900/30"

}

`}


>


{

isIncome

?

"Income"

:

"Expense"

}


</span>



</div>







<button


onClick={()=>deleteTransaction(transaction.id)}



className="

h-10

w-10


rounded-xl


flex

items-center

justify-center


text-red-500


bg-red-50


dark:bg-red-900/20


hover:bg-red-500


hover:text-white


transition


"


>


<Trash2 size={18}/>


</button>






</div>





</div>



</motion.div>


)

}



export default TransactionCard;