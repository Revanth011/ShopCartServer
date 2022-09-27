const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
app.use(cors());
app.use(express.json());

app.get("/products", async (req, res) => {
    const resp = await axios.get("https://fakestoreapi.com/products");
    const data = await resp.data;
    var page = [];
    if ((req.query.page * 10) <= data.length) {
        for (let i = (req.query.page * 10) - 10; i < req.query.page * 10; i++) {
            page.push(data[i]);
        }
    }
    res.status(200).send(page);
})

app.listen(process.env.PORT || 8000, () => console.log("Server Running"));