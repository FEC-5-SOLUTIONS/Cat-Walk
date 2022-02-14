const express = require('express');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${PORT}`);
});
