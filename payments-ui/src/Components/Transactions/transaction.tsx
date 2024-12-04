import { useEffect, useState } from "react";

const Transactions = (): React.ReactElement => {
  
  const [data, setData] = useState<Transaction[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://paymentsdemo.neueda.com/api/payment", {
        method: "GET",
        headers: {
          Accept:"application/json"
        }
      });
      const jsonData = await data.json();
      setData(jsonData);
    };

    api();
  }, []);
  console.log(data);
  
    return (
        
      <table className="transactions">
        <thead>
            <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Country</th>
                <th>Currency</th>
                <th>Amount</th>
                <th>Tax Code</th>
                <th>Tax Rate</th>
                <th>Type</th>
                <th>OrderId</th>
            </tr>
        </thead>
        <tbody> 
            {data.map(data => 
          
                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.date}</td>
                    <td>{data.country}</td>
                    <td>{data.currency}</td>
                    <td>{data.amount}</td>
                    <td>{data.taxCode}</td>
                    <td>{data.taxRate}</td>
                    <td>{data.type}</td>
                    <td>{data.orderId}</td>
                </tr>
            )}
        </tbody>
      </table>
    );
  };
  export default Transactions;
  export type Transaction = {
      id: number;
      amount: number;
      country: string;
      currency: string;
      date: string;
      orderId: string;
      taxCode: number;
      taxRate: number;
      type: string;
    };

   