import { NextApiRequest, NextApiResponse } from 'next';

import { TypesController } from '@/server/domains/types/types.controller';
import { TypesService } from '@/server/domains/types/types.service';
// import { CreateTypeDto } from '@/server/domains/types/dto/create-type.dto';
// import { UpdateTypeDto } from '@/server/domains/types/dto/update-type.dto';
// import { GetTypesDto } from '@/server/domains/types/dto/get-types.dto';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  const service = new TypesService();
  const controller = new TypesController(service);

  if (req.method === 'GET') {
    if (req.query.limit) {
      const limit = parseInt(req.query.limit as string, 10);
      const types = controller.findAll({ ...req.query, limit } as any);
      //types is not a promise, so we can return it directly in proper res
      return res.status(200).json(types);
    }
  }
  return res.status(404).json({ message: 'Endpoint not Handled' });
}
