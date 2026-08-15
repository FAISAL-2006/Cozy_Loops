import type {Discount} from "../types/discount"
//mention type in import , for importing types 
export const DISCOUNTS: Discount[]=[
    {
        id: 1,
        bank: "ICICI",
        percentage: "30%",
        isAvailable: true,
    },
    {
          id: 2,
          bank:"HDFC",
          percentage: "25%",
          isAvailable: false,        
    }
]