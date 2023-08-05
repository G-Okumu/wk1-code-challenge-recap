import { useEffect, useState } from "react";
import Form from "./Form.js";

function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8001/transactions')
            .then(resp => resp.json())
            .then(data => {
                setTransactions(data);
            })
    }, [])


    function handleSubmit(data) {
        fetch('http://localhost:8001/transactions', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => setTransactions((prevTransactions) => [...prevTransactions, data]));
    }

    return (
        <div>
            <br></br>
            <Form handleSubmit={handleSubmit} />
            <br />
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map((singleTransaction) => (
                        <tr key={singleTransaction.id}>
                            <td>{singleTransaction.date}</td>
                            <td>{singleTransaction.description}</td>
                            <td>{singleTransaction.category}</td>
                            <td>{singleTransaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Transactions;