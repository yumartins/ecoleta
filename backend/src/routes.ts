import express from 'express';
import knex from './database/connection';
import PointsController from './controllers/PointsController';

const router = express.Router();

const pointsController = new PointsController();

router.get('/', (req, res) => res.json({ message: 'Hello World' }));

router.get('/items', async (req, res) => {
  const items = await knex('items').select('*');

  const serialized = items.map(({ id, title, image }, index) => ({
    id,
    title,
    image: `http://localhost:5000/uploads/${image}`,
  }));

  return res.json(serialized);
});

router.post('/points', pointsController.create);

export default router;