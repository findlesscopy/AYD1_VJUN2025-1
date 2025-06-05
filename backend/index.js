const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body

    console.log('Datos recibidos:', req.body);
    console.log('Usuario:', username);
    console.log('Contraseña:', password);

    res.json({
        message: 'Datos recibidos de manera exitosa',
        user: username,
        password: password
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});