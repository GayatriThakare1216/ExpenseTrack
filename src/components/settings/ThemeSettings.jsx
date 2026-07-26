import {Sun,Moon} from "lucide-react";
import useThemeStore from "../../store/themeStore";


function ThemeSettings(){


const {
theme,
toggleTheme

}=useThemeStore();



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
justify-between
items-center
">


<div className="
flex
gap-4
items-center
">


<div className="
p-3
rounded-xl
bg-indigo-100

dark:bg-indigo-900/40
">


{

theme==="dark"

?

<Moon/>

:

<Sun/>

}


</div>



<div>


<h3 className="
font-bold
dark:text-white
">

Theme

</h3>


<p className="
text-sm
text-slate-500
">

Switch light and dark mode

</p>


</div>



</div>





<button


onClick={toggleTheme}


className="

w-16

h-8

rounded-full

bg-indigo-600

relative

"


>


<div

className={`

absolute

top-1


w-6

h-6


bg-white


rounded-full


transition


${

theme==="dark"

?

"translate-x-9"

:

"translate-x-1"

}

`}


/>


</button>


</div>



</div>


)

}


export default ThemeSettings;