// backend/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('API funcionando 🚀'));

app.listen(PORT, () => console.log(`Servidor backend en http://localhost:${PORT}`));
