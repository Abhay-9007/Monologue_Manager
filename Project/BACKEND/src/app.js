const express = require("express");

const app = express();

let today = new Date();
let todayDate = today.toISOString().split('T')[0];

// console.log(todayDate);

const nodeModel = require('./models/node.model');

app.use(express.json());

app.post('/home', async (req, res) => {
    try {
        const { logs, special, expense } = req.body;

        const newData = await nodeModel.create({
            date: todayDate,
            logs: logs || [],
            special: special || [],
            expense: expense || {}
        });

        res.status(201).json({
            message: "Task Done...",
            data: newData
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

app.get('/home', async (req, res) => {
    try {
        const { date } = req.query;

        const data = await nodeModel.findOne({ date });

        if (!data) {
            return res.status(404).json({
                message: "No data found for this date"
            });
        }

        res.status(200).json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error fetching data"
        });
    }
});


module.exports = app;
