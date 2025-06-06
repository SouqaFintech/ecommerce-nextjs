import { NextApiRequest, NextApiResponse } from 'next';
import { CategoriesController } from '@/server/domains/categories/categories.controller';
import { CategoriesService } from '@/server/domains/categories/categories.service';
// import { GetCategoriesDto, QueryCategoriesOrderByColumn } from '@/server/domains/categories/dto/get-categories.dto';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const service = new CategoriesService();
  const controller = new CategoriesController(service);

  if (req.method === 'GET') {
    try {
      const categories = controller.findAll(req.query);
      return res.status(200).json(categories);
    } catch (error) {
      return res
        .status(500)
        .json({
          message: 'Internal Server Error',
          error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
  }

  return res.status(404).json({ message: 'Endpoint not Handled' });
}
