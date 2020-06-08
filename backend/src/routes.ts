import express from 'express';
import knex from './database/connection';

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Hello World' }));

router.get('/items', async (req, res) => {
  const items = await knex('items').select('*');

  const serialized = items.map((item, index) => {
    return {
      id: index,
      title: item.title,
      image: `http://localhost:5000/uploads/${item.image}`,
    };
  });

  return res.json(serialized);
});

export default router;