import express from "express";

const app = express();

const port =8080;

// Middleware
app.use(express.json())

// pesan di browser
app.get('/', (req, res) => {
    res.json({
        message: "hellooow"
    })
})

app.post('/user2', (req, res) => {
    const body = req.body;

    res.status(201).json({
        message: "Berhasil nambahin",
        data: {
            id: 1,
            nama: body.nama
        }
    })
})

app.get('/user', (req, res) => {
    res.status(200).json({
        message: "User berhasil ditambahkan",
        data: {
            id: 1,
            nama: "Feby"
        }
    })
})

// pesan di terminal 
app.listen(port, () => {
   console.log(`Welcome to my server ${port}`);
});


