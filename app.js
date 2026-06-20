const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (map, res) => {
    res.send('Hello World from ECS Fargate!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});