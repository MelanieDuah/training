import { Transaction } from "./transaction";

const transactions: Transaction[] = [
  {
    id: 139235,
    amount: 60,
    country: "usa",
    currency: "usd",
    date: new Date(2018,12,30),
    orderId: "21213627",
    taxCode: 0,
    taxRate: 0,
    type: "VISA",
  },
  {
    id: 139236,
    amount: 35,
    country: "usa",
    currency: "usd",
    date: new Date(2018,12,30),
    orderId: "21213448",
    taxCode: 0,
    taxRate: 0,
    type: "VISA",
  },
];

export default transactions;