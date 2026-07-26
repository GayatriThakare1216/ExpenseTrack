import {
AreaChart,
Area,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer
} from "recharts";


import {motion} from "framer-motion";

import {
TrendingUp
} from "lucide-react";





const data=[

{
month:"Jan",
expense:4000
},

{
month:"Feb",
expense:6500
},

{
month:"Mar",
expense:4500
},

{
month:"Apr",
expense:9000
},

{
month:"May",
expense:7000
},

{
month:"Jun",
expense:11000
},

{
month:"Jul",
expense:8500
},

{
month:"Aug",
expense:12000
},

{
month:"Sep",
expense:9500
},

{
month:"Oct",
expense:14000
},

{
month:"Nov",
expense:10000
},

{
month:"Dec",
expense:16000
}

];






function ExpenseChart(){



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

relative

overflow-hidden

rounded-[32px]


p-6


bg-white/80


dark:bg-slate-900/80


backdrop-blur-xl


border

border-slate-200


dark:border-slate-800


shadow-xl


hover:shadow-2xl


transition-all


"



>





{/* Glow */}


<div

className="

absolute

-right-20

-top-20


w-52

h-52


rounded-full


bg-indigo-500/20


blur-3xl

"

/>







<div className="relative z-10">





{/* Header */}



<div className="

flex

justify-between

items-start

mb-6

"

>


<div>


<div className="

flex

items-center

gap-2

"

>





<h2 className="

text-2xl

font-bold

dark:text-white

">

Expense Trend

</h2>




<TrendingUp

size={20}

className="text-emerald-500"

/>


</div>




<p className="

text-sm

text-slate-500

mt-1

">

Monthly spending overview

</p>


</div>






<div className="

px-4

py-2

rounded-full


bg-indigo-100


dark:bg-indigo-500/20


text-indigo-600


dark:text-indigo-300


text-sm


font-semibold

"

>


2026

</div>





</div>









{/* Chart */}



<div

className="

h-[360px]

"

>


<ResponsiveContainer

width="100%"

height="100%"

>


<AreaChart

data={data}

margin={{

top:20,

right:10,

left:-20,

bottom:0

}}

>




<defs>



<linearGradient

id="expenseArea"


x1="0"

y1="0"

x2="0"

y2="1"

>


<stop

offset="0%"

stopColor="#6366f1"

stopOpacity={0.45}

/>



<stop

offset="100%"

stopColor="#6366f1"

stopOpacity={0.05}

/>


</linearGradient>



</defs>







<CartesianGrid


strokeDasharray="5 5"


strokeOpacity={0.1}


/>







<XAxis


dataKey="month"


axisLine={false}


tickLine={false}


tick={{

fill:"#94a3b8",

fontSize:12

}}



/>







<YAxis


axisLine={false}


tickLine={false}


tick={{

fill:"#94a3b8",

fontSize:12

}}



/>









<Tooltip



contentStyle={{


background:"#020617",


border:"none",


borderRadius:"18px",


padding:"14px",


color:"#fff"


}}



formatter={(value)=>[

`₹${value.toLocaleString("en-IN")}`,

"Expense"

]}


/>









<Area


type="monotone"


dataKey="expense"


stroke="#6366f1"


strokeWidth={4}


fill="url(#expenseArea)"



dot={{

r:5,

fill:"#6366f1",

stroke:"#fff",

strokeWidth:2

}}



activeDot={{

r:8

}}



animationDuration={1800}



/>






</AreaChart>


</ResponsiveContainer>


</div>









{/* Insight */}



<div


className="


mt-5


flex


items-center


justify-between


rounded-2xl


p-4


bg-slate-100


dark:bg-slate-800/70



"


>


<div>


<p className="

text-xs

text-slate-500

">

Highest Spending Month

</p>



<h3 className="

font-bold

dark:text-white

mt-1

">

December

</h3>


</div>






<div className="text-right">


<p className="

text-xs

text-slate-500

">

Amount

</p>


<h3 className="

font-bold

text-indigo-600

dark:text-indigo-400

mt-1

">

₹16,000

</h3>


</div>



</div>






</div>




</motion.div>


)


}



export default ExpenseChart;