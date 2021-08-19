const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
	res.send('<h1>I modified the content for testing</h1>');
});

app.listen(port, () => console.log(`Server on port ${port}`));
