import { useState } from "react";
import Transactions from "./Transactions";

function Form({ handleSubmit, transactions }) {

    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category: "",
        amount: 0
    })
    function submit(e) {
        e.preventDefault();
        handleSubmit(formData);
    }

    return (
        <>
            <form onSubmit={submit}>
                <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                <input
                    type="text"
                    placeholder="Add your description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Add your Category"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                />
                <input
                    type="number"
                    placeholder="Add your Amount"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form;