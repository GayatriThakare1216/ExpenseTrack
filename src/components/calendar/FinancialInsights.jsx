import {motion} from "framer-motion";

import {
Sparkles,
Wallet,
TrendingUp,
TrendingDown,
Lightbulb,
Target,
BadgeCheck
} from "lucide-react";






function FinancialInsights({

transactions=[]

}){






if(!transactions.length){


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

gap-4

"

>


<div

className="
w-14

h-14

rounded-2xl

bg-purple-100

dark:bg-purple-500/20

flex

items-center

justify-center

text-purple-600

"

>

<Sparkles size={28}/>

</div>




<div>


<h2

className="
text-xl

font-bold

dark:text-white

"

>

AI Financial Insights 🤖

</h2>



<p

className="
text-sm

text-slate-500

"

>

Add transactions to generate insights

</p>



</div>


</div>



</motion.div>


)

}









const income =

transactions

.filter(item=>

item.type==="income"

)

.reduce(

(sum,item)=>

sum+Number(item.amount),

0

);







const expense =

transactions

.filter(item=>

item.type==="expense"

)

.reduce(

(sum,item)=>

sum+Number(item.amount),

0

);







const saving =

income-expense;








const categories={};




transactions

.filter(item=>

item.type==="expense"

)

.forEach(item=>{


categories[item.category]=

(categories[item.category] || 0)

+

Number(item.amount);



});







const highestCategory =

Object.entries(categories)

.sort(

(a,b)=>b[1]-a[1]

)[0];








const savingRate =

income>0

?

Math.round(

(saving/income)*100

)

:

0;








const insights=[


{


icon:Wallet,

title:"Total Savings",

text:

saving>=0

?

`You saved ₹${saving.toLocaleString()}`

:

`You spent ₹${Math.abs(saving).toLocaleString()} more than income`



},





{


icon:

highestCategory

?

TrendingDown

:

Target,


title:"Highest Expense",


text:

highestCategory

?

`${highestCategory[0]} category has ₹${highestCategory[1].toLocaleString()} spending`

:

"No expense data available"



},






{


icon:

savingRate>=30

?

BadgeCheck

:

Lightbulb,


title:"Financial Health",


text:

savingRate>=30

?

"Excellent money management 🚀"

:

"Try saving at least 30% of income"



}



];









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

rounded-[36px]

p-8


bg-gradient-to-br

from-indigo-600

via-purple-600

to-pink-500


text-white

shadow-2xl

"

>





<div

className="
absolute

right-0

top-0

w-80

h-80

rounded-full

bg-white/20

blur-[100px]

"

/>








<div className="relative">





<div

className="
flex

items-center

justify-between

flex-wrap

gap-5

mb-8

"

>



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

bg-white/20

backdrop-blur-xl

flex

items-center

justify-center

"

>

<Sparkles size={30}/>

</div>





<div>


<h2

className="
text-2xl

font-black

"

>

AI Financial Insights 🤖

</h2>



<p

className="
text-white/70

text-sm

"

>

Smart analysis of your money

</p>


</div>



</div>









<div

className="
px-5

py-3

rounded-2xl

bg-white/20

backdrop-blur-xl

"

>


<p className="
text-xs
text-white/70
">

Saving Score

</p>


<h3 className="
text-2xl

font-black

"

>

{savingRate}%

</h3>


</div>





</div>









<div

className="
grid

grid-cols-1

md:grid-cols-3

gap-5

"

>


{

insights.map((item,index)=>{


const Icon=item.icon;



return(


<motion.div


key={index}


initial={{

opacity:0,

y:20

}}


animate={{

opacity:1,

y:0

}}


transition={{

delay:index*.15

}}



className="

rounded-3xl

p-5

bg-white/15

backdrop-blur-xl

border

border-white/20

"

>


<div

className="
w-11

h-11

rounded-xl

bg-white/20

flex

items-center

justify-center

mb-4

"

>


<Icon size={22}/>


</div>




<h3

className="
font-bold

"

>

{item.title}

</h3>




<p

className="
text-sm

text-white/80

mt-2

leading-6

"

>

{item.text}

</p>



</motion.div>



)


})


}



</div>






</div>




</motion.div>


)

}



export default FinancialInsights;