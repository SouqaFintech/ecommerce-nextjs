import { NextApiRequest, NextApiResponse } from 'next';
import { SettingsController } from '@/server/domains/settings/settings.controller';
import { SettingsService } from '@/server/domains/settings/settings.service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const service = new SettingsService();
  const controller = new SettingsController(service);

  if (req.method === 'GET') {
    const settings = await controller.findAll();
    return res.status(200).json(settings);
  }

  return res.status(404).json({ message: 'Endpoint not Handled' });
}

// Flow Details
// 2025-06-06 11:47:30 GET http://localhost:9000/api/settings?language=en                                                   
//                         ← server closed connection
//                  Request                                   Response                                  Detail
// Accept:           application/json, text/plain, */*                                                                       
// Content-Type:     application/json                                                                                        
