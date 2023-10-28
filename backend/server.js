const express = require('express');
const db = require('./db');
const Pizza = require('./models/pizzaModel');
const app = express();
const cors = require("cors")
const pizzasRoute = require('./routes/pizzaRoutes');
const userRoute = require('./routes/userRoutes');

app.use(express.json());
app.use(cors())

app.use('/api/pizzas', pizzasRoute);
app.use('/api/users', userRoute);

app.get('/', (req, res) => {
  res.send('Server Working');
});

const port = process.env.PORT || 8000

app.listen(port,()=> console.log('server in running on port 8000'))
