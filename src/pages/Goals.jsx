import { motion } from "framer-motion";

import { useState } from "react";

import {
Target,
Plus,
Sparkles
} from "lucide-react";


import AddGoalModal from "../components/goals/AddGoalModal";

import GoalCard from "../components/goals/GoalCard";

import GoalsStats from "../components/goals/GoalsStats";

import useGoalStore from "../store/goalStore";



function Goals(){


const {
goals
}=useGoalStore();



const [open,setOpen]=useState(false);




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


transition={{
duration:.5
}}


className="
space-y-8
"


>






{/* HERO SECTION */}



<motion.div


initial={{
opacity:0,
y:-30
}}


animate={{
opacity:1,
y:0
}}


className="

relative

overflow-hidden

rounded-3xl

p-8

text-white


bg-gradient-to-br

from-indigo-600

via-purple-600

to-pink-600


shadow-2xl

"



>


{/* Glow */}


<div

className="

absolute

-right-20

-top-20


w-60

h-60


rounded-full


bg-white/20


blur-3xl

"

/>



<div

className="

absolute

-left-20

-bottom-20


w-40

h-40


rounded-full


bg-purple-300/20


blur-3xl

"

/>






<div className="
relative
z-10
">


<div className="
flex
items-center
gap-3
">


<div

className="

h-14

w-14


rounded-2xl


bg-white/20


backdrop-blur-md


flex

items-center

justify-center

"

>

<Sparkles size={30}/>

</div>





<div>

<p className="
text-indigo-100
">

Financial Goals

</p>



<h1 className="
text-4xl
font-bold
mt-1
">

Achieve Your Dreams 🎯

</h1>


</div>


</div>






<p className="

mt-5

max-w-xl

text-indigo-100

leading-relaxed

">

Create savings goals, track your progress and build better financial habits.

</p>




</div>



</motion.div>









{/* STATS */}


<GoalsStats

goals={goals}

/>



{/* GOALS HEADER */}



<div>


<div className="

flex

flex-col

sm:flex-row


justify-between

sm:items-center


gap-4


mb-6

"


>



<div>


<h2 className="

text-3xl

font-bold

dark:text-white

"

>

Your Goals

</h2>



<p className="

text-slate-500

mt-1

"

>

Track and complete your financial targets.

</p>


</div>







<motion.button



whileHover={{
scale:1.05
}}


whileTap={{
scale:.95
}}



onClick={()=>setOpen(true)}



className="

flex

items-center

justify-center


gap-2


bg-indigo-600


hover:bg-indigo-700


text-white


px-6

py-3


rounded-xl


shadow-lg


transition

"


>


<Plus size={20}/>


Add Goal


</motion.button>




</div>









{/* GOAL LIST */}





{


goals.length===0


?


<motion.div



initial={{
opacity:0,
scale:.9
}}


animate={{
opacity:1,
scale:1
}}


className="


bg-white


dark:bg-slate-900



border

border-slate-200

dark:border-slate-800



rounded-3xl



p-10



text-center



shadow-sm


"

>



<div className="

mx-auto

w-20

h-20


rounded-3xl


bg-indigo-100


dark:bg-indigo-900/30


flex

items-center

justify-center


text-indigo-600

"

>


<Target size={45}/>


</div>




<h3 className="

text-2xl

font-bold


dark:text-white


mt-5

"

>

No Goals Yet 🚀

</h3>



<p className="

text-slate-500


mt-2

"

>

Start your first financial goal and track your savings journey.

</p>




<button

onClick={()=>setOpen(true)}


className="

mt-6

bg-indigo-600

text-white


px-6

py-3


rounded-xl


"

>

Create First Goal

</button>



</motion.div>




:



<motion.div


initial={{
opacity:0
}}


animate={{
opacity:1
}}


className="

grid

grid-cols-1

lg:grid-cols-2


gap-6

"


>


{


goals.map((goal,index)=>(


<motion.div


key={goal.id}


initial={{
opacity:0,
y:30
}}


animate={{
opacity:1,
y:0
}}


transition={{
delay:index*.1
}}



>


<GoalCard

goal={goal}

/>



</motion.div>



))


}




</motion.div>



}





</div>







<AddGoalModal

open={open}

setOpen={setOpen}

/>






</motion.div>


)

}



export default Goals;