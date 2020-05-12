import { Router, Request, Response } from "express";

const router = Router();

router.post("/api/users/signup", (req: Request, res: Response) => {
  res.send("Hi there");
});

export { router as signupRouter };
