import { Router, Request, Response } from "express";
import { body, validationResult } from 'express-validator';

const router = Router();

router.post("/api/users/signup", [
  body('email')
    .isEmail()
    .withMessage('Email must be valid'),
  body('password')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Password must be between 4 and 20 characters')
], async (req: Request, res: Response) => {
  const errors = validationResult(req);

  const { email, password } = req.body;

  console.log('creating user')

  res.send({});
});

export { router as signupRouter };