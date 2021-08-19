const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
	res.send('Hello Dude');
});

app.listen(port, () => console.log(`Server on port ${port}`));
