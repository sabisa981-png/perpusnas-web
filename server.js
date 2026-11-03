const express = require('express');
const path = require('path');
const app = express();

// Memberitahu Express untuk menyajikan file dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Jika ada yang membuka localhost:3000, tampilkan index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});