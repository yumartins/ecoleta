import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json([
    'Yuri',
    'Yam',
    'Carolina',
  ]);
});

app.listen(5000);