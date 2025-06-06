import { NextApiRequest, NextApiResponse } from 'next';
import { TypesController } from '@/server/domains/types/types.controller';
import { TypesService } from '@/server/domains/types/types.service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const service = new TypesService();
  const controller = new TypesController(service);

  if (req.method === 'GET') {
    const typeSlug = (req.query.slug as string[])[0];

    // const { /*orderBy,*/ text, language, search } = req.query;
    // const dto: GetTypesDto = {
    //   // orderBy: orderBy as QueryTypesOrderByOrderByClause[],
    //   text: text as string,
    //   language: language as string,
    //   search: search as string,
    // };

    const type = controller.getTypeBySlug(typeSlug);
    return res.status(200).json(type);
  }

  return res.status(404).json({ message: 'Endpoint not Handled' });
}
