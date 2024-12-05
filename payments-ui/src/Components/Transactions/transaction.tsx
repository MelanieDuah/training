import { useEffect, useState } from "react";
import paymentTransaction from "./stubdata";

const Transactions = (): React.ReactElement => {

    const [dataResponse, setData] = useState<Transaction[]>([]);

	//add
	useEffect(() => {
	paymentTransaction.getAllPayments().then((data)=>setData(data));
    return () => {};
	}, []);

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
                {dataResponse.map(data =>

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

