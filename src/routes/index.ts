import express, { Request, Response } from 'express';
import tableData from '../raw/table';

const router = express.Router();

router.get('/data/table', async (req: Request, res: Response): Promise<any> => {
  res.status(201).json({ data: { code: '0000', rows: tableData } });
});

export { router as indexRouter };
