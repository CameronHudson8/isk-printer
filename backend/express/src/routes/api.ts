import express from 'express';
const router = express.Router();

import tokenRoutes from 'src/routes/api/tokens';

router.use('/tokens', tokenRoutes);

router.get('/', (req: any, res: any, next: any) => {
  res.sendStatus(200);
});

export default router;
