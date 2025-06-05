import { NextApiRequest, NextApiResponse } from 'next';
import { ProductsController } from '@/server/products/products.controller';
import { ProductsService } from '@/server/products/products.service';

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
    const products = pc.getProducts(req.query);
    return products.then((data) => res.status(200).json(data));
  }
}
