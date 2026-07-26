import {motion} from "framer-motion";
import {
Target,
Calendar,
Trash,
CheckCircle,
Clock
} from "lucide-react";

import toast from "react-hot-toast";

import useGoalStore from "../../store/goalStore";
import {useState} from "react";
import AddMoneyModal from "./AddMoneyModal";

function GoalCard({goal}){


const {
deleteGoal
}=useGoalStore();



const progress =
Math.min(
Math.round(
(goal.saved / goal.amount)*100
),
100
);


const completed =
progress >=100;


const remaining =
Math.max(
goal.amount-goal.saved,
0
);

const [open,setOpen]=useState(false);

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
y:-8
}}


className="

bg-white

dark:bg-slate-900

border

dark:border-slate-800

rounded-3xl

p-6

shadow-sm

hover:shadow-xl

transition

"

>


<div className="
flex
justify-between
">


<div className="
flex
gap-3
items-center
">


<div className="
p-3
rounded-xl
bg-indigo-100
dark:bg-indigo-900/40
text-indigo-600
">

<Target/>

</div>


<div>

<h2 className="
font-bold
text-lg
dark:text-white
">

{goal.title}

</h2>


<p className="
text-sm
text-slate-500
">

{goal.priority} Priority

</p>

<div
className={`
mt-2
inline-flex
items-center
gap-1
px-3
py-1
rounded-full
text-xs
font-semibold

${
completed

?

"bg-green-100 text-green-600"

:

"bg-indigo-100 text-indigo-600"

}

`}
>

{
completed

?

<>
<CheckCircle size={14}/>
Completed
</>

:

<>
<Clock size={14}/>
In Progress
</>

}

</div>

</div>


</div>



<button

onClick={()=>{

deleteGoal(goal.id);

toast.success(
"Goal deleted"
);

}}

className="
text-red-500
"

>

<Trash size={20}/>

</button>



</div>





{/* Money Overview */}

<div

className="
mt-5
flex
justify-between
"

>

<p className="
mt-3
text-sm
text-slate-500
">

Target Amount:
<span className="
font-semibold
dark:text-white
ml-2
">

₹{goal.amount.toLocaleString()}

</span>

</p>


<div>

<p className="
text-xs
text-slate-500
">

Saved

</p>


<h3 className="
font-bold
text-xl
dark:text-white
">

₹{(goal.saved || 0).toLocaleString()}

</h3>


</div>





<div

className="
text-right
"

>


<p className="
text-xs
text-slate-500
">

Remaining

</p>


<h3 className="
font-bold
text-xl
text-indigo-600
">

₹{remaining.toLocaleString()}

</h3>


</div>



</div>





{/* Progress */}


<div className="
mt-4
">


<div className="
h-3
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


className="
h-full
bg-gradient-to-r
from-indigo-500
to-purple-600
rounded-full
"

/>


</div>


<p className="
mt-2
text-sm
text-indigo-500
font-semibold
">

{Math.round(progress)}% Completed

</p>



</div>



<button

onClick={()=>setOpen(true)}

className="
mt-5

w-full

bg-indigo-600

text-white

py-3

rounded-xl

hover:bg-indigo-700

transition

"

>

Add Money

</button>


<div className="
mt-5
flex
items-center
gap-2
text-sm
text-slate-500
">


<Calendar size={16}/>

{goal.deadline}


</div>

<AddMoneyModal

open={open}

setOpen={setOpen}

goal={goal}

/>

</motion.div>


)

}


export default GoalCard;