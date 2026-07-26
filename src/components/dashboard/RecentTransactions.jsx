import {
ShoppingBag,
Utensils,
Car,
Wallet,
Briefcase,
ArrowRight,
Receipt,
TrendingUp
} from "lucide-react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


function RecentTransactions({transactions}){


const navigate = useNavigate();



const icons={

Food:Utensils,
food:Utensils,

Shopping:ShoppingBag,
shopping:ShoppingBag,

Travel:Car,
travel:Car,

Salary:Briefcase,

Work:Wallet

};





if(!transactions || transactions.length===0){


return(

<motion.div

initial={{
opacity:0,
scale:.95
}}

animate={{
opacity:1,
scale:1
}}

className="

bg-white

dark:bg-slate-900

rounded-3xl

p-10

border

dark:border-slate-800

text-center

shadow-xl

"

>


<div className="

mx-auto

w-20

h-20

rounded-3xl

bg-gradient-to-br

from-indigo-500

to-purple-600

text-white

flex

items-center

justify-center

shadow-xl

">

<Receipt size={40}/>

</div>




<h2 className="
mt-5
text-xl
font-bold
dark:text-white
">

No Transactions Yet

</h2>


<p className="
text-slate-500
mt-2
">

Start adding income and expenses to track your money.

</p>



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

relative

overflow-hidden

bg-white/80

dark:bg-slate-900/80

backdrop-blur-xl

border

dark:border-slate-800

rounded-3xl

p-6

shadow-xl

"


>



<div className="

absolute

right-0

top-0

w-40

h-40

bg-indigo-500/20

blur-3xl

rounded-full

"/>







<div className="

relative

flex

flex-col

sm:flex-row

sm:items-center

justify-between

gap-4

mb-7

">


<div>


<div className="
flex
items-center
gap-3
">

<h2 className="
text-2xl
font-bold
dark:text-white
">

Recent Transactions

</h2>


<span className="
px-3
py-1
rounded-full
text-xs
bg-indigo-100
text-indigo-600
dark:bg-indigo-500/20
">

{transactions.length}

</span>


</div>



<p className="
text-sm
text-slate-500
mt-1
">

Your latest financial activity

</p>


</div>






<button

onClick={()=>navigate("/transactions")}

className="

flex

items-center

gap-2

text-indigo-600

font-semibold

hover:gap-3

transition-all

"

>

View All

<ArrowRight size={17}/>

</button>



</div>







<div className="
space-y-4
">


{

transactions
.slice(0,5)
.map((item,index)=>{


const Icon =
icons[item.category]
||
Wallet;



const isIncome =
item.type==="income";



return(



<motion.div


key={item.id}


initial={{

opacity:0,

x:-30

}}


animate={{

opacity:1,

x:0

}}


transition={{

delay:index*.1

}}



whileHover={{

scale:1.02,

x:6

}}


className="

flex

flex-col

sm:flex-row

sm:items-center

justify-between

gap-4


p-5


rounded-3xl


bg-slate-50

dark:bg-slate-800


hover:shadow-lg


transition

"


>




<div className="
flex
items-center
gap-4
">


<div className={`
w-14
h-14
rounded-2xl

flex
items-center
justify-center

text-white

shadow-lg

${
isIncome

?

"bg-gradient-to-br from-green-400 to-emerald-600"

:

"bg-gradient-to-br from-red-400 to-rose-600"

}

`}>

<Icon size={25}/>


</div>





<div>


<h3 className="
font-bold
dark:text-white
">

{item.title}

</h3>


<div className="
flex
items-center
gap-2
mt-2
">


<span className="
text-xs
px-3
py-1
rounded-full

bg-white

dark:bg-slate-700

text-slate-500
">

{item.category}

</span>


</div>



<p className="
text-xs
text-slate-400
mt-2
">

{
item.date

?

new Date(item.date)
.toLocaleDateString(
"en-IN",
{
day:"2-digit",
month:"short",
year:"numeric"
}
)

:

"Today"

}


</p>



</div>


</div>









<div className="
sm:text-right
">


<p className={`

text-xl

font-bold


${

isIncome

?

"text-emerald-500"

:

"text-rose-500"

}

`}>

{

isIncome
?
"+"
:
"-"

}

₹
{

Number(item.amount)
.toLocaleString()

}


</p>



<div className="
flex
items-center
gap-1
sm:justify-end
mt-2
text-xs
font-semibold
">


<TrendingUp size={14}/>


{

isIncome

?
"Income"

:
"Expense"

}


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


export default RecentTransactions;