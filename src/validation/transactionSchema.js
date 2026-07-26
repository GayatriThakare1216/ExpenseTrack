import { z } from "zod";


export const transactionSchema = z.object({

title:

z.string()
.min(3,"Title must be at least 3 characters"),



amount:

z.number({
message:"Amount is required"
})
.positive("Amount must be greater than 0"),



category:

z.string()
.min(2,"Category is required"),



type:

z.enum(
[
"income",
"expense"
]
),



date:

z.string()
.min(1,"Date is required")

});