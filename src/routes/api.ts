import { Router } from 'express';

import notion from '../controller/notion.controller';

const router = Router();

router.use('/notion', notion);

export default router;
