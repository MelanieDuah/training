
const Transactions = ({transactions}:{transactions: Transaction[]}): React.ReactElement => {

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
                <th>OderId</th>
            </tr>
        </thead>
        <tbody>
            {transactions.map(transaction => 
            <>
                <tr>
                    <td>{transaction.id}</td>
                    <td>{transaction.date.toDateString()}</td>
                    <td>{transaction.country}</td>
                    <td>{transaction.currency}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.taxCode}</td>
                    <td>{transaction.taxRate}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.orderId}</td>
                </tr>
            </>)}
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
      date: Date;
      orderId: string;
      taxCode: number;
      taxRate: number;
      type: string;
    };

   