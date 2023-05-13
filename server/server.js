const express = require('express');
const app = express();
const PORT = 5000;

//modules
const historyArray = require('./modules/history');

app.use(express.static('server/public'));
app.use(express.urlencoded({extended: true}));

app.get('/history', (req, res) => {
    res.send(historyArray);
    console.log(historyArray);
})

app.post('/history', (req, res) => {
    //POST request to add req.body.num1, req.body.operator, and req.body.num2 to history
    let solution = 0;
    //error to throw if not all input requirements are met.
    if(!req.body.num1 || !req.body.operator || !req.body.num2){
        res.status(400).send("Please provide 2 number inputs and select an operator");
        return;
    }
    //if statement to determine solution key based on req.body.operator value
    if (req.body.operator === "+"){
        solution = Number(req.body.num1) + Number(req.body.num2)
    } else if (req.body.operator === "-"){
        solution = Number(req.body.num1) - Number(req.body.num2)
    } else if (req.body.operator === "*"){
        solution = Number(req.body.num1) * Number(req.body.num2)
    } else if (req.body.operator === "/"){
        solution = Number(req.body.num1) / Number(req.body.num2)
    }
    
    req.body.solution = solution;
    historyArray.push(req.body);
    res.sendStatus(200);
})

app.listen(PORT, () =>{
    console.log('listening on port', PORT)
});