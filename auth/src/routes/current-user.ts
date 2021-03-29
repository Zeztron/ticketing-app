import { Router, Request, Response } from 'express';
import { currentUser } from '@hpgittix/common';

const router = Router();

router.get(
  '/api/users/currentuser',
  currentUser,
  (req: Request, res: Response) => {
    res.send({ currentUser: req.currentUser || null });
  }
);

export { router as currentUserRouter };
