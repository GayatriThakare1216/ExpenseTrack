import { Download } from "lucide-react";
import { exportTransactionsCSV } 
from "../../utils/exportCSV";


function ExportButton({transactions}){


return(

<button

onClick={()=>{

exportTransactionsCSV(
transactions
);

}}

className="
flex
items-center
gap-2

bg-indigo-600

text-white

px-5

py-3

rounded-xl

hover:bg-indigo-700

transition
"

>

<Download size={18}/>

Export CSV

</button>

)

}


export default ExportButton;