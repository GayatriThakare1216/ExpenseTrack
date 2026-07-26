import {motion} from "framer-motion";
import {User} from "lucide-react";

import useAuthStore from "../../store/authStore";


function ProfileCard(){


const {user}=useAuthStore();



return(


<motion.div


whileHover={{
y:-5
}}


className="

bg-white

dark:bg-slate-900


border

border-slate-200

dark:border-slate-800


rounded-3xl


p-6


shadow-sm

"


>


<div className="
flex
items-center
gap-5
">


<div

className="

w-20

h-20


rounded-3xl


bg-gradient-to-br

from-indigo-500

to-purple-600


flex

items-center

justify-center


text-white


text-3xl

font-bold

"

>


{

user?.name?.charAt(0)

||
"U"

}


</div>





<div>


<h2 className="
text-2xl
font-bold
dark:text-white
">

{

user?.name || "User"

}

</h2>



<p className="
text-slate-500
">

{

user?.email || "user@email.com"

}

</p>



</div>



</div>





<div className="
mt-6
flex
items-center
gap-3
text-sm
text-slate-500
">


<User size={18}/>


Account Profile


</div>



</motion.div>


)

}


export default ProfileCard;