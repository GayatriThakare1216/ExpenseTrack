import { motion } from "framer-motion";

import {
  Utensils,
  ShoppingBag,
  Car,
  Home,
  TrendingDown,
  Wallet
} from "lucide-react";



function SpendingPattern({data}){


// No Data

if(!data || data.length===0){

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
bg-white
dark:bg-slate-900

border
border-slate-200
dark:border-slate-800

rounded-3xl

p-6

shadow-lg
"

>

<h2 className="
text-xl
font-bold
dark:text-white
">

Spending Pattern

</h2>


<p className="
text-slate-500
mt-3
">

No expense data available

</p>


</motion.div>

)

}





// Sort Highest Expense

const sortedData =
[...data].sort(
(a,b)=>b.value-a.value
);



const topCategory =
sortedData[0];




const total =
data.reduce(
(sum,item)=>sum+item.value,
0
);





const percentage =
Math.round(
(topCategory.value / total) * 100
);







const icons={

Food:Utensils,

food:Utensils,

Shopping:ShoppingBag,

shopping:ShoppingBag,

Travel:Car,

travel:Car,

Rent:Home,

rent:Home

};




const Icon =
icons[topCategory.name]
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
y:-5
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


p-6


shadow-lg

"

>



{/* Glow */}


<div

className="

absolute

right-0

top-0


h-40

w-40


rounded-full


bg-red-500/10


blur-3xl

"

/>





<div className="relative">



{/* Header */}


<div className="flex items-center gap-3">


<div

className="

h-12

w-12


rounded-2xl


bg-red-100

dark:bg-red-900/30


flex

items-center

justify-center


text-red-500

"

>

<TrendingDown size={25}/>

</div>




<div>


<h2

className="

text-xl

font-bold

dark:text-white

"

>

Spending Pattern

</h2>


<p

className="

text-sm

text-slate-500

"

>

Your highest expense area

</p>


</div>


</div>








{/* Category */}



<div

className="

mt-8

flex

items-center

gap-5

"

>


<div

className="

h-16

w-16


rounded-2xl


bg-indigo-600


flex

items-center

justify-center


text-white

shadow-lg

"

>

<Icon size={30}/>

</div>





<div>


<p

className="
text-sm
text-slate-500
"

>

Top Category

</p>



<h2

className="
text-2xl
font-bold
dark:text-white
"

>

{topCategory.name}

</h2>



</div>



</div>









{/* Amount */}


<div

className="

mt-8

grid

grid-cols-2

gap-4

"

>


<div

className="

p-4

rounded-2xl

bg-slate-50

dark:bg-slate-800

"

>


<p

className="
text-sm
text-slate-500
"

>

Spent

</p>


<h3

className="
text-xl
font-bold
dark:text-white
mt-1
"

>

₹{topCategory.value.toLocaleString()}

</h3>


</div>







<div

className="

p-4

rounded-2xl

bg-slate-50

dark:bg-slate-800

"

>


<p

className="
text-sm
text-slate-500
"

>

Contribution

</p>


<h3

className="
text-xl
font-bold
text-red-500
mt-1
"

>

{percentage}%

</h3>


</div>



</div>









{/* Progress */}


<div className="mt-7">


<div

className="
flex
justify-between
text-sm
mb-2
"

>


<span className="
dark:text-white
">

Expense Share

</span>


<span className="
font-bold
text-red-500
">

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

width:`${percentage}%`

}}


transition={{

duration:1

}}



className="

h-full

rounded-full


bg-gradient-to-r

from-red-500

to-orange-500

"

/>



</div>



</div>







</div>




</motion.div>


)

}



export default SpendingPattern;