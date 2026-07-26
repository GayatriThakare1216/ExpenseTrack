export function exportTransactionsCSV(transactions){


const headers = [

"Title",
"Category",
"Type",
"Amount",
"Date"

];



const rows = transactions.map(
(item)=>([

item.title,

item.category,

item.type,

item.amount,

item.date

])

);



const csvContent = [

headers,

...rows

]

.map(
(row)=>
row.join(",")
)

.join("\n");



const blob = new Blob(
[
csvContent
],
{
type:"text/csv"
}
);



const url =
URL.createObjectURL(blob);



const link =
document.createElement("a");


link.href=url;


link.download=
"finance-report.csv";


link.click();


URL.revokeObjectURL(url);


}