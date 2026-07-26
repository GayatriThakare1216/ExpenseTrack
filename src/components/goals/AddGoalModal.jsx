import {X, Target, Zap, Star, Flag} from "lucide-react";

import {motion, AnimatePresence} from "framer-motion";

import {useForm} from "react-hook-form";

import {zodResolver} from "@hookform/resolvers/zod";

import {z} from "zod";

import toast from "react-hot-toast";

import useGoalStore from "../../store/goalStore";





const goalSchema = z.object({

title:
z.string()
.min(3,"Goal name must contain 3 characters"),


amount:
z.coerce.number()
.min(100,"Minimum amount should be ₹100"),


deadline:
z.string()
.min(1,"Please select deadline"),


priority:
z.string()

});








function AddGoalModal({
open,
setOpen
}){



const {
addGoal
}=useGoalStore();





const {

register,

handleSubmit,

reset,

setValue,

watch,

formState:{
errors
}

}=useForm({

resolver:zodResolver(goalSchema),

defaultValues:{
priority:"Medium"
}

});





const priority =
watch("priority");






const submit=(data)=>{


addGoal({

title:data.title,

amount:Number(data.amount),

deadline:data.deadline,

priority:data.priority


});



toast.success(
"Financial goal created 🎯"
);



reset();


setOpen(false);


};






const priorities=[

{
name:"High",
icon:Zap,
color:"text-red-500"
},


{
name:"Medium",
icon:Star,
color:"text-yellow-500"
},


{
name:"Low",
icon:Flag,
color:"text-green-500"
}


];






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



transition={{

duration:.3

}}



className="

w-full

max-w-lg


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

w-12

h-12


rounded-2xl


bg-indigo-100


dark:bg-indigo-900/40


flex

items-center

justify-center


text-indigo-600

"

>

<Target/>

</div>




<div>


<h2

className="

text-2xl

font-bold

dark:text-white

"

>

Create Goal

</h2>


<p

className="

text-sm

text-slate-500

"

>

Plan your financial future

</p>


</div>


</div>





<button

onClick={()=>setOpen(false)}

className="
dark:text-white
"

>

<X/>

</button>



</div>









<form

onSubmit={
handleSubmit(submit)
}


className="

space-y-5

mt-6

"

>







{/* Title */}



<div>


<label

className="

text-sm

font-medium

dark:text-white

"

>

Goal Name

</label>


<input


placeholder="Example: Buy Laptop"


{...register("title")}


className="

mt-2

w-full

p-3

rounded-xl


border

border-slate-200


dark:bg-slate-800

dark:border-slate-700

dark:text-white

outline-none


focus:ring-2

focus:ring-indigo-500

"

/>



{
errors.title &&

<p className="text-red-500 text-sm mt-1">

{errors.title.message}

</p>

}


</div>










{/* Amount */}



<div>


<label

className="
text-sm
font-medium
dark:text-white
"

>

Target Amount

</label>



<input


type="number"


placeholder="50000"


{...register("amount")}


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


{
errors.amount &&

<p className="text-red-500 text-sm mt-1">

{errors.amount.message}

</p>

}


</div>









{/* Date */}


<div>


<label

className="
text-sm
font-medium
dark:text-white
"

>

Deadline

</label>


<input


type="date"


{...register("deadline")}


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









{/* Priority */}



<div>


<label

className="
text-sm
font-medium
dark:text-white
"

>

Priority

</label>





<div className="grid grid-cols-3 gap-3 mt-3">


{

priorities.map((item)=>{


const Icon=item.icon;


return(


<button


type="button"


key={item.name}


onClick={()=>setValue(
"priority",
item.name
)}


className={`

p-3

rounded-xl


border


flex

flex-col

items-center

gap-2


transition


${

priority===item.name

?

"border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30"

:

"border-slate-200 dark:border-slate-700"

}

`}

>


<Icon

size={22}

className={item.color}

/>


<span className="
text-sm
dark:text-white
">

{item.name}

</span>


</button>


)


})

}


</div>


</div>










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

"


>

Create Goal 🎯

</button>






</form>







</motion.div>





</div>


)


}


</AnimatePresence>


)

}



export default AddGoalModal;