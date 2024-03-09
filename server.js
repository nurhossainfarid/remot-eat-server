import express from "express";
import routes from "./Routes/index.js";

const app = express();
const PORT = process.env.PORT || 4848;

// middleware
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    return res.send("RemotEat Server Running...")
})

// Routes file
app.use(routes);

app.listen(PORT, () => console.log(`RemotEat Server Running PORT ${PORT}`));