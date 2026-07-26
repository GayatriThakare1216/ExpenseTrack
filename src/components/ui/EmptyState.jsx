function EmptyState(){

return(

<div

className="
bg-white
dark:bg-slate-900

border
border-dashed
border-slate-300
dark:border-slate-700

rounded-2xl

p-10

text-center
"

>


<h3

className="
text-xl
font-semibold
dark:text-white
"

>
No transactions yet
</h3>


<p

className="
text-slate-500
mt-2
"

>
Add your first transaction to start tracking your money.
</p>


</div>

)

}


export default EmptyState;