import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Layout({children}){


return(

<div

className="
min-h-screen

bg-slate-100

dark:bg-slate-950
"

>


<Sidebar/>


<div

className="

md:ml-64

"

>


<Navbar/>




<main

className="

p-5

md:p-8

"

>

{children}

</main>




<Footer/>



</div>


</div>


)

}


export default Layout;