const express = require("express")
const dotenv = require("dotenv")
dotenv.config({ path: "./cons.env" });
const app = express();
process.env;
app.get('/', (req, res) => {
    res.send("hello express")
})
app.listen(process.env.PORT, console.log(`hello express ${process.env.PORT} aslaa`));