import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
    const navigate = useNavigate();

    const [log, setLog] = useState("");
    const [special, setSpecial] = useState("");
    const [weekly, setWeekly] = useState("");
    const [mood, setMood] = useState("");

    // Dynamic Expense List
    const [expenses, setExpenses] = useState([
        {
            on: "",
            amount: ""
        }
    ]);

    function handleLogChange(e) {
        setLog(e.target.value);
    }

    function handleSpecialChange(e) {
        setSpecial(e.target.value);
    }

    function handleWeeklyChange(e) {
        setWeekly(e.target.value);
    }

    function handleMoodChange(e) {
        setMood(e.target.value);
    }

    // Update a particular expense
    function handleExpenseChange(index, field, value) {
        const updated = [...expenses];
        updated[index][field] = value;
        setExpenses(updated);
    }

    // Add another expense row
    function handleCounterIncrement() {
        setExpenses(prev => [
            ...prev,
            {
                on: "",
                amount: ""
            }
        ]);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // Convert array -> object
        const expenseObject = {};

        expenses.forEach(item => {
            if (item.on.trim() !== "") {
                expenseObject[item.on] = Number(item.amount);
            }
        });

        try {
            await axios.post(
                "http://localhost:3000/create",
                {
                    log,
                    special,
                    weekly_task: weekly,
                    mood,
                    expense: expenseObject
                },
                {
                    withCredentials: true
                }
            );

            navigate("/data");
        } catch (err) {
            console.error("Something went wrong...", err);
        }

        console.log({
            log,
            special,
            weekly,
            mood,
            expenseObject
        });
    }

    return (
        <>
            <h1 className="heading_css">Create Here</h1>

            <form
                className="flex flex-col items-center justify-center mt-20"
                onSubmit={handleSubmit}
            >

                {/* Uncomment if needed */}

                
                <textarea
                    className="h-30 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
                    value={log}
                    onChange={handleLogChange}
                    placeholder="Write Log..."
                />

                <textarea
                    className="h-30 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
                    value={special}
                    onChange={handleSpecialChange}
                    placeholder="Special..."
                />

                <textarea
                    className="h-30 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
                    value={weekly}
                    onChange={handleWeeklyChange}
                    placeholder="Weekly Task..."
                />

                <textarea
                    className="h-30 w-100 border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
                    value={mood}
                    onChange={handleMoodChange}
                    placeholder="Mood..."
                />

                <div className="flex flex-col items-center">

                    {expenses.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-row justify-center items-center mb-3"
                        >
                            <input
                                className="border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
                                type="text"
                                placeholder="Expense"
                                value={item.on}
                                onChange={(e) =>
                                    handleExpenseChange(
                                        index,
                                        "on",
                                        e.target.value
                                    )
                                }
                            />

                            <p className="text-4xl font-bold mx-2">:</p>

                            <input
                                className="border-2 border-green-800 text-2xl p-3 rounded-lg focus:outline-none m-1 text-green-600"
                                type="number"
                                placeholder="Amount"
                                value={item.amount}
                                onChange={(e) =>
                                    handleExpenseChange(
                                        index,
                                        "amount",
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                    ))}

                    <p
                        className="hover:cursor-pointer hover:text-green-400 hover:scale-110 text-5xl font-bold text-green-500"
                        onClick={handleCounterIncrement}
                    >
                        +
                    </p>

                </div>

                <button
                    type="submit"
                    className="button_css mt-6"
                >
                    Submit
                </button>
            </form>
        </>
    );
}

export default Create;
