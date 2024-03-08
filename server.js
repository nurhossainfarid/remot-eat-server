import express from "express";

const app = express();
const PORT = process.env.PORT || 4848;

// middleware
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    return res.send("RemotEat Server Running...")
})

app.listen(PORT, () => console.log(`RemotEat Server Running PORT ${PORT}`));