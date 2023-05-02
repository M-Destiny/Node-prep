// console.log('It works');

import express from 'express';
// import dotenv from 'dotenv';\
import * as dotenv from 'dotenv'
dotenv.config()
console.log(express);
console.log(typeof express);
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/login', (req, res) => {
    res.send('Login');
})
app.delete('/delete', (req, res) => {
    res.send('Delete');
})
app.put('/put', (req, res) => {
    res.send('Put');
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})