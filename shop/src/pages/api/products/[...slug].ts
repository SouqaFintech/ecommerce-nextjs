import { NextApiRequest, NextApiResponse } from 'next';
import { ProductsController } from '@/server/domains/products/products.controller';
import { ProductsService } from '@/server/domains/products/products.service';
import { oc } from 'date-fns/locale';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  const ps = new ProductsService();
  const pc = new ProductsController(ps);

  if (req.method === 'GET') {
    const productSlug = (req.query.slug as string[])[0];
    const product = pc.getProductBySlug(productSlug);
    return product.then((data) => res.status(200).json(data));
  }
}
