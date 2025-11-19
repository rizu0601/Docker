const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Node.js App running inside Docker with Jenkins!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
