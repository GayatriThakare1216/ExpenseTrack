import {
  Target,
  Wallet,
  CheckCircle,
  TrendingUp
} from "lucide-react";

import { motion } from "framer-motion";



function GoalStats({goals}){


const totalGoals = goals.length;



const totalTarget =
goals.reduce(
(sum,goal)=>
sum + Number(goal.amount),
0
);



const totalSaved =
goals.reduce(
(sum,goal)=>
sum + Number(goal.saved || 0),
0
);



const completed =
goals.filter(
(goal)=>
Number(goal.saved)>=Number(goal.amount)
).length;




const progress =
totalTarget > 0
?
Math.round(
(totalSaved/totalTarget)*100
)
:
0;





const stats=[


{
title:"Total Goals",
value:totalGoals,
icon:Target,

gradient:
"from-indigo-500 to-purple-600",

iconBg:
"bg-indigo-100 dark:bg-indigo-900/40",

iconColor:
"text-indigo-600"

},



{
title:"Target Amount",
value:`₹${totalTarget.toLocaleString()}`,
icon:Wallet,

gradient:
"from-blue-500 to-cyan-500",

iconBg:
"bg-blue-100 dark:bg-blue-900/40",

iconColor:
"text-blue-600"

},



{
title:"Saved Amount",
value:`₹${totalSaved.toLocaleString()}`,
icon:TrendingUp,

gradient:
"from-emerald-500 to-green-600",

iconBg:
"bg-green-100 dark:bg-green-900/40",

iconColor:
"text-green-600"

},



{
title:"Completed",
value:completed,

icon:CheckCircle,

gradient:
"from-orange-500 to-red-500",

iconBg:
"bg-orange-100 dark:bg-orange-900/40",

iconColor:
"text-orange-600"

}



];





return(


<div

className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-4
gap-6
"

>



{

stats.map((item,index)=>{


const Icon=item.icon;



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
delay:index*0.12,
duration:0.5
}}



whileHover={{
y:-8,
scale:1.03
}}



className="

relative

overflow-hidden


rounded-3xl


bg-white

dark:bg-slate-900


border

border-slate-200

dark:border-slate-800


p-6


shadow-sm


hover:shadow-2xl


transition

"



>





{/* Background Glow */}


<div

className={`

absolute

-right-10

-top-10


w-32

h-32


rounded-full


blur-3xl


bg-gradient-to-br

${item.gradient}

opacity-20

`}

/>







<div className="
relative
">


{/* Icon */}


<div

className={`

w-14

h-14


rounded-2xl


flex

items-center

justify-center


${item.iconBg}

${item.iconColor}

mb-5

`}

>


<Icon size={28}/>


</div>







<p

className="
text-sm
font-medium
text-slate-500
dark:text-slate-400
"

>

{item.title}

</p>







<h2

className="

text-3xl

font-bold

mt-2


dark:text-white

"

>

{item.value}

</h2>






{/* mini progress for saved */}


{

item.title==="Saved Amount" &&

(

<div className="mt-4">


<div className="
flex
justify-between
text-xs
text-slate-500
mb-2
">


<span>
Progress
</span>


<span>
{progress}%
</span>


</div>



<div className="
h-2
bg-slate-200
dark:bg-slate-800
rounded-full
overflow-hidden
">


<motion.div

initial={{
width:0
}}

animate={{
width:`${progress}%`
}}

transition={{
duration:1
}}


className={`

h-full

rounded-full

bg-gradient-to-r

${item.gradient}

`}

/>


</div>


</div>


)


}




</div>




</motion.div>



)


})

}



</div>


)

}


export default GoalStats;