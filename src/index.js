const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

const staticPath = path.join(__dirname, '../public')

// built in middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send('hello from the express server');
});

app.listen(8000, () => {
    console.log(`listening to the port ${port}`);
});
