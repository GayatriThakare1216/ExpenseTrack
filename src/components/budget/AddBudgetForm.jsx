import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import notify from "../../utils/notifications";

import {
  Wallet,
  Plus
} from "lucide-react";


import useBudgetStore from "../../store/budgetStore";



function AddBudgetForm(){



const {
register,
handleSubmit,
reset,
formState:{
errors
}

}=useForm();




const {
addBudget,
budgets

}=useBudgetStore();





const onSubmit=(data)=>{



// duplicate category check

const exists =
budgets.some(

(item)=>

item.category.toLowerCase()
===
data.category.toLowerCase()

);




if(exists){

notify.error(
"Budget already exists"
);

return;

}





const newBudget={


id:Date.now(),


category:data.category,


limit:Number(data.limit),


month:data.month,


spent:0


};




addBudget(newBudget);



notify.success(
"Budget created successfully 🚀"
);



reset();



};







return(



<motion.form


initial={{

opacity:0,
y:20

}}



animate={{

opacity:1,
y:0

}}




onSubmit={
handleSubmit(onSubmit)
}



className="
space-y-6
"

>







<div className="
flex
items-center
gap-3
mb-2
">


<div

className="
h-12
w-12

rounded-2xl

bg-gradient-to-br

from-indigo-500

to-purple-600

text-white

flex
items-center
justify-center

"

>

<Wallet/>

</div>




<div>


<h2

className="
text-2xl
font-bold
dark:text-white
"

>

Create Budget

</h2>



<p

className="
text-sm
text-slate-500
"

>

Set monthly spending limit

</p>


</div>



</div>










{/* Category */}



<div>


<label className="
text-sm
font-medium
dark:text-white
">

Category

</label>



<select


{...register(
"category",
{
required:"Category required"
}
)}



className="

mt-2

w-full

p-3

rounded-xl


bg-slate-50

dark:bg-slate-800


dark:text-white


border

border-slate-200

dark:border-slate-700


outline-none


focus:ring-2

focus:ring-indigo-500

"

>


<option value="">
Select category
</option>


<option value="Food">
Food 🍔
</option>


<option value="Shopping">
Shopping 🛒
</option>


<option value="Travel">
Travel ✈️
</option>


<option value="Rent">
Rent 🏠
</option>



</select>




{
errors.category &&

<p className="
text-red-500
text-xs
mt-1
">

{errors.category.message}

</p>

}



</div>










{/* Limit */}



<div>


<label

className="
text-sm
font-medium
dark:text-white
"

>

Monthly Limit

</label>



<input



type="number"



placeholder="5000"



{...register(
"limit",
{

required:"Budget limit required",


min:{
value:100,
message:"Minimum budget ₹100"
}


}

)}



className="

mt-2

w-full

p-3

rounded-xl


bg-slate-50

dark:bg-slate-800


dark:text-white


border

border-slate-200

dark:border-slate-700


outline-none


focus:ring-2

focus:ring-indigo-500

"



/>





{

errors.limit &&

<p className="
text-red-500
text-xs
mt-1
">

{errors.limit.message}

</p>

}



</div>










{/* Month */}



<div>


<label

className="
text-sm
font-medium
dark:text-white
"

>

Month

</label>




<select


{...register(
"month",
{
required:"Month required"
}
)}



className="

mt-2

w-full

p-3

rounded-xl


bg-slate-50

dark:bg-slate-800


dark:text-white


border

border-slate-200

dark:border-slate-700


outline-none


focus:ring-2

focus:ring-indigo-500

"

>



<option value="">
Select Month
</option>


{

[

"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"

].map((month)=>(


<option

key={month}

value={month}

>

{month}

</option>


))


}



</select>





{

errors.month &&

<p className="
text-red-500
text-xs
mt-1
">

{errors.month.message}

</p>

}



</div>










{/* Button */}



<motion.button


whileHover={{

scale:1.03

}}



whileTap={{

scale:.97

}}




type="submit"



className="

w-full


flex

items-center

justify-center

gap-2



bg-gradient-to-r

from-indigo-600

to-purple-600



text-white



py-3



rounded-xl



font-semibold



shadow-lg



"

>


<Plus size={20}/>


Create Budget


</motion.button>





</motion.form>


)

}


export default AddBudgetForm;