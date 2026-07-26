import {
PieChart,
Pie,
Cell,
ResponsiveContainer,
Tooltip
} from "recharts";


import {
motion,
AnimatePresence
} from "framer-motion";


import {
Utensils,
ShoppingBag,
Car,
Home,
MoreHorizontal,
Wallet
} from "lucide-react";


import {
useState
} from "react";






function ExpensePieChart({data}){



const [showAll,setShowAll]=useState(false);





const COLORS=[

"#6366f1",
"#ec4899",
"#14b8a6",
"#f97316",
"#ef4444",
"#8b5cf6"

];







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

rounded-[32px]

p-8


bg-white/80


dark:bg-slate-900/80


border


border-slate-200


dark:border-slate-800


shadow-xl


text-center

"



>


<div className="

mx-auto

w-16

h-16

rounded-2xl


bg-indigo-100


dark:bg-indigo-500/20


flex

items-center

justify-center

text-indigo-600

"


>


<Wallet size={30}/>


</div>



<h2 className="

mt-5

text-xl

font-bold

dark:text-white

">

No Expense Data

</h2>



<p className="

text-sm

text-slate-500

mt-2

">

Add transactions to view spending analytics

</p>




</motion.div>


)

}








const total=data.reduce(

(sum,item)=>

sum+item.value,

0

);






const sortedData=[

...data

].sort(

(a,b)=>

b.value-a.value

);






const visibleData=

showAll

?

sortedData

:

sortedData.slice(0,3);








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


transition

"



>



{/* Glow */}


<div

className="

absolute

-right-20

-top-20


h-52

w-52


rounded-full


bg-purple-500/20


blur-3xl

"

/>








<div className="relative z-10">






{/* Header */}



<div className="

flex

justify-between

items-start

mb-5

"

>



<div>


<h2 className="

text-2xl

font-bold

dark:text-white

">

Expense Category

</h2>



<p className="

text-sm

text-slate-500

mt-1

">

Spending breakdown

</p>


</div>





<div className="

px-4

py-2


rounded-full


bg-purple-100


dark:bg-purple-500/20


text-purple-600


dark:text-purple-300


text-xs

font-semibold

">

Monthly

</div>



</div>









{/* Chart */}



<div className="

relative

h-[280px]

"

>


<ResponsiveContainer

width="100%"

height="100%"

>


<PieChart>



<Pie


data={data}


dataKey="value"


nameKey="name"


innerRadius={75}


outerRadius={105}


paddingAngle={5}


animationDuration={1500}



>



{

data.map((item,index)=>(


<Cell


key={index}


fill={

COLORS[index % COLORS.length]

}


/>


))


}



</Pie>





<Tooltip


contentStyle={{

background:"#020617",

border:"none",

borderRadius:"16px",

color:"#fff"

}}


formatter={(value)=>[

`₹${value.toLocaleString("en-IN")}`,

"Spent"

]}



/>






</PieChart>


</ResponsiveContainer>







{/* Center */}



<div

className="

absolute

inset-0


flex

flex-col

items-center

justify-center

pointer-events-none

"

>


<p className="

text-xs

text-slate-500

">

Total Spent

</p>


<h2 className="

text-3xl

font-bold

dark:text-white

mt-1

">

₹{total.toLocaleString("en-IN")}

</h2>



</div>





</div>









{/* Categories */}



<div className="

space-y-3

mt-5

"

>


<AnimatePresence>



{

visibleData.map((item,index)=>{


const Icon=

icons[item.name]

||

MoreHorizontal;





const percentage=

Math.round(

(item.value/total)*100

);






return(



<motion.div



key={item.name}



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



whileHover={{

scale:1.02

}}



className="

flex

items-center

justify-between


p-3


rounded-2xl


bg-slate-100


dark:bg-slate-800/70


"



>





<div className="

flex

items-center

gap-3

">


<div

className="

h-11

w-11


rounded-2xl


flex

items-center

justify-center


text-white


shadow-lg

"

style={{

background:

COLORS[index % COLORS.length]

}}

>


<Icon size={20}/>


</div>







<div>


<h3 className="

font-semibold

dark:text-white

">

{item.name}

</h3>



<p className="

text-xs

text-slate-500

">

₹{item.value.toLocaleString("en-IN")}

</p>


</div>




</div>







<span className="

font-bold

text-indigo-600


dark:text-indigo-400

">

{percentage}%

</span>




</motion.div>



)


})

}



</AnimatePresence>



</div>









{

data.length>3 &&

<button


onClick={()=>setShowAll(!showAll)}


className="

mt-5

w-full


py-3


rounded-2xl


bg-indigo-50


dark:bg-indigo-500/10


text-indigo-600


dark:text-indigo-400


font-semibold


hover:scale-[1.02]


transition

"


>


{

showAll

?

"Show Less ↑"

:

`+${data.length-3} More Categories ↓`

}


</button>


}




</div>




</motion.div>


)



}



export default ExpensePieChart;