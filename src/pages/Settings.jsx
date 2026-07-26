import { motion } from "framer-motion";
import {
  LogOut
} from "lucide-react";

import notify from "../utils/notifications";
import { useNavigate } from "react-router-dom";


import useAuthStore from "../store/authStore";


import ProfileCard from "../components/settings/ProfileCard";
import ThemeSettings from "../components/settings/ThemeSettings";
import CurrencySettings from "../components/settings/CurrencySettings";
import DataManagement from "../components/settings/DataManagement";



function Settings(){


const navigate = useNavigate();


const {
logout
}=useAuthStore();



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



{/* HEADER */}

<div>


<h1 className="
text-4xl
font-bold
dark:text-white
">

Settings ⚙️

</h1>


<p className="
mt-2
text-slate-500
">

Manage your profile, preferences and application settings.

</p>


</div>







{/* PROFILE */}


<ProfileCard/>







{/* THEME */}


<ThemeSettings/>







{/* CURRENCY


<CurrencySettings/> */}








{/* DATA MANAGEMENT */}


<DataManagement/>







{/* LOGOUT */}


<motion.div

whileHover={{
y:-5
}}

className="

bg-white

dark:bg-slate-900


border

dark:border-slate-800


rounded-3xl


p-6

shadow-sm

"

>


<h2 className="
text-xl
font-bold
dark:text-white
">

Account

</h2>




<button


onClick={()=>{


logout();


notify.success(
"Logged out successfully 👋"
);


navigate("/login");


}}



className="

mt-5


flex

items-center

gap-3


text-red-500


hover:text-red-600


transition

"

>


<LogOut size={20}/>


Logout


</button>



</motion.div>







</motion.div>


)

}


export default Settings;