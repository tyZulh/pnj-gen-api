import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.status(200).json(`Server reached successfully on the port : ${port}`)
})

app.listen(port, () => {
  console.log(`Server listening on port : ${port}`);
  
})