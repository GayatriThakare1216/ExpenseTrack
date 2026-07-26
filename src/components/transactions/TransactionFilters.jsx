import {
  Search,
  SlidersHorizontal
} from "lucide-react";

import { motion } from "framer-motion";



function TransactionFilters({

search,

setSearch,

filter,

setFilter

}){



const filters=[

{
label:"All",
value:"all"
},

{
label:"Income",
value:"income"
},

{
label:"Expense",
value:"expense"
}

];





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

bg-white

dark:bg-slate-900


border

border-slate-200

dark:border-slate-800


rounded-3xl


p-5


shadow-sm


"

>



<div className="

flex

items-center

gap-2

mb-5

">


<div className="

h-10

w-10


rounded-xl


bg-indigo-600


text-white


flex

items-center

justify-center

">


<SlidersHorizontal size={20}/>


</div>




<div>

<h3 className="

font-bold

dark:text-white

">

Filter Transactions

</h3>


<p className="

text-sm

text-slate-500

">

Search and manage your activity

</p>


</div>


</div>









<div className="

flex

flex-col

lg:flex-row

gap-4

justify-between

"

>






{/* Search */}


<div className="

relative

flex-1

">


<Search

size={20}

className="

absolute

left-4

top-1/2

-translate-y-1/2

text-slate-400

"

/>




<input


value={search}


onChange={(e)=>setSearch(e.target.value)}



placeholder="Search transaction..."



className="

w-full

pl-12

pr-5

py-3


rounded-2xl


bg-slate-100


dark:bg-slate-800


text-slate-700


dark:text-white


outline-none


focus:ring-2

focus:ring-indigo-500


transition

"



/>


</div>









{/* Filter Buttons */}



<div className="

flex

gap-2

bg-slate-100

dark:bg-slate-800

p-1

rounded-2xl

"

>


{


filters.map((item)=>{


const active = filter===item.value;



return(


<button



key={item.value}



onClick={()=>setFilter(item.value)}




className="

relative

px-5

py-2.5


rounded-xl


font-medium


text-sm


transition


"


>


{

active && (

<motion.div


layoutId="activeFilter"


className="

absolute

inset-0


rounded-xl


bg-indigo-600


"


transition={{

type:"spring",

duration:.5

}}



/>


)



}




<span

className={`

relative

z-10


${

active

?

"text-white"

:

"text-slate-600 dark:text-slate-300"

}

`}

>

{item.label}

</span>



</button>


)


})

}


</div>








</div>



</motion.div>


)

}



export default TransactionFilters;