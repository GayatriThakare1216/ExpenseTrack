import {motion} from "framer-motion";

import {
CalendarDays,
TrendingDown,
TrendingUp,
Minus
} from "lucide-react";





function MonthComparison({

transactions,

date

}){






const getMonthExpense=(targetDate)=>{


return transactions

.filter(item=>{


const d=new Date(item.date);



return(

d.getMonth()
===
targetDate.getMonth()

&&

d.getFullYear()
===
targetDate.getFullYear()

&&

item.type==="expense"

)


})


.reduce(

(sum,item)=>

sum+Number(item.amount),

0

);


};







const currentExpense =

getMonthExpense(date);





const previousDate =

new Date(

date.getFullYear(),

date.getMonth()-1,

1

);





const previousExpense =

getMonthExpense(previousDate);








let percentage=0;



if(previousExpense>0){


percentage =

Math.round(

((previousExpense-currentExpense)
/previousExpense)

*

100

);


}






const improved =
percentage>0;



const same =
percentage===0;








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

bg-indigo-100

dark:bg-indigo-500/20

flex

items-center

justify-center

text-indigo-600

"

>

<CalendarDays size={28}/>


</div>






<div>


<h2

className="
text-xl

font-bold

dark:text-white

"

>

Monthly Comparison

</h2>



<p

className="
text-sm

text-slate-500

"

>

Spending performance

</p>



</div>



</div>









<div

className="
grid

grid-cols-1

sm:grid-cols-2

gap-5

mt-7

"

>




<MonthCard

title="This Month"

value={currentExpense}

percent={

previousExpense>0

?

Math.round(

(currentExpense/previousExpense)*100

)

:

0

}

/>







<MonthCard

title="Last Month"

value={previousExpense}

percent={100}

/>




</div>









<div


className={`

mt-6

rounded-2xl

p-5

flex

items-center

gap-4


${

improved

?

"bg-emerald-50 dark:bg-emerald-500/10"

:

same

?

"bg-slate-100 dark:bg-slate-800"

:

"bg-red-50 dark:bg-red-500/10"

}

`

}

>



{


improved

?

<TrendingDown

className="text-emerald-500"

/>

:

same

?

<Minus

className="text-slate-500"

/>

:

<TrendingUp

className="text-red-500"

/>


}






<p

className={`

font-bold


${

improved

?

"text-emerald-600"

:

same

?

"text-slate-500"

:

"text-red-500"

}

`

}

>


{


improved

?

`${percentage}% less spending this month 🎉`

:

same

?

"No spending change"

:

`${Math.abs(percentage)}% more spending`

}




</p>



</div>







</motion.div>



)

}









function MonthCard({

title,

value,

percent

}){


return(


<div

className="

rounded-3xl

p-5

bg-slate-100

dark:bg-slate-800

"

>


<p

className="
text-sm

text-slate-500

"

>

{title}

</p>




<h3

className="
text-3xl

font-black

dark:text-white

mt-2

"

>

₹{value.toLocaleString()}

</h3>







<div

className="
mt-5

h-3

rounded-full

bg-slate-300

dark:bg-slate-700

overflow-hidden

"

>



<motion.div


initial={{

width:0

}}



animate={{

width:`${Math.min(percent,100)}%`

}}



transition={{

duration:1

}}



className="
h-full

rounded-full

bg-gradient-to-r

from-indigo-500

to-purple-500

"

/>



</div>






</div>


)

}




export default MonthComparison;