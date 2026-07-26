import {DollarSign} from "lucide-react";


function CurrencySettings(){


return(


<div className="

bg-white

dark:bg-slate-900


border

dark:border-slate-800


rounded-3xl


p-6

"


>


<div className="
flex
items-center
gap-3
mb-5
">


<div className="
p-3
rounded-xl
bg-green-100
text-green-600
">

<DollarSign/>

</div>


<h2 className="
text-xl
font-bold
dark:text-white
">

Preferences

</h2>


</div>





<label className="
text-sm
text-slate-500
">

Currency

</label>


<select

className="

mt-2

w-full

p-3


rounded-xl


bg-slate-100


dark:bg-slate-800


dark:text-white

"

>


<option>
₹ INR
</option>


<option>
$ USD
</option>


<option>
€ EURO
</option>


</select>




</div>


)

}


export default CurrencySettings;