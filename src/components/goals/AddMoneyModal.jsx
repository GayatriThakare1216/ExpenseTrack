import {
X,
Wallet,
Plus,
CheckCircle
} from "lucide-react";


import {
motion,
AnimatePresence
} from "framer-motion";


import {
useState
} from "react";


import toast from "react-hot-toast";


import useGoalStore from "../../store/goalStore";





function AddMoneyModal({
open,
setOpen,
goal
}){



const {
addMoneyToGoal
}=useGoalStore();



const [amount,setAmount]=useState("");






if(!goal)
return null;






const currentSaved =
Number(goal.saved || 0);




const newAmount =
Number(amount || 0);




const progress =

Math.min(

Math.round(

((currentSaved + newAmount)

/

Number(goal.amount))

*

100

),

100

);





const completed =

currentSaved >= Number(goal.amount);







const quickAmounts=[

500,

1000,

5000,

10000

];








const submit=(e)=>{


e.preventDefault();





if(newAmount<=0){

toast.error(
"Enter valid amount"
);

return;

}





addMoneyToGoal(

goal.id,

newAmount

);






if(
currentSaved + newAmount >= Number(goal.amount)
){

toast.success(
"🎉 Goal completed!"
);

}

else{

toast.success(
"Money added successfully 💰"
);

}





setAmount("");

setOpen(false);



};










return(


<AnimatePresence>


{

open && (


<div


className="

fixed

inset-0

z-50


flex

items-center

justify-center


bg-black/50


backdrop-blur-sm


px-4

"


>


<motion.div



initial={{

opacity:0,

scale:.85,

y:40

}}


animate={{

opacity:1,

scale:1,

y:0

}}


exit={{

opacity:0,

scale:.85

}}


className="

w-full

max-w-md


bg-white


dark:bg-slate-900


rounded-3xl


p-6


shadow-2xl


border

border-slate-200


dark:border-slate-800

"


>









{/* Header */}


<div className="flex justify-between items-center">


<div className="flex items-center gap-3">


<div

className="

h-12

w-12


rounded-2xl


bg-green-100


dark:bg-green-900/30


flex

items-center

justify-center


text-green-600

"

>

<Wallet/>

</div>



<div>


<h2

className="

text-xl

font-bold

dark:text-white

"

>

Add Money

</h2>


<p

className="

text-sm

text-slate-500

"

>

{goal.title}

</p>


</div>


</div>






<button

onClick={()=>setOpen(false)}

>

<X

className="dark:text-white"

/>

</button>


</div>









{/* Current Progress */}


<div

className="

mt-6

p-4

rounded-2xl


bg-slate-50


dark:bg-slate-800

"


>


<div className="flex justify-between">


<span className="
text-sm
text-slate-500
">

Current Saving

</span>


<span className="
font-bold
dark:text-white
">

₹{currentSaved.toLocaleString()}

</span>


</div>






<div

className="

mt-3

h-3

bg-slate-200

dark:bg-slate-700

rounded-full

overflow-hidden

"

>


<motion.div

initial={{
width:0
}}


animate={{

width:`${progress}%`

}}


transition={{
duration:.8
}}


className="

h-full

bg-gradient-to-r

from-green-500

to-emerald-500

"

/>


</div>




<p className="
mt-2
text-sm
text-green-600
font-semibold
">

{progress}% Complete

</p>


</div>









<form

onSubmit={submit}

className="
mt-6
space-y-5
"

>








{/* Amount */}



<div>


<label

className="
text-sm
font-medium
dark:text-white
"

>

Add Amount

</label>


<input


type="number"


value={amount}


onChange={(e)=>
setAmount(e.target.value)
}


placeholder="Enter amount"


className="

mt-2

w-full

p-3

rounded-xl


border


dark:bg-slate-800


dark:border-slate-700


dark:text-white

"

/>


</div>









{/* Quick Buttons */}



<div>


<p

className="
text-sm
text-slate-500
mb-3
"

>

Quick Add

</p>



<div className="grid grid-cols-4 gap-2">


{

quickAmounts.map((money)=>(


<button


key={money}


type="button"


onClick={()=>setAmount(money)}


className="

py-2

rounded-xl


bg-indigo-50


dark:bg-indigo-900/30


text-indigo-600


text-sm


font-semibold


hover:bg-indigo-100


transition

"

>


+{money}

</button>


))


}


</div>


</div>









{/* Complete Message */}



{

completed && (


<div

className="

flex

items-center

gap-2


p-3


rounded-xl


bg-green-100


text-green-700

"

>


<CheckCircle size={20}/>


Goal already completed 🎉


</div>


)

}








<button


className="

w-full


bg-indigo-600


hover:bg-indigo-700


text-white


py-3


rounded-xl


font-semibold


transition


flex

items-center

justify-center

gap-2

"

>


<Plus size={18}/>

Add Money

</button>







</form>








</motion.div>



</div>


)


}


</AnimatePresence>


)

}



export default AddMoneyModal;