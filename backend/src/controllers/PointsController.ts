import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
  async create(req: Request, res: Response) {
    const {
      uf,
      city,
      name,
      items,
      email,
      whatsapp,
      latitude,
      longitude,
    } = req.body;

    const trx = await knex.transaction();

    const point = {
      uf,
      city,
      name,
      email,
      image: 'image',
      whatsapp,
      latitude,
      longitude,
    };

    const insertedIds = await trx('points').insert(point);

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => ({
      item_id,
      point_id,
    }));

    await trx('point_items').insert(pointItems);

    return res.json({
      id: point_id,
      ...point,
    });
  }
};

export default PointsController;