import { NextApiRequest, NextApiResponse } from 'next';
import { ProductsController } from '@/server/domains/products/products.controller';
import { ProductsService } from '@/server/domains/products/products.service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  const ps = new ProductsService();
  const pc = new ProductsController(ps);

  if (req.method === 'POST') {
    const product = pc.createProduct(req.body);
    return res.status(201).json(product);
  }

  if (req.method === 'GET') {
    const { searchJoin, with: withQuery, limit, language, search } = req.query;
    const queryParams = {
      searchJoin: searchJoin as string,
      with: withQuery as string,
      limit: limit ? parseInt(limit as string, 10) : undefined,
      language: language as string,
      search: search as string,
    };

    const products = pc.getProducts(req.query);
    return products.then((data) => res.status(200).json(data));
  }
}
