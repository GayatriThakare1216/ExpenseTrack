import { motion } from "framer-motion";

import {
  Utensils,
  ShoppingBag,
  Car,
  Home,
  AlertTriangle,
  Wallet,
  TrendingUp
} from "lucide-react";



function BudgetOverview({budgets}){


const icons = {

food:Utensils,

Food:Utensils,

shopping:ShoppingBag,

Shopping:ShoppingBag,

travel:Car,

Travel:Car,

rent:Home,

Rent:Home

};




if(!budgets || budgets.length===0){

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

className="
rounded-3xl

p-7

bg-white/80

dark:bg-slate-900/80

backdrop-blur-xl

border

border-slate-200

dark:border-slate-800

shadow-xl

"

>


<div className="
flex
items-center
gap-3
">


<div

className="
h-12
w-12

rounded-2xl

bg-indigo-100

dark:bg-indigo-500/20

flex

items-center

justify-center

text-indigo-600

"

>

<Wallet/>

</div>



<div>

<h2 className="
text-xl
font-bold
dark:text-white
">

Budget Overview

</h2>


<p className="
text-sm
text-slate-500
">

No budgets created yet

</p>


</div>


</div>



</motion.div>

)

}





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

transition={{
duration:.5
}}

>



<div className="
flex
items-center
justify-between
mb-6
">


<div>

<h2 className="
text-2xl
font-bold
dark:text-white
">

Budget Overview 💰

</h2>


<p className="
text-sm
text-slate-500
">

Track your spending limits

</p>


</div>



<div className="
h-12
w-12

rounded-2xl

bg-gradient-to-br

from-indigo-500

to-purple-600

text-white

flex

items-center

justify-center

shadow-lg

">

<TrendingUp/>

</div>



</div>






<div

className="
grid

grid-cols-1
sm:grid-cols-2
2xl:grid-cols-3

gap-6

"

>


{


budgets.map((budget,index)=>{



const spent =
budget.spent || 0;



const limit =
budget.limit || budget.amount || 0;



const percentage =
limit===0
?
0
:
Math.round(
(spent/limit)*100
);



const remaining =
Math.max(
limit-spent,
0
);



const exceeded =
percentage >=100;





const category =
budget.category?.trim();


const Icon =
icons[category]
||
Wallet;





return(


<motion.div


key={index}



initial={{

opacity:0,
y:30

}}



animate={{

opacity:1,
y:0

}}



transition={{

delay:index*0.1

}}



whileHover={{

y:-8,
scale:1.02

}}



className={`

relative

overflow-hidden

rounded-[30px]

p-6

border

shadow-xl

backdrop-blur-xl


${

exceeded

?

"bg-red-50/80 dark:bg-red-950/30 border-red-200 dark:border-red-900"

:

"bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800"

}

`}



>






{/* Glow */}

<div

className={`

absolute

right-0

top-0

w-32

h-32

blur-3xl

rounded-full


${

exceeded

?

"bg-red-500/20"

:

"bg-indigo-500/20"

}

`}

/>







<div className="relative">





{/* Header */}


<div className="
flex
justify-between
items-center
">


<div className="
flex
items-center
gap-3
">


<div

className="
h-12
w-12

rounded-2xl

bg-gradient-to-br

from-indigo-500

to-purple-600

text-white

flex

items-center

justify-center

shadow-lg

"

>

<Icon size={22}/>

</div>




<div>

<h3 className="
font-bold
text-lg
dark:text-white
">

{budget.category}

</h3>


<p className="
text-sm
text-slate-500
">

Monthly Budget

</p>


</div>



</div>






{

exceeded &&

<AlertTriangle

className="
text-red-500
"

/>

}



</div>









{/* Amount */}



<div className="
mt-7
">


<p className="
text-sm
text-slate-500
">

Spent

</p>



<h2 className="
text-3xl

font-bold

dark:text-white

mt-1

">

₹{spent.toLocaleString("en-IN")}

</h2>




<p className="
text-sm
text-slate-500
mt-1
">

Limit ₹{limit.toLocaleString("en-IN")}

</p>


</div>









{/* Progress */}


<div className="
mt-6
">


<div className="
flex
justify-between
mb-3
">


<span className="
text-sm
dark:text-white
">

Usage

</span>



<span

className={

exceeded

?

"text-red-500 font-bold"

:

"text-indigo-600 font-bold"

}

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

width:`${Math.min(
percentage,
100
)}%`

}}



transition={{

duration:1

}}



className={`

h-full

rounded-full


${

exceeded

?

"bg-gradient-to-r from-red-500 to-rose-400"

:

"bg-gradient-to-r from-indigo-500 to-purple-500"

}

`}

/>



</div>



</div>









{/* Footer */}


<div

className={`

mt-6

rounded-2xl

p-4

flex

items-center

gap-3


${

exceeded

?

"bg-red-100 dark:bg-red-500/10"

:

"bg-emerald-100 dark:bg-emerald-500/10"

}

`}

>


{

exceeded

?

<AlertTriangle className="text-red-500"/>

:

<Wallet className="text-emerald-500"/>

}



<p

className={`

font-semibold

text-sm


${

exceeded

?

"text-red-500"

:

"text-emerald-600"

}

`}

>


{

exceeded

?

`Exceeded by ₹${

(
spent-limit

).toLocaleString("en-IN")

}`


:

`₹${

remaining.toLocaleString("en-IN")

} remaining`

}


</p>


</div>







</div>







</motion.div>


)


})


}



</div>



</motion.div>


)

}


export default BudgetOverview;