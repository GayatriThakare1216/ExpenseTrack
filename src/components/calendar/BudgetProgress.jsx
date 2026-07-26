import {motion} from "framer-motion";

import {
Wallet,
AlertTriangle,
CheckCircle,
Target
} from "lucide-react";





function BudgetProgress({budgets=[]}){





if(!budgets.length){


return(


<motion.div

initial={{
opacity:0,
y:25
}}

animate={{
opacity:1,
y:0
}}


className="

rounded-[32px]

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
gap-4
">


<div

className="
w-14

h-14

rounded-2xl

bg-indigo-100

dark:bg-indigo-500/20

flex

items-center

justify-center

text-indigo-600

"

>

<Wallet size={28}/>

</div>



<div>

<h2 className="
text-xl
font-bold
dark:text-white
">

Budget Progress 💰

</h2>


<p className="
text-sm
text-slate-500
mt-1
">

Create budgets to track spending

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



className="

rounded-[32px]

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

mb-7

">


<div

className="
w-12

h-12

rounded-2xl

bg-purple-100

dark:bg-purple-500/20

flex

items-center

justify-center

text-purple-600

"

>

<Target/>

</div>




<div>

<h2 className="
text-xl
font-bold
dark:text-white
">

Budget Progress 💰

</h2>


<p className="
text-sm
text-slate-500
">

Monitor your monthly limits

</p>


</div>


</div>








<div className="
space-y-7
">


{


budgets.map((budget,index)=>{



const amount =
Number(budget.amount) || 0;



const spent =
Number(budget.spent) || 0;




const percentage =

amount > 0

?

Math.min(
Math.round(
(spent/amount)*100
),
100
)

:

0;




const remaining =

Math.max(
amount-spent,
0
);





const exceeded =
spent>amount;






return(


<motion.div


key={budget.id || index}


initial={{
opacity:0,
x:-20
}}


animate={{
opacity:1,
x:0
}}



transition={{

delay:index*.1

}}



className="space-y-3"

>



<div className="
flex

justify-between

items-center

"

>



<div>


<h3

className="
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

mt-1

"

>


₹{spent.toLocaleString()}

/

₹{amount.toLocaleString()}


</p>


</div>






<div

className={`

px-3

py-1

rounded-full

text-xs

font-bold


${

exceeded

?

"bg-red-100 text-red-600 dark:bg-red-500/20"

:

"bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20"

}

`

}

>


{percentage}%


</div>





</div>









<div

className="
h-4

rounded-full

bg-slate-200

dark:bg-slate-800

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



className={`

h-full

rounded-full


${

exceeded

?

"bg-gradient-to-r from-red-500 to-rose-600"

:

"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"

}

`

}



/>


</div>









<div

className={`

flex

items-center

gap-2

text-sm

font-semibold


${

exceeded

?

"text-red-500"

:

"text-emerald-500"

}

`

}

>


{

exceeded

?

<>

<AlertTriangle size={18}/>

Over budget by ₹

{(spent-amount).toLocaleString()}

</>


:

<>

<CheckCircle size={18}/>

₹{remaining.toLocaleString()} remaining

</>


}



</div>





</motion.div>



)


})



}



</div>




</motion.div>


)

}



export default BudgetProgress;