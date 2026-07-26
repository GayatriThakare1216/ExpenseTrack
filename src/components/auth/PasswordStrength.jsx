import { motion } from "framer-motion";


function PasswordStrength({
password
}){


const checks=[

password.length>=8,

/[A-Z]/.test(password),

/[0-9]/.test(password),

/[^A-Za-z0-9]/.test(password)

];



const score =
checks.filter(Boolean).length;



const strength=[

{
text:"Very Weak",
color:"bg-red-500"
},

{
text:"Weak",
color:"bg-orange-500"
},

{
text:"Medium",
color:"bg-yellow-500"
},

{
text:"Strong",
color:"bg-green-500"
},

{
text:"Excellent",
color:"bg-emerald-500"
}

];



if(!password)
return null;



return(

<div className="mt-3 space-y-3">



<div className="
flex
justify-between
text-sm
">


<span

className="
text-slate-500
dark:text-slate-400
"

>

Password Strength

</span>



<span

className="
font-semibold
dark:text-white
"

>

{
strength[score].text
}

</span>


</div>





<div

className="

h-2

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

width:`${score*25}%`

}}

transition={{
duration:.5
}}


className={

`
h-full
rounded-full

${strength[score].color}

`

}


/>


</div>




<div className="
text-xs
space-y-1
text-slate-500
">


<p className={
checks[0]
?
"text-green-500"
:
""
}>
✓ Minimum 8 characters
</p>


<p className={
checks[1]
?
"text-green-500"
:
""
}>
✓ One uppercase letter
</p>


<p className={
checks[2]
?
"text-green-500"
:
""
}>
✓ One number
</p>


<p className={
checks[3]
?
"text-green-500"
:
""
}>
✓ One special character
</p>


</div>



</div>

)

}


export default PasswordStrength;