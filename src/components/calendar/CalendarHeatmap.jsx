import {motion} from "framer-motion";
import {
Flame,
TrendingDown,
TrendingUp
} from "lucide-react";



function CalendarHeatmap({

transactions,

currentDate

}){



const year =
currentDate.getFullYear();



const month =
currentDate.getMonth();





const daysInMonth =
new Date(
year,
month+1,
0
).getDate();





const days=[];


for(let i=1;i<=daysInMonth;i++){


days.push(

new Date(
year,
month,
i
)

);


}








const getDayData=(date)=>{


const dayTransactions =

transactions.filter(item=>

new Date(item.date)
.toDateString()
===
date.toDateString()

);



const income =

dayTransactions

.filter(item=>

item.type==="income"

)

.reduce(

(sum,item)=>

sum+Number(item.amount),

0

);





const expense =

dayTransactions

.filter(item=>

item.type==="expense"

)

.reduce(

(sum,item)=>

sum+Number(item.amount),

0

);



return{

income,

expense

};


};









const getIntensity=(expense)=>{


if(expense===0)

return "bg-slate-200 dark:bg-slate-800";



if(expense<1000)

return "bg-rose-200 dark:bg-rose-900/40";



if(expense<5000)

return "bg-rose-400 dark:bg-rose-700";



if(expense<10000)

return "bg-rose-500 dark:bg-rose-600";



return "bg-red-700 dark:bg-red-500";

};









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




<div

className="
flex

items-center

gap-4

"

>



<div

className="
w-12

h-12

rounded-2xl

bg-orange-100

dark:bg-orange-500/20

flex

items-center

justify-center

text-orange-500

"

>

<Flame/>

</div>




<div>


<h2

className="
text-xl

font-bold

dark:text-white

"

>

Financial Activity Heatmap 🔥

</h2>


<p

className="
text-sm

text-slate-500

"

>

Your spending pattern this month

</p>


</div>



</div>









<div

className="
grid

grid-cols-7

gap-3

mt-8

"

>



{

days.map(day=>{


const {

income,

expense

}=getDayData(day);




return(



<motion.div


key={day.toISOString()}


whileHover={{

scale:1.15,

y:-4

}}



title={

`${day.toLocaleDateString()}

Income ₹${income}

Expense ₹${expense}`

}



className="
flex

justify-center

cursor-pointer

"

>



<div


className={`

w-9

h-9

rounded-xl

shadow-lg

transition-all

${

income>expense && expense===0

?

"bg-emerald-400 shadow-emerald-400/40"

:

getIntensity(expense)

}

`}


/>



</motion.div>



)


})

}



</div>









<div

className="
flex

flex-wrap

gap-6

mt-8

text-sm

"

>


<div

className="
flex

items-center

gap-2

text-slate-500

"

>


<span

className="
w-3

h-3

rounded-full

bg-emerald-400

"

/>


Income Day


</div>







<div

className="
flex

items-center

gap-2

text-slate-500

"

>


<span

className="
w-3

h-3

rounded-full

bg-rose-500

"

/>


Expense Day


</div>







<div

className="
flex

items-center

gap-2

text-slate-500

"

>


<span

className="
w-3

h-3

rounded-full

bg-red-700

"

/>


High Spending


</div>



</div>








<div

className="
mt-7

grid

grid-cols-1

sm:grid-cols-2

gap-4

"

>



<div

className="
rounded-2xl

p-4

bg-emerald-50

dark:bg-emerald-500/10

flex

items-center

gap-3

"

>


<TrendingUp

className="text-emerald-500"

/>


<p

className="
text-sm

text-slate-600

dark:text-slate-300

"

>

Green days represent positive cash flow

</p>


</div>







<div

className="
rounded-2xl

p-4

bg-rose-50

dark:bg-rose-500/10

flex

items-center

gap-3

"

>


<TrendingDown

className="text-rose-500"

/>



<p

className="
text-sm

text-slate-600

dark:text-slate-300

"

>

Darker red means higher spending

</p>


</div>




</div>






</motion.div>


)

}



export default CalendarHeatmap;